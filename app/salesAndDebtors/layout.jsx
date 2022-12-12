import SidebarSalesAndDebtors from "./SidebarSalesAndDebtors";

export default function SalesAnDebtorsLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarSalesAndDebtors />
      <main>{children}</main>
    </section>
  );
}
