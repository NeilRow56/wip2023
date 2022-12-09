import SidebarTrialBalance from "./SidebarTrialBalanceAndJournals";

export default function TrialBalanceAndJournalsLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarTrialBalance />
      {children}
    </section>
  );
}
