import ThoughtMap from "../../../components/ThoughtMap";
import { thoughts } from "../../../data/thoughts";

export default function ThoughtsPage() {
  return (
    <main className="mx-auto w-full px-6 pb-20">
      <ThoughtMap thoughts={thoughts} />
    </main>
  );
}
