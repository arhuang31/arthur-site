export type TopBook = {
  /** Goodreads book id — the number in goodreads.com/book/show/<id>. Used to pull the cover. */
  goodreadsId: string;
  title: string;
  author: string;
  takeaways: string[];
};

export const topBooks: TopBook[] = [
  {
    goodreadsId: "629",
    title: "Zen and the Art of Motorcycle Maintenance",
    author: "Robert M. Pirsig",
    takeaways: ["coming soon"],
  },
  {
    goodreadsId: "18144590",
    title: "The Alchemist",
    author: "Paulo Coelho",
    takeaways: ["coming soon"],
  },
  {
    goodreadsId: "29780253",
    title: "Born a Crime",
    author: "Trevor Noah",
    takeaways: ["coming soon"],
  },
];
