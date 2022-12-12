import SidebarStocks from "./SidebarStocks";

export default function StocksLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarStocks />
      <main>{children}</main>
    </section>
  );
}
