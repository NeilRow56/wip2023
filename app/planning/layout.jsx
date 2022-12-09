import SidebarPlanning from "./SidebarPlanning";

export default function PlanningLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarPlanning />
      {children}
    </section>
  );
}
