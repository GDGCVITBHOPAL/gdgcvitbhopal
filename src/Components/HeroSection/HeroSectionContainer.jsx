import React from "react";

import HeroSectionDekstop from "@/Components/HeroSection/HeroSectionDekstop.jsx";
import HeroSectionMobile from "@/Components/HeroSection/HeroSectionMobile.jsx";

function HeroSection() {
    return (
        <>
            <div className="lg:hidden">
                <HeroSectionMobile />
            </div>

            <div className="hidden lg:block">
                <HeroSectionDekstop />
            </div>
        </>
    );
}

export default HeroSection;
