import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { Feature, Geometry } from "geojson";
import countries110m from "world-atlas/countries-110m.json";
import WorldMap, { type MapCountry } from "../../../components/WorldMap";
import { visitedCountries } from "../../../data/travels";

const WIDTH = 960;
const HEIGHT = 470;

function buildMap(): MapCountry[] {
  const topology = countries110m as unknown as Topology<{
    countries: GeometryCollection<{ name: string }>;
  }>;
  const collection = feature(topology, topology.objects.countries);
  const features = collection.features.filter(
    (f) => f.properties?.name !== "Antarctica",
  ) as Feature<Geometry, { name: string }>[];

  const projection = geoEqualEarth().fitSize([WIDTH, HEIGHT], {
    type: "FeatureCollection",
    features,
  });
  const path = geoPath(projection);
  const visitedByName = new Map(visitedCountries.map((v) => [v.country, v]));

  const shapes: MapCountry[] = features.map((f) => {
    const visit = visitedByName.get(f.properties.name);
    const [cx, cy] = path.centroid(f);
    return {
      name: f.properties.name,
      d: path(f) ?? "",
      cx,
      cy,
      visit: visit ? { highlight: visit.highlight, learning: visit.learning } : undefined,
    };
  });

  const drawn = new Set(shapes.map((s) => s.name));
  const markers: MapCountry[] = visitedCountries
    .filter((v) => !drawn.has(v.country) && v.marker)
    .map((v) => {
      const [x, y] = projection(v.marker!) ?? [0, 0];
      return {
        name: v.country,
        d: "",
        cx: x,
        cy: y,
        isMarker: true,
        visit: { highlight: v.highlight, learning: v.learning },
      };
    });

  return [...shapes, ...markers];
}

export default function TravelsPage() {
  const countries = buildMap();

  return (
    <main className="mx-auto w-full px-6 pb-20">
      <WorldMap countries={countries} width={WIDTH} height={HEIGHT} />
    </main>
  );
}
