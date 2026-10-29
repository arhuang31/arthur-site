export type VisitedCountry = {
  /** Must match the country name in world-atlas (e.g. "United States of America"). */
  country: string;
  /** Display name, when it differs from the world-atlas name. */
  label?: string;
  /** Leave out until there's something to say — the country still shows on the map. */
  highlight?: string;
  /** [longitude, latitude] — only needed for countries too small to appear on the map. */
  marker?: [number, number];
};

export const visitedCountries: VisitedCountry[] = [
  // Home
  {
    country: "Canada",
    highlight: "my home. grew up in halifax moving from shanghai at 11, studied at queen's, and lived in toronto for a while",
  },

  // Asia
  { country: "China", highlight: "born in ganzhou and grew up in shanghai, constantly wowed by china every time i go back" },
  { country: "Hong Kong", marker: [114.17, 22.32], highlight: "tiny but mighty, amazing food and great blend of nature"},
  { country: "Indonesia", highlight: "first time solo travelling, went to flores and blew my mind" },
  { country: "Japan", highlight: "climbed mt fuji and went straight to the onsens, such a unique culture and incredible food" },
  { country: "Laos", highlight: "extremely underrated country, loved it even though i dislocated my shoulder here" },
  { country: "Malaysia", highlight: "KL was a bit disappointing, but Penang made up for it" },
  { country: "Macau", marker: [113.54, 22.19], highlight: "think I went into the casinos here when i was very little?" },
  { country: "Mongolia", highlight: "funny story in mongolia, ill only tell you over a beer" },
  { country: "Philippines", highlight: "first trip on exchange, found one incredible restaurant in Cebu" },
  {
    country: "Singapore",
    highlight: "lived here during exchange at smu. deeply inspired by the tiny city-state with world class infra, technology, and governance",
    marker: [103.82, 1.35],
  },
  { country: "South Korea", highlight: "visited when i was a little kid, need to go back" },
  { country: "Thailand", highlight: "will forever be one of my favorite countries, so much diversity and unbeatable food" },
  { country: "Turkey", label: "Türkiye", highlight: "only visited during layovers, need to go back" },
  { country: "Vietnam", highlight: "very unique energy, chaotic and exciting" },

  // Europe
  { country: "Austria", highlight: "had the best time doing company training in Kitzbuhel" },
  { country: "Croatia", highlight: "boats, boats, boats, loved it" },
  { country: "France", highlight: "Paris =/= france, need to explore more but loved energy during Olympics"},
  { country: "Germany", highlight: "incredible art, culture, parties... less than incredible food" },
  { country: "Italy", highlight: "i mean, its italy, its awesome"},
  { country: "Norway", highlight: "holy shit Lofoten is gorgeous"},
  { country: "Spain", highlight: "if i could live anywhere in europe, itd probably be spain" },
  { country: "Switzerland", highlight: "wow, people are rich here"},
  { country: "United Kingdom", highlight: "ill say more once i leave the heathrow airport"},
  { country: "Vatican City", highlight: "constantly surprised by how many people actually live here", marker: [12.45, 41.9] },

  // North America
  { country: "Bahamas", highlight:"went during a cruise"},
  { country: "Barbados", highlight:"went during a cruise", marker: [-59.54, 13.19] },
  { country: "Dominican Rep.", highlight: "grad trip... barely remembered Riu", label: "Dominican Republic" },
  { country: "Guatemala", highlight: "acatenango was the most incredible display of nature"},
  { country: "Mexico", highlight: "have half a mind to move to CDMX"},
  { country: "Saint Martin", highlight:"went during a cruise", marker: [-63.06, 18.07] },
  { country: "Saint Lucia", highlight:"went during a cruise", marker: [-60.98, 13.91] },
  {
    country: "United States of America",
    label: "United States",
    highlight: "drove 15,000 km across the country with my best friends in a minivan named bertha",
  },

  // Oceania
  { country: "Australia", highlight: "loved visiting my brother here when i was little, need to go back"},

  // South America
  { country: "Argentina", highlight: "patagonia and steak, what a wonderful life" },
  { country: "Bolivia", highlight: "amazing tour around uyuni, much more than the salt flats" },
  { country: "Chile", highlight: "W trek, pricey but amazing" },
  { country: "Colombia", highlight: "got my scuba certification here, very very fun country" },
  { country: "Peru", highlight: "my favorite country ever. bartended here and solo travelled for 2 months and saw the most incredible biodiversity" },
];
