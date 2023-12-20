import Image from "next/image";
import Link from "next/link";
// compo
import ToggleSwitch from "./ToggleSwitch";

export default function Header() {
  return (
    <header
      className="h-64 w-full"
      style={{
        backgroundImage: `url("/assets/desktop/bg-pattern-header.svg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between container mx-auto h-[80%] items-center">
        <Link href="/" className="hover:opacity-80 transition-all duration-300">
          <Image
            src="/assets/desktop/logo.svg"
            alt="logo"
            width={115}
            height={32}
            priority
          />
        </Link>

        <div className="flex items-center gap-5">
          <figure className="pointer-events-none select-none">
            <Image
              src="/assets/desktop/icon-sun.svg"
              alt="sun"
              width={30}
              height={30}
            />
          </figure>
          <ToggleSwitch />
          <figure className="pointer-events-none select-none">
            <Image
              src="/assets/desktop/icon-moon.svg"
              alt="moon"
              width={25}
              height={25}
            />
          </figure>
        </div>
      </div>
    </header>
  );
}
