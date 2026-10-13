import SectionTabs from "../../components/SectionTabs";

export default function MindLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SectionTabs
        title="Mind"
        tabs={[
          { href: "/mind/readings", label: "Readings" },
          { href: "/mind/thoughts", label: "Thoughts" },
        ]}
      />
      {children}
    </>
  );
}
