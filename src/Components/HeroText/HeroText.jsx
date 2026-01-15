import React from "react";
import "./HeroText.css";

import building from "@/assets/VitVectorImage.svg";
import cloudLeft from "@/assets/Cloud_Elem_1.svg";
import cloudRight from "@/assets/Cloud_Elem_2.svg";
import indigo from "@/assets/Kite_Element_1.svg";
import airindia from "@/assets/Kite_Element_2.svg";
import saturn from "@/assets/Planets_Image.svg";
import learn from "@/assets/learn.svg";
import build from "@/assets/build.png";

import { Link } from "react-router-dom";
import "@/shadcn/styles/neobrutalism.css";
import { Button } from "@/shadcn/ui/button.jsx";
import { ExternalLink, MapPin } from "lucide-react";

export default function HeroText() {
    return (
        <>
            <section>
                <img src={indigo} alt="" className="kite kite-left" />
                <img src={airindia} alt="" className="kite kite-right" />
                <img src={saturn} alt="" className="planet" />
                <img src={cloudLeft} alt="" className="cloud cloud-left" />
                <img src={cloudRight} alt="" className="cloud cloud-right" />
                <img src={learn} alt="" className="learn" />
                <img src={build} alt="" className="build" />

                <div
                    className="hero-building"
                    role="img"
                    aria-label="VIT Bhopal Building"
                    style={{ backgroundImage: `url(${building})` }}
                ></div>
            </section>

            <section className="hero" aria-label="Site hero">
                <div className="hero__inner">
                    {/* <h1 className="hero__heading">
                        <span className="hero__we">we are</span>{" "}
                        <span className="hero__gdgc">gdgc</span>
                        <span className="hero__dot" aria-hidden="true"></span>
                    </h1> */}
                </div>

                {/* Bottom-left location (clickable, opens Google Maps) */}
                <a
                    className="hero__location"
                    href="https://www.google.com/maps/search/?api=1&query=23.076944,76.851111"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open VIT Bhopal in Google Maps"
                >
                    <span
                        className="hero__location-icon mt-1"
                        aria-hidden="true"
                    >
                        <MapPin size={25} color="#4285F4" strokeWidth={2} />
                    </span>

                    <span className="hero__location-text">
                        <span className="hero__location-name">VIT Bhopal</span>
                        <span className="hero__location-coords">
                            23°04′37″N 76°51′04″E
                        </span>
                    </span>
                </a>

                <div className="hero__cta">
                    <Button className="hero__cta-button w-45 h-11 px-8">
                        <ExternalLink color="white" />
                        <Link
                            to="/join"
                            className="inline text-xl ml-2"
                        >
                            Join Us 🚀
                        </Link>
                    </Button>
                </div>

                {/* Bottom-right brand (logo + stacked text) */}
                <div className="hero__brand" aria-hidden="true">
                    <img
                        src="/GDG Logo.svg"
                        alt="GDG logo"
                        className="hero__brand-logo"
                    />
                    <div className="hero__brand-text">
                        <div className="hero__brand-line1">GDGC</div>
                        <div className="hero__brand-line2">VIT BHOPAL</div>
                    </div>
                </div>
            </section>
        </>
    );
}
