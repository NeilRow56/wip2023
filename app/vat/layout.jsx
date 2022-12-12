import SidebarVAT from "./SidebarVAT";

export default function VATLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarVAT />
      <main>{children}</main>
    </section>
  );
}
