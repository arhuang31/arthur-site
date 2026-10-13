import { XMLParser } from "fast-xml-parser";

const GOODREADS_USER_ID = "173790713";
const REVALIDATE_SECONDS = 60 * 60 * 24;

export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  url: string;
};

type RssItem = {
  title: string | number;
  book_id: string | number;
  author_name: string;
  book_large_image_url?: string;
  book_image_url?: string;
  user_rating?: string | number;
};

const parser = new XMLParser({ ignoreAttributes: true, cdataPropName: false });

function toBook(item: RssItem): Book {
  const rawCover = item.book_large_image_url || item.book_image_url || "";
  return {
    id: String(item.book_id),
    title: String(item.title)
      .split(":")[0]
      .replace(/\s*\([^)]*\)$/, "")
      .trim(),
    author: String(item.author_name).replace(/\s+/g, " ").trim(),
    // Goodreads appends size suffixes like "._SY475_"; stripping it returns the full-size cover.
    cover: rawCover.includes("nophoto") ? "" : rawCover.replace(/\._S[XY]\d+_/, ""),
    rating: Number(item.user_rating) || 0,
    url: `https://www.goodreads.com/book/show/${item.book_id}`,
  };
}

export async function getShelf(shelf: "read" | "currently-reading"): Promise<Book[]> {
  const url = `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=${shelf}&per_page=200`;
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = parser.parse(xml)?.rss?.channel?.item;
    if (!items) return [];
    return (Array.isArray(items) ? items : [items]).map(toBook);
  } catch {
    return [];
  }
}
