import SidebarCashAndBank from "./SidebarCashAndBank";

export default function CashAtBankLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarCashAndBank />
      <main>{children}</main>
    </section>
  );
}
