import LogoImg from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import { navFooter } from "@/constant";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center ">
          <div className="flex gap-2 items-center lg:flex-1 lg:justify-start">
            <LogoImg className="h-6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center">
            {navFooter.map((navLink) => (
              <a
                href={navLink.href}
                className="text-white/70 hover:text-white text-xs"
                key={navLink.title}
              >
                {navLink.title}
              </a>
            ))}
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/70 hover:text-white text-xs md:text-sm transition" />
            <InstaSocial className="text-white/70 hover:text-white text-xs md:text-sm transition" />
            <YTSocial className="text-white/70 hover:text-white text-xs md:text-sm transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
