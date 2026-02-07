import { useEffect, useState } from "react";
import { GlobalNavbar } from "@/Advitya26Components/Navbar";
import ParallaxBackground from "@/Advitya26Components/ParallaxBackground";
import MobileParallaxBackground from "@/Advitya26Components/MobileParallaxBackground";
import CardMainSection from "@/Advitya26Components/CardAnimation/CardMainSection";
import CardMainSectionDesktop from "@/Advitya26Components/CardAnimation/CardMainSectionDesktop";
import AboutCard from "@/Advitya26Components/AboutCard";
import LoadingTextScroller from "@/Advitya26Components/LoadingTextScroller";
import ChoosePathCard from "@/Advitya26Components/ChoosePathCardDir/ChoosePathCard";
import ChoosePathCardMobile from "@/Advitya26Components/ChoosePathCardDir/ChoosePathCardMobile";
import Test from "@/Advitya26Components/Test";

import "@/Advitya26Components/AdvityaMain.css";

function Advitya() {
    // State to control navbar logo visibility - starts hidden, shows when rings fade
    const [showNavbarLogo, setShowNavbarLogo] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.add("advitya-page");

        // Check if mobile on mount and on resize
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            root.classList.remove("advitya-page");
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-[10vh] z-50">
                <GlobalNavbar showLogo={showNavbarLogo} />
            </div>
            {isMobile ? (
                <MobileParallaxBackground
                    onRingsFadeStart={() => setShowNavbarLogo(true)}
                />
            ) : (
                <ParallaxBackground
                    onRingsFadeStart={() => setShowNavbarLogo(true)}
                />
            )}

            <div className="relative z-10" style={{ marginTop: "-100vh" }}>
                {/* Space paralax background */}
                <div style={{ height: "100vh" }} />
                {isMobile ? (
                    <CardMainSection
                        bgColor="transparent"
                        cardSize="2xl"
                        scaleLastCard={true}
                        lastCardInitialScale={0.3}
                    >
                        <AboutCard />
                        <LoadingTextScroller />
                        <ChoosePathCardMobile />
                    </CardMainSection>
                ) : (
                    <CardMainSectionDesktop
                        bgColor="transparent"
                        cardSize="2xl"
                        scaleLastCard={true}
                        lastCardInitialScale={0.3}
                    >
                        <AboutCard />
                        <LoadingTextScroller />
                        <ChoosePathCard />
                    </CardMainSectionDesktop>
                )}

                <section
                    className="relative w-full bg-white"
                    style={{ zIndex: 1 }}
                >
                    <Test />
                </section>
            </div>
        </>
    );
}

export default Advitya;
