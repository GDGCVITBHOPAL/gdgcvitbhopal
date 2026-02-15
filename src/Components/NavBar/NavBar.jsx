import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
    backgroundSize: "180px 180px",
    mixBlendMode: "multiply",
};

function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
            {/* SVG Noise Overlay */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.9]"
                style={noiseStyle}
                aria-hidden="true"
            />

            {/* Desktop Navigation - visible on lg screens and above */}
            <div className="relative z-10">
                <DesktopNavBar />
            </div>

            {/* Mobile Navigation - visible on screens smaller than lg */}
            <div className="relative z-10">
                <MobileNavBar />
            </div>
        </header>
    );
}

export default NavBar;
