"use client";

import { motion } from "framer-motion";

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
          <div className="flex flex-1 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            {/**we want to animate our logo we want to map it twice but i prefer copying and pasting again the elt inside the array translateX: "-50%" so it'll go back to 0 and in my class both translate 0 and -50% should act like the same*/}
            {/** i want the initial value to be   */}
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{ duration: 30, repeat: Infinity, easing: "linear"}}
              className="flex flex-none gap-14 -translate-x-1/2 pr-14"
            >
              {[
                acmeLogo,
                quantumLogo,
                celestialLogo,
                apexLogo,
                pulseLogo,
                echoLogo,
                acmeLogo,
                quantumLogo,
                celestialLogo,
                apexLogo,
                pulseLogo,
                echoLogo,
              ].map((logo, index) => (
                <img
                  src={logo.src}
                  key={index}
                  alt="logo-img"
                  className="w-auto h-6 "
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
