import ThoughtSlider from "../../../components/ThoughtSlider";
import { thoughts } from "../../../data/thoughts";

export default function ThoughtsPage() {
  return (
    <main className="mx-auto w-full px-6 pb-20">
      <ThoughtSlider thoughts={thoughts} />
    </main>
  );
}
