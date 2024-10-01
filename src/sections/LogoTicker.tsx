import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="">Trusted by top innovate teams</h2>
          </div>
          {/**i'm setting the flex none to make they can take best much space as they needed  */}
          <div className="flex-1 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14">
              {[
                acmeLogo,
                quantumLogo,
                celestialLogo,
                apexLogo,
                pulseLogo,
                echoLogo,
              ].map((logo) => (
                <img
                  src={logo.src}
                  key={logo.src}
                  alt="logo-img"
                  className="w-auto h-6 "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
