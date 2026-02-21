import VitVectorImage from "@/assets/VitBhopal.avif";
import cloudLeft from "@/assets/Cloud_Elem_1.svg";
import cloudRight from "@/assets/Cloud_Elem_2.svg";
import kite1 from "@/assets/Kite_Element_1.svg";
import kite2 from "@/assets/Kite_Element_2.svg";
import planet from "@/assets/Planets_Image.svg";
import learn from "@/assets/learn.svg";
import build from "@/assets/build.png";
import gdgLogo from "@/assets/GDG Logo.svg";
import { motion } from "motion/react";

import "@/shadcn/styles/neobrutalism.css";
import { MapPin } from "lucide-react";
import { FlipWords } from "../textAnimations/FlipWords";

export default function HeroSectionDesktop() {
  return (
    <section
      aria-label="Desktop hero"
      className="relative w-full min-h-[calc(80vh-4rem)] overflow-x-hidden bg-white text-black"

    >

      {/* Decorative elements */}
      <motion.img
        className="pointer-events-none absolute left-[2%] top-[6%] w-20 lg:w-20 xl:w-20S opacity-90"
      />
      <motion.img
        src={cloudLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[2%] top-[6%] w-44 lg:w-48 xl:w-52 opacity-90"
        initial={{ x: 0 }}
        animate={{ x: ['0vw', "80vw", "0vw"] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      <motion.img
        src={cloudRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[2%] top-[9%] w-24 lg:w-28 xl:w-32 opacity-90"
        initial={{ x: 0 }}
        animate={{ x: ["0vw", "-80vw", "0vw"] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <motion.img
        src={planet}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[5%] w-16 xl:w-20 opacity-95"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={kite1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[20%] w-24 xl:w-32 opacity-95"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={kite2}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-[10%] w-24 xl:w-32 opacity-95"
        animate={{ y: [0, -15, 0], x: [0, -12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={learn}
        alt="#learn"
        className="pointer-events-none absolute left-[8%] top-[42%] -translate-y-1/2 w-20 xl:w-28 -rotate-12"
        animate={{
          y: [0, -20, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={build}
        alt="#build"
        className="pointer-events-none absolute right-[6%] top-[42%] -translate-y-1/2 w-20 xl:w-28 rotate-12"
        animate={{
          y: [0, -20, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        animate={{y:[-1,0]}}
        transition={{
          duration:5,
          ease:"easeIn",
          delay:5
        }}
        className="fixed z-[999] top-14 w-[9vw] right-[10vh]">
        <a href="/advitya">
          <img src="/olympicsImages/flag.png" alt="flag" />
        </a>
      </motion.div>


      {/* Main content */}
      <div className="relative mx-auto grid min-h-0 max-w-7xl grid-rows-[1fr_auto] pt-8 pb-0 bottom-0">
        {/* Center content */}
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="z-10 mb-3 text-center leading-[0.9]"
            style={{
              fontFamily:
                "Syne, system-ui, -apple-system, Segoe UI, Roboto, Arial",
            }}
            // initial={{ opacity: 0 }}
            animate={{ y:[0, -10, 0]}}
            transition={{ duration: 2, repeat:Infinity, ease: "easeInOut" }}
          >
            <span className="inline-flex items-baseline gap-3 lg:gap-4 whitespace-nowrap">
              <span className="text-4xl lg:text-5xl xl:text-6xl font-extrabold [-webkit-text-stroke:1px_black] text-[#4285F4]">
                we are
              </span>
              <span className="text-4xl lg:text-5xl xl:text-6xl font-black text-black">
                gdgc<span className="text-[#ff2d55]">.</span>
              </span>
              <div>
                {/* <FlipWords 
              words = {["GDGC", "Devs", "Creators", "Innovators"]}
              className="text-4xl lg:text-5xl xl:text-6xl font-black text-black"/>
              <span className="text-[#ff2d55] text-4xl lg:text-5xl xl:text-6xl font-extrabold">.</span> */}
              </div>
            </span>
          </motion.h1>

        </div>
        <div className="flex flex-row w-full bottom-0 mx-auto relative">
          {/* location */}
          <div className="flex flex-col pt-[50vh] w-[10vw] h-full">

            <a
              href="https://www.google.com/maps/search/?api=1&query=23.076944,76.851111"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col"
            >
              <div className="flex items-center gap-1 text-sm lg:text-base font-semibold">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5" color="#4285F4" />
                <span>VIT Bhopal, India</span>
              </div>
              <span className="ml-5 text-xs lg:text-sm text-zinc-600">
                17.3616°N,78.4747°E
              </span>
            </a>
          </div>

          {/* Building Illustration */}
          <div>

            <img
              src={VitVectorImage}
              alt="VIT Bhopal Illustration"
              className="
                pointer-events-none
                w-[80vw]
                max-h-[75vh]
                object-contain
                xl:w-[80vw]
                2xl:w-[80vw]
              "
            />
          </div>

          {/* GDGC Logo  */}
          <div className="flex flex-col pt-[50vh] w-[10vw] h-full">
            <div className="flex">
              <img
                src={gdgLogo}
                alt="GDG Logo"
                className="h-10 w-10"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold">GDGC</span>
                <div className="text-sm font-semibold text-[#4285F4] w-[8vw] -mt-1">
                  VIT BHOPAL
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom section */}
      </div>
    </section>
  );
}
