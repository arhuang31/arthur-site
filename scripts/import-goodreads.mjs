// Regenerates data/bookshelf.ts from a Goodreads library export.
// Export it at goodreads.com → My Books → Import and export → Export library, then run:
//   node scripts/import-goodreads.mjs ~/Downloads/goodreads_library_export.csv
import { readFileSync, writeFileSync } from "node:fs";

const OUT = new URL("../data/bookshelf.ts", import.meta.url);
// Books by these authors stay on Goodreads but are left off the site.
const HIDDEN_AUTHORS = new Set(["Noam Chomsky"]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field || row.length) rows.push([...row, field]);
  const [header, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])));
}

// Keep covers already in the file; look up new ones on Open Library by ISBN.
function existingCovers() {
  try {
    const src = readFileSync(OUT, "utf8");
    return new Map([...src.matchAll(/id: "(\d+)".*?cover: "([^"]*)"/g)].map((m) => [m[1], m[2]]));
  } catch {
    return new Map();
  }
}

async function openLibraryCover(isbn) {
  if (!isbn) return "";
  const url = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok ? url.replace("?default=false", "") : "";
  } catch {
    return "";
  }
}

// Fallback when the export has no ISBN (common for Kindle editions): search by title and author.
async function openLibrarySearchCover(title, author) {
  const params = new URLSearchParams({ title, author, fields: "cover_i", limit: "5" });
  try {
    const res = await fetch(`https://openlibrary.org/search.json?${params}`);
    if (!res.ok) return "";
    const coverId = (await res.json()).docs?.find((d) => d.cover_i)?.cover_i;
    return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : "";
  } catch {
    return "";
  }
}

const cleanIsbn =(v) => v.replace(/[^0-9X]/gi, "");
const cleanTitle = (t) => t.split(":")[0].replace(/\s*\([^)]*\)$/, "").trim();

const csvPath = process.argv[2];
if (!csvPath) {
  console.error("usage: node scripts/import-goodreads.mjs <goodreads_library_export.csv>");
  process.exit(1);
}

const covers = existingCovers();
const shelves = { read: [], "currently-reading": [], "to-read": [] };

for (const r of parseCsv(readFileSync(csvPath, "utf8"))) {
  const shelf = shelves[r["Exclusive Shelf"]];
  const author = r.Author.replace(/\s+/g, " ").trim();
  if (!shelf || HIDDEN_AUTHORS.has(author)) continue;
  const id = r["Book Id"];
  const title = cleanTitle(r.Title);
  const cover =
    covers.get(id) ||
    (await openLibraryCover(cleanIsbn(r.ISBN13) || cleanIsbn(r.ISBN))) ||
    (await openLibrarySearchCover(title, author));
  shelf.push({
    id,
    title,
    author,
    rating: Number(r["My Rating"]) || 0,
    cover,
  });
}

const fmt = (b) =>
  `  { id: ${JSON.stringify(b.id)}, title: ${JSON.stringify(b.title)}, author: ${JSON.stringify(b.author)}, rating: ${b.rating}, cover: ${JSON.stringify(b.cover)} },`;
const list = (books) => books.map(fmt).join("\n");

writeFileSync(
  OUT,
  `// Generated from a Goodreads export by scripts/import-goodreads.mjs. Safe to edit by hand.
export type Book = {
  /** Goodreads book id — the number in goodreads.com/book/show/<id>. */
  id: string;
  title: string;
  author: string;
  /** Your rating out of 5; 0 means unrated. */
  rating: number;
  cover: string;
};

export const readBooks: Book[] = [
${list(shelves.read)}
];

export const currentlyReading: Book[] = [
${list(shelves["currently-reading"])}
];

export const wantToRead: Book[] = [
${list(shelves["to-read"])}
];
`,
);

const missing = Object.values(shelves).flat().filter((b) => !b.cover).length;
console.log(
  `read ${shelves.read.length}, reading ${shelves["currently-reading"].length}, want to read ${shelves["to-read"].length}` +
    (missing ? ` (${missing} without a cover)` : ""),
);
