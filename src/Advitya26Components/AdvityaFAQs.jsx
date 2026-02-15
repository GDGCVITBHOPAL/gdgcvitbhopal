import { useEffect } from "react";
import { GlobalNavbar } from "@/Advitya26Components/Navbar";
import FAQ from "@/Advitya26Components/FAQ";

import "@/Advitya26Components/AdvityaMain.css";

function AdvityaFAQs() {
    useEffect(() => {
        const root = document.documentElement;
        root.classList.add("advitya-page");

        return () => {
            root.classList.remove("advitya-page");
        };
    }, []);

    return (
        <div
            className="min-h-screen w-screen relative"
            style={{
                minHeight: '100vh',
                width: '100vw',
                backgroundImage: "url('/FAQ_BG.png')",
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute top-0 left-0 w-full h-[10vh] z-50">
                <GlobalNavbar />
            </div>
            {/* FAQ Content */}
            <div className="pt-20">
                <FAQ />
            </div>
        </div>
    );
}

export default AdvityaFAQs;
