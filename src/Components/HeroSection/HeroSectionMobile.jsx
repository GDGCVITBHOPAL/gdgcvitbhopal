import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import building from "@/assets/VitBhopal.avif";
import Cloud_Elem_1 from "@/assets/Cloud_Elem_1.svg";
import Cloud_Elem_2 from "@/assets/Cloud_Elem_2.svg";
import planet from "@/assets/Planets_Image.svg";
import kiteLeft from "@/assets/Kite_Element_1.svg";
// import kiteRight from "@/assets/Kite_Element_2.svg";
import learn from "@/assets/learn.svg";
import build from "@/assets/build.png";
// import gdgLogo from "@/assets/GDG Logo.svg";.
import { FlipWords } from "../textAnimations/FlipWords";

import gdgLeftHalf from "@/assets/gdg_left_half.png";
import gdgRightHalf from "@/assets/gdg_right_half.png";

import { Button } from "@/shadcn/ui/button.jsx";
import { ExternalLink, MapPin } from "lucide-react";
import DinoFollower from "../DinoFollower";

function HeroSectionMobile() {
    return (
        <section
            aria-label="Mobile hero"
            className="relative w-full overflow-hidden bg-white text-black"
        >
            <style>{`
  .advitya-flag-mobile {
  position: absolute;
  left: 12px;   /* moved to left */
  top: 10px;
  padding: 7px 16px;
  border-radius: 24px;
  font-weight: 800;
  font-size: 0.7rem;
  color: #000;
  text-decoration: none;
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
  z-index: 50;
}

.advitya-flag-mobile.second {
  top: 40px;
}
  .advitya-flag {
  background: red !important;
}

  .advitya-flag.blue {
  background-color: #4f8cff !important;
  color: white;
}

.advitya-flag.green {
  background-color: #4cff7a !important;
  color: black;
}




  .advitya-flag-mobile::after {
    content: "";
    position: absolute;
    right: -10px;
    top: 0;
    width: 20px;
    height: 100%;
    background: inherit;
    border-radius: 0 30px 30px 0;
    transform: skewX(-20deg);
  }

  .advitya-flag-mobile:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 14px 30px rgba(0,0,0,0.35);
  }
`}</style>


            {/* Decorative background */}
            <motion.img
                src={Cloud_Elem_1}
                alt=""
                aria-hidden="true"
                className="pointer-events-none scale-x-[-1] -translate-x-2 absolute -right-1 top-40 w-45 opacity-90"
                animate={{  x: [0, "80vw", 0] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
            />
            <motion.img
                src={Cloud_Elem_2}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1 top-10 w-14 opacity-90"
                animate={{ x: [0, "80vw", 0] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
            />
            <motion.img
                src={planet}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-7 w-15 opacity-90"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
            />
            <motion.img
                src={kiteLeft}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-[25%] w-25 opacity-95"
                animate={{ y: [0, 15, 0], x: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
            />
            {/* <motion.a
  href="/advitya"
  className="advitya-flag-mobile"
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 2.5, repeat: Infinity }}
>
  advitya
</motion.a> */}

{/* <motion.a
  href="https://forms.gle/geUHuLxd2PenFN4s8"
  target="_blank"
  rel="noopener noreferrer"
  className="advitya-flag-mobile second"
  animate={{ y: [0, 5, 0] }}
  transition={{ duration: 2.5, repeat: Infinity }}
>
  register
</motion.a> */}


            {/* this kite is not in design */}
            {/* <img
                src={kiteRight}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[48%] top-[24%] w-12 -translate-x-1/2 opacity-95"
            /> */}

            {/* Main layout */}
            <DinoFollower />
            <div className="relative mx-auto flex min-h-[calc(100svh-3.25rem)] max-w-107.5 flex-col items-center px-4 pb-5 pt-4">
                <h1
                    className="mt-8 text-center leading-[0.9]"
                    style={{
                        fontFamily:
                            "Syne, system-ui, -apple-system, Segoe UI, Roboto, Arial",
                    }}
                >
                    <div className="mt-1 mb-2 text-lg underline underline-offset-4">
                        Welcome
                    </div>
                    <span className="inline-flex items-baseline justify-center gap-2 whitespace-nowrap">
                        <span className="inline-block text-[30px] font-extrabold text-[#4285F4]">
                            we are
                        </span>
                        <span className="inline-block text-[30px] font-black text-black">
                            gdgc<span className="text-[#ff2d55]">.</span>
                        </span>
                        <div>
                            {/* <FlipWords 
                            words = {["GDGC", "Devs", "Creators", "Innovators"]}
                            className="text-[30px] lg:text-[35px] xl:text-[40px] font-black text-black"/>
                            <span className="text-[#ff2d55] text-4xl lg:text-5xl xl:text-6xl font-extrabold">.</span> */}
                            </div>
                    </span>
                </h1>
 
                <div className="mt-2 flex flex-col items-center">
                  <a
                  href="https://www.google.com/maps/search/?api=1&query=23.076944,76.851111"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-[#4285F4]"
                  >
                  <MapPin className="h-4 w-4" color="#4285F4" />
                  <span>VIT Bhopal, India</span>
                  </a>
                  <span className="text-xs text-zinc-600 mt-1">17.3616° N, 78.4747° E</span>
                </div>

                {/* Building illustration */}
                <div className="relative mt-3 w-full flex-1">
                    <img
                        src={building}
                        alt="VIT Bhopal Building"
                        className="pointer-events-none absolute left-1/2 top-8 w-[170%] max-w-none -translate-x-1/2"
                    />
                </div>

                {/* Side tags */}
                <motion.img
                    src={learn}
                    alt="#learn"
                    className="pointer-events-none absolute bottom-30 left-3 w-20 -rotate-18"
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 6, 0],
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
                    className="pointer-events-none absolute bottom-30 right-3 w-20 rotate-18"
                    animate={{
                      y: [0, -15, 0],
                      x: [0, -6, 0],
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
                  className="fixed z-[999] top-15 w-[15vw] left-[15px]">
                    <a href="/advitya">
                      <img src="/olympicsImages/flag.png" alt="flag" />
                      </a>
                  </motion.div>

                {/* Join button */}
                <Button className="absolute bottom-30 left-1/2 -translate-x-1/2 w-37">
                    <ExternalLink color="white" />
                    <Link to="https://gdg.community.dev/gdg-on-campus-vellore-institute-of-technology-bhopal-india/" className="inline lg:hidden text-sm">
                        Join
                    </Link>
                </Button>

                {/* Footer */}
                {/* GDG Logo split image */}
                <div className="relative mt-4 h-20 w-40">
                    <img
                        src={gdgLeftHalf}
                        alt="GDG Logo Left Half"
                        className="absolute -left-26 -top-1 h-full w-auto"
                    />
                    <img
                        src={gdgRightHalf}
                        alt="GDG Logo Right Half"
                        className="absolute -right-26 -top-1 h-full w-auto"
                    />
                </div>
                <div className="absolute bottom-10">
                    <div className="text-[0.9rem]">Google Developer Groups on Campus</div>
                    <div className="text-center text-[0.75rem]">VIT Bhopal University</div>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionMobile;
