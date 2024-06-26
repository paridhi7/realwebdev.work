import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Web Dev Work",
  description:
    "Unique side project ideas you can build to showcase your web development skills",
  metadataBase: new URL("https://www.realwebdev.work/"),
  twitter: {
    card: "summary_large_image",
    title: "Real Web Dev Work",
    description:
      "Unique side project ideas you can build to showcase your web development skills",
    creator: "@paridhitweets",
    images: [
      "https://github.com/paridhi7/realwebdev.work/blob/main/app/twitter-image.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} bg-white text-black`}>
          {children}
        </body>
      </html>
    </>
  );
}
