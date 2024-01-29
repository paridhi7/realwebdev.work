export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow p-6 pt-28 md:overflow-y-auto md:p-12 md:pt-28">
      {children}
    </div>
  );
}
