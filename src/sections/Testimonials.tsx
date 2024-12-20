"use client";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    id: 2,
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    id: 3,
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    id: 4,
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        {/**For the letter spacing we use tracking tighter */}
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond Expectations.
        </h2>
        <p className="text-white/70 text-lg md:text-2xl text-center mt-5 tracking-tigh max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our clients'
          strategies.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-5 flex-none">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              //by adding a fex-none it will mean its not the parent which wrapping them is controlling there size

              <motion.div
                initial={{
                  translateX: "-50%",
                }}
                animate={{
                  translateX: "0",
                }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
                className="border border-white/15 p-6 md:p-10  rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none "
                key={`${testimonial.id}-${i}`}
              >
                <div className="text-lg md:text-2xl tracking-tight">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  {/** we want the image to show so we give the mix blend soft light */}
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={testimonial.name}
                      className="h-11 w-11 rounded-lg grayscale "
                    />
                  </div>
                  <div className=" ">
                    <div className="">{testimonial.name}</div>
                    <div className="text-white/50 text-xs">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
