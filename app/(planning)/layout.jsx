import Sidebar from "../components/Sidebar";

export default function PlanningLayout({ children }) {
  return (
    <section className="bg-gray-200   ">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
}
