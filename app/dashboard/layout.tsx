import DashboardMenu from "../ui/dashboard/dashboard-menu";
import NavBar from "../ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <DashboardMenu />
      <div className="flex px-6 md:px-16 md:pt-8">{children}</div>
    </div>
  );
}
