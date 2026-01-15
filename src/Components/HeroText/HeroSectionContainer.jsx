import React from "react";

import HeroText from "@/Components/HeroText/HeroText.jsx";
import HeroSectionMobile from "@/Components/HeroText/HeroSectionMobile.jsx";

function HeroSection() {
    return (
        <>
            <div className="md:hidden">
                <HeroSectionMobile />
            </div>

            <div className="hidden md:block">
                <HeroText />
            </div>
        </>
    );
}

export default HeroSection;
