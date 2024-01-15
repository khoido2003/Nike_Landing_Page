import { footerLogo } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "@/public/assets/icons";

export default function Footer() {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image src={footerLogo} alt="logo" width={150} height={46} />
          </Link>

          <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            {" "}
            Get shoes ready for the new term at yout nearest Nike store. Find
            your perfect Size In Store. Get Rewards.
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10 ">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 cursor-pointer font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <Image src={copyrightSign} alt="copyright" width={20} height={20} />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
}
