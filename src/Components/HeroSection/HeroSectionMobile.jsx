import React from "react";
import { Link } from "react-router-dom";

import building from "@/assets/VitVectorImage.svg";
import Cloud_Elem_1 from "@/assets/Cloud_Elem_1.svg";
import Cloud_Elem_2 from "@/assets/Cloud_Elem_2.svg";
import planet from "@/assets/Planets_Image.svg";
import kiteLeft from "@/assets/Kite_Element_1.svg";
import kiteRight from "@/assets/Kite_Element_2.svg";
import learn from "@/assets/learn.svg";
import build from "@/assets/build.png";
import gdgLogo from "@/assets/GDG Logo.svg";

import gdgLeftHalf from "@/assets/gdg_left_half.png";
import gdgRightHalf from "@/assets/gdg_right_half.png";

import { Button } from "@/shadcn/ui/button.jsx";
import { ExternalLink } from "lucide-react";

function HeroSectionMobile() {
    return (
        <section
            aria-label="Mobile hero"
            className="relative w-full overflow-hidden bg-white text-black"
        >
            {/* Decorative background */}
            <img
                src={Cloud_Elem_1}
                alt=""
                aria-hidden="true"
                className="pointer-events-none scale-x-[-1] -translate-x-2 absolute -right-1 top-40 w-45 opacity-90"
            />
            <img
                src={Cloud_Elem_2}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1 top-10 w-14 opacity-90"
            />
            <img
                src={planet}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-7 w-15 opacity-90"
            />
            <img
                src={kiteLeft}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-[25%] w-25 opacity-95"
            />

            {/* this kite is not in design */}
            {/* <img
                src={kiteRight}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[48%] top-[24%] w-12 -translate-x-1/2 opacity-95"
            /> */}

            {/* Main layout */}
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
                    </span>
                </h1>

                <div className="mt-2 text-[14px] leading-tight text-zinc-700 font-semibold">
                    17.3616° N, 78.4747° E
                </div>
                <div className="text-[14px] font-semibold text-[#4285F4]">
                    VIT Bhopal, India
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
                <img
                    src={learn}
                    alt="#learn"
                    className="pointer-events-none absolute bottom-30 left-3 w-20 -rotate-18"
                />
                <img
                    src={build}
                    alt="#build"
                    className="pointer-events-none absolute bottom-30 right-3 w-20 rotate-18"
                />

                {/* Join button */}
                <Button className="absolute bottom-30 left-1/2 -translate-x-1/2 w-37">
                    <ExternalLink color="white" />
                    <Link to="/join" className="inline lg:hidden text-sm">
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
                    <div>Google Developer Groups on Campus</div>
                    <div className="text-center">VIT Bhopal University</div>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionMobile;
