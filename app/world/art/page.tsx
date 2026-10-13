"use client";

import { useState } from "react";
import {
  LayoutGrid,
  MountainSnow,
  Dog,
  Users,
  Building2,
} from "lucide-react";

type Category = "All" | "Nature" | "Animals" | "People" | "City";

type ArtItem = {
  id: string;
  src: string;
  caption: string;
  category: Exclude<Category, "All">;
};

const artItems: ArtItem[] = [
  // Interleaved to distribute categories evenly throughout the page
  {
    id: "art-1",
    src: "/photography/nature/DSC_4037.JPG.jpg",
    caption: "calm pools under waterfalls",
    category: "Nature",
  },
  {
    id: "art-30",
    src: "/photography/city/3DC92FEC-462E-45D5-B012-9C4D6980A62D.jpg",
    caption: "a faithful shine",
    category: "City",
  },
  {
    id: "art-53",
    src: "/photography/animal/IMG_0814.JPG.jpg",
    caption: "photobomber",
    category: "Animals",
  },
  {
    id: "art-4",
    src: "/photography/people/IMG_0742JPG.jpg",
    caption: "pensive monk",
    category: "People",
  },
  {
    id: "art-2",
    src: "/photography/nature/IMG_0080.JPG.jpg",
    caption: "broken, dead trees",
    category: "Nature",
  },
  {
    id: "art-31",
    src: "/photography/city/IMG_0008.jpg",
    caption: "slow",
    category: "City",
  },
  {
    id: "art-54",
    src: "/photography/animal/IMG_0818.JPG.jpg",
    caption: "wise eyes",
    category: "Animals",
  },
  {
    id: "art-46",
    src: "/photography/people/DSC_4093.JPG.jpg",
    caption: "the tranquil life",
    category: "People",
  },
  {
    id: "art-3",
    src: "/photography/nature/IMG_0621.JPG.jpg",
    caption: "fire crackling",
    category: "Nature",
  },
  {
    id: "art-32",
    src: "/photography/city/IMG_0050.JPG.jpg",
    caption: "fisherman's friends",
    category: "City",
  },
  {
    id: "art-55",
    src: "/photography/animal/IMG_1168.JPG.jpg",
    caption: "cornered beast",
    category: "Animals",
  },
  {
    id: "art-47",
    src: "/photography/people/IMG_0474.jpg",
    caption: "open lands",
    category: "People",
  },
  {
    id: "art-5",
    src: "/photography/nature/IMG_0844.jpg",
    caption: "offtrail peaks",
    category: "Nature",
  },
  {
    id: "art-33",
    src: "/photography/city/IMG_0084.JPG.jpg",
    caption: "shine bright like lunenberg",
    category: "City",
  },
  {
    id: "art-56",
    src: "/photography/animal/IMG_1181.JPG.jpg",
    caption: "deadly bite",
    category: "Animals",
  },
  {
    id: "art-48",
    src: "/photography/people/IMG_0636.JPG.jpg",
    caption: "barn love",
    category: "People",
  },
  {
    id: "art-6",
    src: "/photography/nature/IMG_0904.JPG.jpg",
    caption: "fishing boat",
    category: "Nature",
  },
  {
    id: "art-34",
    src: "/photography/city/IMG_0199.jpg",
    caption: "sharp edges",
    category: "City",
  },
  {
    id: "art-57",
    src: "/photography/animal/IMG_2241.JPG.jpg",
    caption: "stealth mode",
    category: "Animals",
  },
  {
    id: "art-49",
    src: "/photography/people/IMG_1110.JPG.jpg",
    caption: "jungle adventures",
    category: "People",
  },
  {
    id: "art-7",
    src: "/photography/nature/IMG_0982.JPG.jpg",
    caption: "flag peaking through the mist",
    category: "Nature",
  },
  {
    id: "art-35",
    src: "/photography/city/IMG_0804.jpg",
    caption: "colonial remnants",
    category: "City",
  },
  {
    id: "art-58",
    src: "/photography/animal/IMG_2261.JPG.jpg",
    caption: "morning yawn",
    category: "Animals",
  },
  {
    id: "art-50",
    src: "/photography/people/IMG_1529.JPG.jpg",
    caption: "taking off",
    category: "People",
  },
  {
    id: "art-8",
    src: "/photography/nature/IMG_1022.JPG.jpg",
    caption: "crashing waves",
    category: "Nature",
  },
  {
    id: "art-36",
    src: "/photography/city/IMG_1331.JPG.jpg",
    caption: "religious luxury",
    category: "City",
  },
  {
    id: "art-59",
    src: "/photography/animal/IMG_2270.JPG.jpg",
    caption: "curious predator",
    category: "Animals",
  },
  {
    id: "art-51",
    src: "/photography/people/IMG_2636.JPG.jpg",
    caption: "scaling the half dome",
    category: "People",
  },
  {
    id: "art-9",
    src: "/photography/nature/IMG_1140-EDIT.jpg",
    caption: "layered rice fields",
    category: "Nature",
  },
  {
    id: "art-37",
    src: "/photography/city/IMG_1444.JPG.jpg",
    caption: "behind angkor wat",
    category: "City",
  },
  {
    id: "art-60",
    src: "/photography/animal/IMG_2791.JPG.jpg",
    caption: "Animal portrait",
    category: "Animals",
  },
  {
    id: "art-10",
    src: "/photography/nature/IMG_1157.JPG.jpg",
    caption: "old boat, older message",
    category: "Nature",
  },
  {
    id: "art-38",
    src: "/photography/city/IMG_1491.JPG.jpg",
    caption: "walls speak",
    category: "City",
  },
  {
    id: "art-12",
    src: "/photography/nature/IMG_1725.JPG.jpg",
    caption: "cayote lake",
    category: "Nature",
  },
  {
    id: "art-39",
    src: "/photography/city/IMG_1545.jpg",
    caption: "a gentleman",
    category: "City",
  },
  {
    id: "art-13",
    src: "/photography/nature/IMG_1785.JPG.jpg",
    caption: "the perfect creek",
    category: "Nature",
  },
  {
    id: "art-41",
    src: "/photography/city/IMG_2381.JPG.jpg",
    caption: "together forever",
    category: "City",
  },
  {
    id: "art-15",
    src: "/photography/nature/IMG_2457.JPG.jpg",
    caption: "horse shoe bay",
    category: "Nature",
  },
  {
    id: "art-42",
    src: "/photography/city/IMG_2800.jpg",
    caption: "summer colors",
    category: "City",
  },
  {
    id: "art-16",
    src: "/photography/nature/IMG_2544.JPG.jpg",
    caption: "the edge of yosemite",
    category: "Nature",
  },
  {
    id: "art-43",
    src: "/photography/city/IMG_2929.JPG",
    caption: "basement ecstasy",
    category: "City",
  },
  {
    id: "art-17",
    src: "/photography/nature/IMG_2572.JPG.jpg",
    caption: "a curious doe",
    category: "Nature",
  },
  {
    id: "art-44",
    src: "/photography/city/IMG_3908.jpg",
    caption: "modernism",
    category: "City",
  },
  {
    id: "art-18",
    src: "/photography/nature/IMG_2614.JPG.jpg",
    caption: "mirrored lake",
    category: "Nature",
  },
  {
    id: "art-45",
    src: "/photography/city/IMG_4034.jpg",
    caption: "party on",
    category: "City",
  },
  {
    id: "art-19",
    src: "/photography/nature/IMG_2654.JPG.jpg",
    caption: "snowy peak",
    category: "Nature",
  },
  {
    id: "art-20",
    src: "/photography/nature/IMG_2712.JPG.jpg",
    caption: "glacier lake",
    category: "Nature",
  },
  {
    id: "art-21",
    src: "/photography/nature/IMG_2818.JPG.jpg",
    caption: "rainbow geyser",
    category: "Nature",
  },
  {
    id: "art-22",
    src: "/photography/nature/43DC0F22-9554-4EA1-A996-81AAD738EA43_1_105_c.jpeg",
    caption: "turquoise lagoon",
    category: "Nature",
  },
  {
    id: "art-23",
    src: "/photography/nature/5995E88E-132E-4746-BEBB-F3759A800ED5_4_5005_c.jpeg",
    caption: "views from above",
    category: "Nature",
  },
  {
    id: "art-24",
    src: "/photography/nature/882CA0AA-497C-488D-BB82-087AC5B398E2_1_105_c.jpeg",
    caption: "jurassic park",
    category: "Nature",
  },
  {
    id: "art-25",
    src: "/photography/nature/DA9E7368-CD7C-4426-94EC-C8A048392DB9_4_5005_c.jpeg",
    caption: "midnight sun",
    category: "Nature",
  },
  {
    id: "art-26",
    src: "/photography/nature/DE683C00-1AE2-439D-AAED-F142B222E8A0_1_105_c.jpeg",
    caption: "civilization in the clouds",
    category: "Nature",
  },
  {
    id: "art-27",
    src: "/photography/nature/dunes.jpg",
    caption: "Desert dunes",
    category: "Nature",
  },
  {
    id: "art-28",
    src: "/photography/nature/E6B7D036-C05E-4D2E-8E6D-B77B2E6019FB_1_105_c.jpeg",
    caption: "sun and shades",
    category: "Nature",
  },
  {
    id: "art-29",
    src: "/photography/nature/F0069B06-0EA2-4AA8-A062-C60035292F13_1_105_c.jpeg",
    caption: "organized flatness",
    category: "Nature",
  },
];

const CategoryIcon = ({
  category,
  isActive,
}: {
  category: Category;
  isActive: boolean;
}) => {
  const iconClass = `w-5 h-5 ${isActive ? "text-current" : "text-current/60"}`;

  switch (category) {
    case "All":
      return <LayoutGrid className={iconClass} strokeWidth={2} />;
    case "Nature":
      return <MountainSnow className={iconClass} strokeWidth={2} />;
    case "Animals":
      return <Dog className={iconClass} strokeWidth={2} />;
    case "People":
      return <Users className={iconClass} strokeWidth={2} />;
    case "City":
      return <Building2 className={iconClass} strokeWidth={2} />;
    default:
      return null;
  }
};

export default function ArtPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "Nature", "Animals", "People", "City"];

  const getCategoryLabel = (category: Category): string => {
    return category;
  };

  return (
    <main className="mx-auto w-full px-6 pb-20">
      {/* Category Filter */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-label={getCategoryLabel(category)}
            className={`border-b pb-1 transition-colors ${
              activeCategory === category
                ? "border-current"
                : "border-transparent text-current/60 hover:text-current/80"
            }`}
            title={getCategoryLabel(category)}
          >
            <CategoryIcon category={category} isActive={activeCategory === category} />
          </button>
        ))}
        <span className="text-sm uppercase tracking-wide ml-2">
          {activeCategory === "All" ? "gallery" : activeCategory}
        </span>
      </div>

      {/* Gallery Grid - Tighter spacing with more columns */}
      <div className="mt-10 columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5">
        {artItems.map((item) => {
          const isVisible = activeCategory === "All" || item.category === activeCategory;
          return (
            <figure key={item.id} className="mb-4 break-inside-avoid">
              {isVisible ? (
                /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={item.src}
              alt=""
                  className="w-full rounded-sm transition-opacity duration-200"
                  style={{ objectFit: 'contain', maxHeight: '600px' }}
                  loading="lazy"
                />
              ) : (
                <div className="w-full bg-black rounded-sm min-h-[200px]" />
              )}
              <figcaption
                className={`mt-2 text-sm leading-6 transition-colors ${
                  isVisible ? "text-current" : "text-black"
                }`}
              >
              {item.caption}
            </figcaption>
          </figure>
          );
        })}
      </div>
    </main>
  );
}
