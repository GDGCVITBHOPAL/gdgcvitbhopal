import VitVectorImage from "@/assets/VitVectorImage.svg";
import cloudLeft from "@/assets/Cloud_Elem_1.svg";
import cloudRight from "@/assets/Cloud_Elem_2.svg";
import kite1 from "@/assets/Kite_Element_1.svg";
import kite2 from "@/assets/Kite_Element_2.svg";
import planet from "@/assets/Planets_Image.svg";
import learn from "@/assets/learn.svg";
import build from "@/assets/build.png";
import gdgLogo from "@/assets/GDG Logo.svg";

import "@/shadcn/styles/neobrutalism.css";
import { MapPin } from "lucide-react";

export default function HeroSectionDesktop() {
  return (
    <section
      aria-label="Desktop hero"
      className="relative w-full min-h-[calc(100vh-4rem)] overflow-x-hidden bg-white text-black"
    >
      {/* Decorative elements */}
      <img
        src={cloudLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[2%] top-[6%] w-44 lg:w-48 xl:w-52 opacity-90"
      />

      <img
        src={cloudRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[2%] top-[22%] w-24 lg:w-28 xl:w-32 opacity-90"
      />

      <img
        src={planet}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[5%] w-16 xl:w-20 opacity-95"
      />

      <img
        src={kite1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[20%] w-24 xl:w-32 opacity-95"
      />

      <img
        src={kite2}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-[10%] w-24 xl:w-32 opacity-95"
      />

      <img
        src={learn}
        alt="#learn"
        className="pointer-events-none absolute left-[8%] top-[42%] -translate-y-1/2 w-20 xl:w-28 -rotate-12"
      />

      <img
        src={build}
        alt="#build"
        className="pointer-events-none absolute right-[8%] top-[42%] -translate-y-1/2 w-20 xl:w-28 rotate-12"
      />

      {/* Main content */}
      <div className="relative mx-auto grid min-h-0 max-w-7xl grid-rows-[1fr_auto] px-6 lg:px-12 xl:px-16 pt-6 pb-8">
        {/* Center content */}
        <div className="flex flex-col items-center justify-center">
          <h1
            className="z-10 mb-3 text-center leading-[0.9]"
            style={{
              fontFamily:
                "Syne, system-ui, -apple-system, Segoe UI, Roboto, Arial",
            }}
          >
            <span className="inline-flex items-baseline gap-3 lg:gap-4 whitespace-nowrap">
              <span className="text-4xl lg:text-5xl xl:text-6xl font-extrabold [-webkit-text-stroke:1px_black] text-[#4285F4]">
                we are
              </span>
              <span className="text-4xl lg:text-5xl xl:text-6xl font-black text-black">
                gdgc<span className="text-[#ff2d55]">.</span>
              </span>
            </span>
          </h1>

          <div className="flex w-full items-center justify-center">
            <img
              src={VitVectorImage}
              alt="VIT Bhopal Illustration"
              className="
                pointer-events-none
                w-[80%]
                max-h-[60vh]
                object-contain
                xl:w-[85%]
                2xl:w-full
              "
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative mt-6 flex items-end justify-between">
          {/* Location */}
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
              17.3616° N, 78.4747° E
            </span>
          </a>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={gdgLogo}
              alt="GDG Logo"
              className="h-10 w-10"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold">GDGC</span>
              <span className="text-sm font-semibold text-[#4285F4]">
                VIT BHOPAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
    