/* eslint-disable @next/next/no-img-element */
import { getShelf, type Book } from "../../../lib/goodreads";
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

export default async function ReadingsPage() {
  const [read, current] = await Promise.all([getShelf("read"), getShelf("currently-reading")]);
  const byId = new Map<string, Book>([...read, ...current].map((b) => [b.id, b]));

  return (
    <main className="mx-auto w-full px-6 pb-20">
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Top 3</h2>
        <ol className="mt-6 grid gap-10 md:grid-cols-3">
          {topBooks.map((book, index) => {
            const cover = byId.get(book.goodreadsId)?.cover ?? "";
            return (
              <li key={book.goodreadsId} className="group">
                <span className="text-4xl font-semibold text-current/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <a
                  href={`https://www.goodreads.com/book/show/${book.goodreadsId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex gap-4"
                >
                  <Cover src={cover} alt={book.title} className="h-36 w-24 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="mt-1 text-sm text-current/60">{book.author}</p>
                  </div>
                </a>
                <ul className="mt-4 space-y-2 text-sm leading-6">
                  {book.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-2">
                      <span className="text-current/40">–</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      {current.length ? (
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Currently reading</h2>
          <ul className="mt-6 flex flex-wrap gap-8">
            {current.map((book) => (
              <li key={book.id} className="group">
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <Cover src={book.cover} alt={book.title} className="h-24 w-16 shrink-0" />
                  <div className="max-w-56">
                    <span className="text-xs uppercase tracking-wide text-current/50">in progress</span>
                    <h3 className="mt-1 text-base font-semibold leading-snug">{book.title}</h3>
                    <p className="mt-1 text-sm text-current/60">{book.author}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold">Bookshelf</h2>
          <a
            href={GOODREADS_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-current/60 underline underline-offset-4 hover:text-current"
          >
            {read.length ? `${read.length} books on goodreads →` : "see goodreads →"}
          </a>
        </div>
        <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {read.map((book) => (
            <li key={book.id} className="group">
              <a href={book.url} target="_blank" rel="noopener noreferrer" className="block">
                <Cover src={book.cover} alt={book.title} className="aspect-[2/3] w-full" />
                <h3 className="mt-2 text-sm font-semibold leading-snug">{book.title}</h3>
                <p className="mt-1 text-xs text-current/60">{book.author}</p>
                <div className="mt-1">
                  <Rating value={book.rating} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
