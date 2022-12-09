import SidebarShareCapital from "./SidebarShareCapital";

export default function RelatedPartiesLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarShareCapital />
      {children}
    </section>
  );
}
