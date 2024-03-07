import NavBar from "../../ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="flex px-6 md:px-12 mb-12">{children}</div>
    </div>
  );
}
