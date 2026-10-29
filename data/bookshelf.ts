// Snapshot of the Goodreads "read" and "currently-reading" shelves. Edit by hand to add or re-rate books.
export type Book = {
  /** Goodreads book id — the number in goodreads.com/book/show/<id>. */
  id: string;
  title: string;
  author: string;
  /** Your rating out of 5; 0 means unrated. */
  rating: number;
  cover: string;
};

export const readBooks: Book[] = [
  { id: "5575", title: "Cradle and All", author: "James Patterson", rating: 2, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436538932l/5575.jpg" },
  { id: "49552", title: "The Stranger", author: "Albert Camus", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1738704267l/49552.jpg" },
  { id: "40603783", title: "The Defining Decade", author: "Meg Jay", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529594243l/40603783.jpg" },
  { id: "43848929", title: "Talking to Strangers", author: "Malcolm Gladwell", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549393502l/43848929.jpg" },
  { id: "61153739", title: "Outlive", author: "Peter Attia", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1700067079l/61153739.jpg" },
  { id: "18050143", title: "Zero to One", author: "Peter Thiel", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630663027l/18050143.jpg" },
  { id: "23995360", title: "Superforecasting", author: "Philip E. Tetlock", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435684424l/23995360.jpg" },
  { id: "13590828", title: "The Art of Intelligence", author: "Henry A. Crumpton", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1338185573l/13590828.jpg" },
  { id: "4137", title: "Me Talk Pretty One Day", author: "David Sedaris", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431013639l/4137.jpg" },
  { id: "13496", title: "A Game of Thrones", author: "George R.R. Martin", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562726234l/13496.jpg" },
  { id: "315425", title: "In Defense of Food", author: "Michael Pollan", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442538739l/315425.jpg" },
  { id: "13227454", title: "The Unlikely Pilgrimage of Harold Fry", author: "Rachel Joyce", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335816092l/13227454.jpg" },
  { id: "261004", title: "Eyeless in Gaza", author: "Aldous Huxley", rating: 2, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433092475l/261004.jpg" },
  { id: "17690", title: "The Trial", author: "Franz Kafka", rating: 2, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399438l/17690.jpg" },
  { id: "52036", title: "Siddhartha", author: "Hermann Hesse", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629378189l/52036.jpg" },
  { id: "29780253", title: "Born a Crime", author: "Trevor Noah", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473867911l/29780253.jpg" },
  { id: "128029", title: "A Thousand Splendid Suns", author: "Khaled Hosseini", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655336738l/128029.jpg" },
  { id: "30658", title: "Meditations on First Philosophy", author: "René Descartes", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405624521l/30658.jpg" },
  { id: "4008", title: "The Devil and Miss Prym", author: "Paulo Coelho", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719433911l/4008.jpg" },
  { id: "9592", title: "Mother Night", author: "Kurt Vonnegut Jr.", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344621657l/9592.jpg" },
  { id: "24611623", title: "In Order to Live", author: "Yeonmi Park", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437799970l/24611623.jpg" },
  { id: "38315", title: "Fooled by Randomness", author: "Nassim Nicholas Taleb", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388180506l/38315.jpg" },
  { id: "7624", title: "Lord of the Flies", author: "William Golding", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327869409l/7624.jpg" },
  { id: "5107", title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg" },
  { id: "318431", title: "Long Walk to Freedom", author: "Nelson Mandela", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327997342l/318431.jpg" },
  { id: "41795733", title: "Range", author: "David Epstein", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550048292l/41795733.jpg" },
  { id: "40121378", title: "Atomic Habits", author: "James Clear", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg" },
  { id: "11468377", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317793965l/11468377.jpg" },
  { id: "1202", title: "Freakonomics", author: "Steven D. Levitt", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550917827l/1202.jpg" },
  { id: "368593", title: "The 4-Hour Workweek", author: "Timothy Ferriss", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442957271l/368593.jpg" },
  { id: "28514478", title: "Who Rules the World?", author: "Noam Chomsky", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456093732l/28514478.jpg" },
  { id: "55227", title: "Failed States", author: "Noam Chomsky", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405971629l/55227.jpg" },
  { id: "12612", title: "Hegemony or Survival", author: "Noam Chomsky", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438206016l/12612.jpg" },
  { id: "15751404", title: "David and Goliath", author: "Malcolm Gladwell", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391813567l/15751404.jpg" },
  { id: "2612", title: "The Tipping Point", author: "Malcolm Gladwell", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473396980l/2612.jpg" },
  { id: "3228917", title: "Outliers", author: "Malcolm Gladwell", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344266315l/3228917.jpg" },
  { id: "1431", title: "Veronika Decides to Die", author: "Paulo Coelho", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348139939l/1431.jpg" },
  { id: "2177563", title: "Madness", author: "Marya Hornbacher", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348198070l/2177563.jpg" },
  { id: "31093", title: "Lila", author: "Robert M. Pirsig", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1346459192l/31093.jpg" },
  { id: "4191136", title: "Business adventures", author: "John Brooks", rating: 2, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405094011l/4191136.jpg" },
  { id: "746936", title: "Margin of Safety", author: "Seth A. Klarman", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1279479806l/746936.jpg" },
  { id: "40242274", title: "A Random Walk Down Wall Street", author: "Burton G. Malkiel", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529041799l/40242274.jpg" },
  { id: "135479", title: "Cat’s Cradle", author: "Kurt Vonnegut Jr.", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327867150l/135479.jpg" },
  { id: "35631386", title: "The Undoing Project", author: "Michael Lewis", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1509135882l/35631386.jpg" },
  { id: "6402364", title: "SuperFreakonomics", author: "Steven D. Levitt", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308117804l/6402364.jpg" },
  { id: "28257707", title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465761302l/28257707.jpg" },
  { id: "170448", title: "Animal Farm", author: "George Orwell", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325861570l/170448.jpg" },
  { id: "4671", title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1738790966l/4671.jpg" },
  { id: "2657", title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg" },
  { id: "61439040", title: "1984", author: "George Orwell", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657781256l/61439040.jpg" },
  { id: "18144590", title: "The Alchemist", author: "Paulo Coelho", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654371463l/18144590.jpg" },
  { id: "629", title: "Zen and the Art of Motorcycle Maintenance", author: "Robert M. Pirsig", rating: 5, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410136019l/629.jpg" },
  { id: "18288", title: "Critique of Pure Reason", author: "Immanuel Kant", rating: 3, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1757108780l/18288.jpg" },
  { id: "12321", title: "Beyond Good and Evil", author: "Friedrich Nietzsche", rating: 4, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388607391l/12321.jpg" },
];

export const currentlyReading: Book[] = [
  { id: "10245602", title: "Poor Economics", author: "Abhijit V. Banerjee", rating: 0, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344679036l/10245602.jpg" },
  { id: "25894041", title: "Blockchain Revolution", author: "Don Tapscott", rating: 0, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460909417l/25894041.jpg" },
];
