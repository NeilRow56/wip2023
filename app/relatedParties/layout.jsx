import Sidebar from "../components/Sidebar";

export default function RelatedPartiesLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
}
