import SidebarTaxation from "./SidebarTaxation";

export default function TaxationLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarTaxation />
      <main>{children}</main>
    </section>
  );
}
