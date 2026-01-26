import VitVectorImage from "@/assets/VitVectorImage.svg";
import cloudLeft from "@/assets/Cloud_Elem_1.svg";
import cloudRight from "@/assets/Cloud_Elem_2.svg";
import kite1 from "@/assets/Kite_Element_1.svg";
import kite2 from "@/assets/Kite_Element_2.svg";
import planet from "@/assets/Planets_Image.svg";
import learn from "@/assets/learn.svg";
import build from "@/assets/build.png";
import gdgLogo from "@/assets/GDG Logo.svg";

import { Link } from "react-router-dom";
import "@/shadcn/styles/neobrutalism.css";
import { Button } from "@/shadcn/ui/button.jsx";
import { ExternalLink, MapPin } from "lucide-react";

export default function HeroSectionDesktop() {
    return (
        <section
            aria-label="Desktop hero"
            className="relative w-full h-[calc(100svh-4rem)] overflow-hidden bg-white text-black"
        >
            {/* Decorative background elements */}
            {/* Left Cloud */}
            <img
                src={cloudLeft}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[2%] top-[4%] w-44 lg:w-48 xl:w-52 2xl:w-56 opacity-90"
            />

            {/* Right Cloud */}
            <img
                src={cloudRight}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-[2%] top-[20%] w-24 lg:w-28 xl:w-32 2xl:w-40 opacity-90"
            />

            {/* Planet - top right */}
            <img
                src={planet}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-[5%] top-[3%] w-16 lg:w-25 xl:w-29 2xl:w-32 opacity-95"
            />

            {/* Left Kite with #learn */}
            <img
                src={kite1}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[5%] top-[18%] w-24 lg:w-28 xl:w-32 2xl:w-40 opacity-95"
            />

            {/* Right Kite with #build */}
            <img
                src={kite2}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-[18%] top-[8%] w-24 lg:w-28 xl:w-32 2xl:w-40 opacity-95"
            />

            {/* #learn tag - positioned on left side */}
            <img
                src={learn}
                alt="#learn"
                className="pointer-events-none absolute left-[8%] lg:left-[10%] xl:left-[12%] 2xl:left-[5%] top-[40%] lg:top-[38%] w-20 lg:w-24 xl:w-28 2xl:w-50 -rotate-12"
            />

            {/* #build tag - positioned on right side */}
            <img
                src={build}
                alt="#build"
                className="pointer-events-none absolute right-[8%] lg:right-[10%] xl:right-[12%] 2xl:right-[5%] top-[40%] lg:top-[38%] w-20 lg:w-24 xl:w-28 2xl:w-50 rotate-12"
            />

            {/* Main content container */}
            <div className="relative mx-auto grid h-full max-w-7xl grid-rows-[minmax(0,1fr)_auto] items-stretch px-6 lg:px-12 xl:px-16 pt-4 lg:pt-6 xl:pt-8 pb-6 lg:pb-7 xl:pb-8">
                {/* Centered content block (heading + building) */}
                <div className="flex w-full flex-col items-center justify-center -translate-y-0.5 lg:-translate-y-1 xl:-translate-y-1.5">
                    {/* Hero heading */}
                    <h1
                        className="text-center leading-[0.9] z-10 mb-2 xl:mb-1 2xl:mb-5 2xl:-translate-y-20"
                        style={{
                            fontFamily:
                                "Syne, system-ui, -apple-system, Segoe UI, Roboto, Arial",
                        }}
                    >
                        <span className="inline-flex items-baseline justify-center gap-3 lg:gap-4 whitespace-nowrap">
                            <span className="inline-block text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-[#4285F4]">
                                we are
                            </span>
                            <span className="inline-block text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-black">
                                gdgc<span className="text-[#ff2d55]">.</span>
                            </span>
                        </span>
                    </h1>

                    {/* VitVectorImage illustration - centered */}
                    <div className="relative w-full flex items-center justify-center">
                        <img
                            src={VitVectorImage}
                            alt="VIT Bhopal VitVectorImage"
                            className="pointer-events-none w-[80%] xl:scale-100 2xl:scale-150 max-w-7xl"
                        />
                    </div>
                </div>

                {/* Bottom section */}
                <div className="relative flex items-end justify-between translate-y-2 lg:translate-y-5">
                    {/* Location info - bottom left */}
                    <div className="flex flex-col items-start">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=23.076944,76.851111"
                            target="_blank"
                        >
                            <div className="flex items-center gap-1 text-sm lg:text-base xl:text-lg font-semibold text-black">
                                <MapPin
                                    className="w-4 h-4 lg:w-5 lg:h-5"
                                    color="#4285F4"
                                    strokeWidth={3}
                                />
                                <span>VIT Bhopal, India</span>
                            </div>
                            <div className="text-xs lg:text-sm xl:text-base text-zinc-600 ml-5 lg:ml-6">
                                17.3616° N, 78.4747° E
                            </div>
                        </a>
                    </div>

                    {/* Join button - bottom center */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
                        <Button className="w-32 lg:w-36 xl:w-40 h-10 lg:h-11 xl:h-12 text-sm lg:text-base">
                            <ExternalLink
                                className="w-4 h-4 lg:w-5 lg:h-5 mr-2"
                                color="white"
                            />
                            <Link to="/join">Join Us 🚀</Link>
                        </Button>
                    </div>

                    {/* GDG Logo - bottom right */}
                    <div className="flex items-center gap-2 lg:gap-3">
                        <img
                            src={gdgLogo}
                            alt="GDG Logo"
                            className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                        />
                        <div className="flex flex-col">
                            <span className="text-xs lg:text-sm xl:text-base font-bold text-black leading-tight">
                                GDGC
                            </span>
                            <span className="text-xs lg:text-sm xl:text-base font-semibold text-[#4285F4] leading-tight">
                                VIT BHOPAL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
