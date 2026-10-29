import { themes, type Thought } from "../data/thoughts";

/** The text panel shared by the map and constellation views. */
export default function ThoughtDetail({ thought }: { thought: Thought | undefined }) {
  if (!thought) {
    return <p className="text-current/50">hover or tap a thought to read it.</p>;
  }
  return (
    <article>
      <span className="font-mono text-sm text-current/40">
        {themes[thought.theme]} · controversy {thought.controversy}/10 · conviction {thought.conviction}/10
      </span>
      <h2 className="mt-3 text-2xl font-semibold">{thought.title}</h2>
      <p className="mt-4 text-lg leading-8">{thought.body}</p>
    </article>
  );
}
