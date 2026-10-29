export type TopBook = {
  /** Goodreads book id — the number in goodreads.com/book/show/<id>. Used to pull the cover. */
  goodreadsId: string;
  title: string;
  author: string;
  /** A favourite passage, without surrounding quotation marks. */
  quote: string;
};

export const topBooks: TopBook[] = [
  {
    goodreadsId: "629",
    title: "Zen and the Art of Motorcycle Maintenance",
    author: "Robert M. Pirsig",
    quote:
      "Peace of mind produces right values, right values produce right thoughts. Right thoughts produce right actions and right actions produce work which will be a material reflection for others to see of the serenity at the center of it all.",
  },
  {
    goodreadsId: "18144590",
    title: "The Alchemist",
    author: "Paulo Coelho",
    quote:
      "Tell your heart that the fear of suffering is worse than the suffering itself. And that no heart has ever suffered when it goes in search of its dreams, because every second of the search is a second's encounter with God and with eternity.",
  },
  {
    goodreadsId: "2177563",
    title: "Madness",
    author: "Marya Hornbacher",
    quote:
      "When you are mad, mad like this, you don't know it. Reality is what you see. When what you see shifts, departing from anyone else's reality, it's still reality to you.",
  },
];
