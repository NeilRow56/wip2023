import SidebarCashAndBank from "./SidebarCashAndBank";

export default function RelatedPartiesLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarCashAndBank />
      {children}
    </section>
  );
}
