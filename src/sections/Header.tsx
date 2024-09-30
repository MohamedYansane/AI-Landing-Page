//we r using svg r that allow us  to use svg like react component
import { navLinks } from "@/constant";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import Button from "@/components/button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div className="">
            {/** for the logo to show up at the center we used the inline flex */}
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          {/**the nav after designing the logo and button and burger menu i started the nav */}

          <div className="hidden md:block">
            {/** when we put /80 it means opacity */}
            <nav className="flex gap-8 text-sm">
              {navLinks.map((item, index) => (
                <a href={item.href} key={index}>
                  {" "}
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
