"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import Button from "@/components/button";
import starsBg from "@/assets/stars.png";
import { useRef } from "react";
export const Hero = () => {
  //we want to animate the stars also of the section bgImage
  //the useScroll allow us to change our animation based on the scroll position of the user
  const sectionRef = useRef(null);
  //the element we want to target is the section
  //the scroll Y progress value gonna return 0 or 1
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  //framer motion give us the possibility to see the value in our case the value of scrollYprogress when it changes.
  // useMotionValueEvent(scrollYProgress, "change", (value) => {
  //   console.log("scrollYprogress: ", value);
  // });

  //let transform the value of scrollYProgress from 0 to 1 we gonna transform it to -300 to 300
  const backgroundPositionY = useTransform(
    scrollYProgress, //motion value
    [0, 1], //input range
    [-300, 300] // output range
  );
  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: starsBg.width, // i want it to have the width of our starsBg
        // i want it to have the height of our starsBg
      }}
      transition={{
        duration: 120, //2min
        ease: "linear", // ease-in-out
        repeat: Infinity, // it will repeat indefinitely
      }}
    >
      {/**after the thir ring let gice inset-0 to this so that it will have the same size with section inset-0 to have the same size like the section */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/** Start Planet styl the negative value in shadow is -20 t0 top and -20 t0 left and blur represent the postive value  */}
      <div className="absolute h-64 md:w-96 md:h-96 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/**End Planet */}
      {/** we remove the border opacity otherwise you'll see when it crossing and we give to the whole thing opacity-20*/}

      {/**Start of ring 1 */}
      {/** when i give the rotate property it will break my design because of my translate property in my class that include transform to avoid that i have to pass translate props too like in my class */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ rotate: "1turn" }}
        transition={{
          duration: 60, //duration 30s timeout it will
          repeat: Infinity, // we dont want the rotation to stop after 30 seconds
          ease: "linear", //linear ease
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      >
        {/** ring in our div */}
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="rounded-full h-2 w-2 bg-white"></div>
        </div>
      </motion.div>
      {/** End of ring 1 */}
      {/**Start of Second ring */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>
      {/**End of second ring */}

      {/**third ring */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      {/**End of third ring */}
      {/** we want our container to be at the top of our planet so set it to relative */}
      <div className="container relative mt-16">
        {/* tracking tighter will make sure it's line height is negative*/}
        {/**the bg-clip-text notre gradient ne sera que sur le texte the leading-none is to make sure we dont have a line-height*/}
        <h1 className="text-center font-semibold md:text-[168px] text-8xl md:leading-none tracking-tighter bg-white  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Elevate your site's visibility effortlesssly with AI, where smart
          technology meets user-friendly SEO tools
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
