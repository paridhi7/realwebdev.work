import { Handlee } from "next/font/google";
import Image from "next/image";

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

export default async function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between pt-8">
      <div className="relative flex flex-col items-center">
        <div className="absolute -translate-y-full -left-10 top-16 transform-gpu hidden md:inline-flex">
          <Image src="/arrow.svg" alt="Arrow" width={50} height={50} />
        </div>
        <div
          className={`${handlee.className} pb-2 text-lg z-10 max-w-72 md:max-w-none`}
        >
          Sign up here to get awesome project ideas delivered to your inbox
          weekly{" "}
        </div>
      </div>
      <iframe
        src="https://realwebdevwork.substack.com/embed"
        width="480"
        height="150"
        className="border:1px solid #EEE; background:white w-80 md:w-full"
      ></iframe>
      <div className="pt-2">
        Made with 🩷 and ☕️ by{" "}
        <a
          href="https://www.allmylinks.bio/paridhi"
          className="text-pink-500 hover:text-pink-400"
        >
          Paridhi Agarwal
        </a>
      </div>
    </footer>
  );
}
