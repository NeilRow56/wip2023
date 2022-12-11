import SidebarPlanning from "./SidebarPlanning";

export default function PlanningLayout({ children }) {
  return (
    <section className="bg-gray-200   ">
      <SidebarPlanning />
      {children}
    </section>
  );
}
