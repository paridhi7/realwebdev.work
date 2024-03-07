export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex-grow md:overflow-y-auto mb-12">{children}</div>;
}
