import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Image
        src="/bg-image.jpg"
        fill
        sizes="100vw"
        alt="background image"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="flex h-screen px-6 text-center justify-center items-center md:overflow-y-auto md:px-12">
        {children}
      </div>
    </div>
  );
}
