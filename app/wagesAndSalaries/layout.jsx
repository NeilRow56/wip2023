import SidebarWagesAndSalaries from "./SidebarWagesAndSalaries";

export default function WagesAndSalariesLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarWagesAndSalaries />
      <main>{children}</main>
    </section>
  );
}
