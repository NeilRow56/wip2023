import Sidebar from "../components/Sidebar";

export default function WagesAndSalariesLayout({ children }) {
  return (
    <section className="container mx-auto   ">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
}
