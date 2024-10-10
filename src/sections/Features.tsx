"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import Image from "next/image";

import productImg from "@/assets/product-image.png";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

// it gonna be type of our tabs and bring one of it tabs[number]
const FeatureTab = (tab: (typeof tabs)[number]) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  //for the tab
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    //we have to add the type of options otherwise it will give us error
    const options: ValueAnimationTransition = {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    };
    //left right right left 0,100,100,0,0
    animate(xPercentage, [0, 0, 100, 100, 0], options);
    //let handle up and down with yPercentage
    animate(yPercentage, [0, 100, 100, 0, 0], options);
  }, []);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    //Property 'play' does not exist on type 'never'. cause in my useRef i didnt set the real type by setting <DotLottieCommonPlayer> as the type the errors goes away
    //* we gonna seek to 0 to see the hover back again whenever we hover our div
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };
  return (
    <div
      onMouseEnter={handleTabHover}
      className="relative border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center"
    >
      {/**to animater our border when we hover we gonna create this div below  */}
      {/** en mettant le inset 0 il a la meme taille que mon div du coup je veux qu'il sort un  */}
      {/**0% on the x axis and 0% on the y axis so we gonna those value when we hove the tab*/}
      <motion.div
        className="absolute inset-0 border border-[#A369FF] rounded-xl -m-px "
        style={{ maskImage }}
      ></motion.div>
      {/**to see the animation we have to pass the autoplay */}
      {/** our icon we need to round it with a border */}
      <div className=" h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={tab.icon}
          className="h-5 w-5"
          autoplay
        />
      </div>

      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};
//todo: if we want animate svg i think lottiefiles are great more details go to lottiefiles page
export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
            Elevate your SEO efforts.
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tighter text-center mt-5">
            From small startups to large enterprises, our AI-driven tool has
            revolutionized the way businesses approach SEO.
          </p>
        </div>
        {/** by giving flex-1 to the parent here we will each child will have the same size */}
        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:flex-1">
          {tabs.map((tab) => (
            //{...tab} it gonna all our props we need  when we hove the tab we'll see
            <FeatureTab key={tab.title} {...tab} />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{ backgroundImage: `url(${productImg.src})` }}
          ></div>
          {/* <Image src={productImg} alt="product image" /> */}
        </div>
      </div>
    </section>
  );
};
