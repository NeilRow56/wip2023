import SidebarLiabilitiesAndCharges from "./SidebarLiabilitiesAndCharges";

export default function LiabilitiesAndChargesLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarLiabilitiesAndCharges />
      {children}
    </section>
  );
}
