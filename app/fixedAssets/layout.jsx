import SidebarFixedAssets from "./SidebarFixedAssets";

export default function FixedAssetsLayout({ children }) {
  return (
    <section className="container mx-auto mt-20  ">
      <SidebarFixedAssets />
      {children}
    </section>
  );
}
