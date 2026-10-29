import type { Thought } from "../data/thoughts";

/** The text panel under the thought map. */
export default function ThoughtDetail({ thought }: { thought: Thought | undefined }) {
  if (!thought) {
    return <p className="text-current/50">hover or tap a thought to read it.</p>;
  }
  return (
    <article>
      <h2 className="text-2xl font-semibold">{thought.title}</h2>
      <p className="mt-4 text-lg leading-8">{thought.body}</p>
    </article>
  );
}
