import { headerLogo } from "@/public/assets/images";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";
import { hamburger } from "@/public/assets/icons";

function Nav() {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between ">
        <Link href="/">
          <Image src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </Link>

        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
