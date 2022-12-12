import Sidebar from "../components/Sidebar";

export default function AccountsAndCompletionLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
}
