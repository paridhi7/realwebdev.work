import NavBar from "../ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="flex h-screen px-6 text-center justify-center items-center md:overflow-y-auto md:px-12 md:pb-20">
        {children}
      </div>
    </div>
  );
}
