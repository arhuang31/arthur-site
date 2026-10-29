/* eslint-disable @next/next/no-img-element */
import { currentlyReading, readBooks, wantToRead, type Book } from "../../../data/bookshelf";
import { topBooks } from "../../../data/readings";

const GOODREADS_PROFILE = "https://www.goodreads.com/user/show/173790713-arthur-huang";

function Cover({ src, alt, className }: { src: string; alt: string; className: string }) {
  if (!src) {
    return (
      <div
        className={`${className} flex items-center justify-center border border-current/20 p-2 text-center text-xs text-current/50`}
      >
        {alt}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${className} object-cover grayscale transition duration-300 group-hover:grayscale-0`}
    />
  );
}

function Rating({ value }: { value: number }) {
  if (!value) return null;
  return (
    <span className="text-xs tracking-widest text-current/50" aria-label={`rated ${value} of 5`}>
      {"●".repeat(value)}
      {"○".repeat(5 - value)}
    </span>
  );
}

const bookUrl = (id: string) => `https://www.goodreads.com/book/show/${id}`;

export default function ReadingsPage() {
  const byId = new Map<string, Book>([...readBooks, ...currentlyReading].map((b) => [b.id, b]));
  const currentIds = new Set(currentlyReading.map((b) => b.id));
  // Highest rated first; unrated (incl. in-progress) books sink to the end. Sort is stable, so ties keep file order.
  const shelf = [...currentlyReading.filter((b) => !readBooks.some((r) => r.id === b.id)), ...readBooks].sort(
    (a, b) => b.rating - a.rating,
  );

  return (
    <main className="mx-auto w-full px-6 pb-20">
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Top 3</h2>
        <ol className="mt-6 grid gap-10 md:grid-cols-3">
          {topBooks.map((book) => {
            const cover = byId.get(book.goodreadsId)?.cover ?? "";
            return (
              <li key={book.goodreadsId} className="group">
                <a
                  href={bookUrl(book.goodreadsId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4"
                >
                  <Cover src={cover} alt={book.title} className="h-36 w-24 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="mt-1 text-sm text-current/60">{book.author}</p>
                  </div>
                </a>
                <blockquote className="mt-4 border-l border-current/20 pl-4 text-sm italic leading-6 text-current/80">
                  “{book.quote}”
                </blockquote>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold">Bookshelf</h2>
          <a
            href={GOODREADS_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-current/60 underline underline-offset-4 hover:text-current"
          >
            {shelf.length ? `${shelf.length} books on goodreads →` : "see goodreads →"}
          </a>
        </div>
        <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {shelf.map((book) => (
            <li key={book.id} className="group">
              <a href={bookUrl(book.id)} target="_blank" rel="noopener noreferrer" className="block">
                <Cover src={book.cover} alt={book.title} className="aspect-[2/3] w-full" />
                <h3 className="mt-2 text-sm font-semibold leading-snug">{book.title}</h3>
                <p className="mt-1 text-xs text-current/60">{book.author}</p>
                <div className="mt-1">
                  {currentIds.has(book.id) ? (
                    <span className="text-xs uppercase tracking-wide text-current/50">reading</span>
                  ) : (
                    <Rating value={book.rating} />
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {wantToRead.length ? (
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Want to read</h2>
          <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            {wantToRead.map((book) => (
              <li key={book.id} className="group">
                <a href={bookUrl(book.id)} target="_blank" rel="noopener noreferrer" className="block">
                  <Cover src={book.cover} alt={book.title} className="aspect-[2/3] w-full" />
                  <h3 className="mt-2 text-sm font-semibold leading-snug">{book.title}</h3>
                  <p className="mt-1 text-xs text-current/60">{book.author}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
