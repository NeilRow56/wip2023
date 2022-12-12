import SidebarDrawings from "./SidebarDrawings";

export default function DrawingsLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarDrawings />
      <main>{children}</main>
    </section>
  );
}
