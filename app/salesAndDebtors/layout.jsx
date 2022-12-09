import SidebarSalesAndDebtors from "./SidebarSalesAndDebtors";

export default function RelatedPartiesLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarSalesAndDebtors />
      {children}
    </section>
  );
}
