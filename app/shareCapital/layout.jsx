import SidebarShareCapital from "./SidebarShareCapital";

export default function ShareCaiptalLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarShareCapital />
      <main>{children}</main>
    </section>
  );
}
