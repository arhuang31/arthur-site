export type VisitedCountry = {
  /** Must match the country name in world-atlas (e.g. "United States of America"). */
  country: string;
  highlight: string;
  learning: string;
  /** [longitude, latitude] — only needed for countries too small to appear on the map. */
  marker?: [number, number];
};

export const visitedCountries: VisitedCountry[] = [
  {
    country: "Canada",
    highlight: "growing up in halifax after moving from shanghai at 11",
    learning: "coming soon",
  },
  {
    country: "United States of America",
    highlight: "driving 15,000 km across the country in a minivan named bertha",
    learning: "coming soon",
  },
  {
    country: "China",
    highlight: "spending my first 11 years in shanghai",
    learning: "coming soon",
  },
  {
    country: "Singapore",
    highlight: "living in the tiny city-state during exchange at smu",
    learning: "coming soon",
    marker: [103.82, 1.35],
  },
];
