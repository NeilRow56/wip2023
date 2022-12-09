import SidebarRelatedParties from "./SidebarRelatedParties";

export default function RelatedPartiesLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarRelatedParties />
      {children}
    </section>
  );
}
