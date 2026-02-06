export default function ThoughtsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-2xl font-semibold">Thoughts</h1>
      <div className="mt-6 space-y-6 text-sm leading-7">
        <article className="border-b border-current/20 pb-6">
          <h2 className="text-lg font-semibold">Placeholder entry</h2>
          <p className="mt-2">
            Short placeholder reflection. A few lines to suggest how longer
            essays, notes, or micro‑posts could live here.
          </p>
        </article>
        <article className="border-b border-current/20 pb-6">
          <h2 className="text-lg font-semibold">Another placeholder</h2>
          <p className="mt-2">
            Placeholder text that hints at future writing. The structure can
            expand into tags, dates, and links later.
          </p>
        </article>
      </div>
    </main>
  );
}
