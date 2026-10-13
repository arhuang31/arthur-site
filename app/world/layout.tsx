import SectionTabs from "../../components/SectionTabs";

export default function WorldLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SectionTabs
        title="World"
        tabs={[
          { href: "/world/travels", label: "Travels" },
          { href: "/world/art", label: "Art" },
        ]}
      />
      {children}
    </>
  );
}
