import { LOGO_AIKIDO, LOGO_CHROME_STORE, LOGO_GITHUB } from "@/src/assets";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOURCES = [
  { name: "Aikido malware predictions", icon: LOGO_AIKIDO },
  {
    name: "GitHub Security Advisorie",
    icon: LOGO_GITHUB
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-primary-950">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="uppercase tracking-wider font-bold">PackageGuard</h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Detect malware and vulnerabilities even before you ever use a
            package.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            PackageGuard employs different trusted advisories to provide
            insights about NPM packages and their security status, even before
            you ever install them.
          </p>
          <div className="flex gap-3 flex-col md:flex-row">
            {SOURCES.map((source) => (
              <div
                key={source.name}
                className="flex items-center gap-3 rounded-full  bg-white/10 px-4 py-2"
              >
                <Image src={source.icon} alt="" className="size-4" />
                <span className="text-base font-medium text-zinc-700 dark:text-zinc-300">
                  {source.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="https://chromewebstore.google.com/detail/packageguard/fdckcppglcibimebccplbjodcihhbemn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center border border-white/20 p-4 rounded-xl"
            >
              <Image src={LOGO_CHROME_STORE} alt="" className="size-8" />
              <div className="leading-5">
                <span>Download from the</span>
                <br />
                <strong>Chrome Web Store</strong>
              </div>
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
      </main>
    </div>
  );
}
