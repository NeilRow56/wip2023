import Sidebar from "../components/Sidebar";

export default function DashBoardLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
}