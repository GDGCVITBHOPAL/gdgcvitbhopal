import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shadcn/ui/accordion";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/shadcn/ui/collapsible";
import { useScrollContext } from "@/context/ScrollContext";

const navItems = [
    {
        title: "Home",
        href: "/",
        subItems: null,
    },
    {
        title: "Tech Domain",
        href: "/teams/tech",
        subItems: [
            { title: "Web Development Team", href: "/teams/tech/webDTeam" },
            { title: "Android Dev Team", href: "/teams/tech/androidTeam" },
            { title: "Machine Learning Team", href: "/teams/tech/mlTeam" },
            { title: "BlockChain Team", href: "/teams/tech/blockChainTeam" },
            { title: "Women Techmakers", href: "/teams/tech/womenTechmakers" },
        ],
    },
    {
        title: "Non-Tech Domain",
        href: "/teams/nonTech",
        subItems: [
            {
                title: "Event Management Team",
                href: "/teams/nonTech/eventManagementTeam",
            },
            {
                title: "Social Media & Marketing Team",
                href: "/teams/nonTech/socialMediaMarketingTeam",
            },
            {
                title: "Design & Content Team",
                href: "/teams/nonTech/designContentTeam",
            },
            {
                title: "Videography and Photography Team",
                href: "/teams/nonTech/videoPhotographyTeam",
            },
        ],
    },
    {
        title: "Events",
        href: "/events",
        subItems: null,
    },
    {
        title: "Contact",
        href: "/contact",
        subItems: null,
    },
];

function MobileNavLink({ to, children, onNavigate, onClick }) {
    return (
        <Link
            to={to}
            onClick={(e) => {
                onClick?.(e);
                onNavigate();
            }}
            className="flex items-center justify-between py-3 px-3 text-base font-medium text-foreground border-b border-border"
        >
            {children}
        </Link>
    );
}

function MobileSubLink({ to, children, onNavigate }) {
    return (
        <Link
            to={to}
            onClick={onNavigate}
            className="block py-2 px-6 text-sm text-muted-foreground"
        >
            {children}
        </Link>
    );
}

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    const { scrollToTop, scrollToEvents, scrollToFooter } = useScrollContext();
    const location = useLocation();
    const isHome = location.pathname === "/";

    const closeMenu = () => setOpen(false);

    const handleEventsClick = (e) => {
        if (isHome) {
            e.preventDefault();
            scrollToEvents();
        }
    };

    const handleHomeClick = (e) => {
        if (isHome) {
            e.preventDefault();
            scrollToTop();
        }
    };

    const handleLogoClick = (e) => {
        handleHomeClick(e);
        closeMenu();
    };

    const handleContactClick = (e) => {
        if (isHome) {
            e.preventDefault();
            scrollToFooter();
        }
    };

    return (
        <div className="lg:hidden">
            <Collapsible
                open={open}
                onOpenChange={setOpen}
                className="relative"
            >
                {/* Navbar */}
                <nav className="flex items-center justify-between px-4 py-3 bg-transparent">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={handleLogoClick}
                    >
                        <img
                            src="/GDG Logo.svg"
                            alt="GDG Logo"
                            className="h-8 w-auto"
                        />
                        <div className="flex flex-col">
                            <div className="text-sm font-medium">
                                GDG On Campus
                            </div>
                            <div className="text-xs font-medium">VIT Bhopal
                            </div>
                        </div>
                    </Link>

                    <CollapsibleTrigger asChild>
                        <button
                            type="button"
                            className="flex items-center justify-center size-9 rounded-md border-2 border-black bg-transparent"
                            aria-label={open ? "Close menu" : "Open menu"}
                        >
                            {open ? (
                                <XIcon className="size-5" />
                            ) : (
                                <MenuIcon className="size-5" />
                            )}
                        </button>
                    </CollapsibleTrigger>
                </nav>

                {/* Dropdown Panel (slides from under navbar) */}
                <CollapsibleContent className="absolute left-0 right-0 top-full z-50 bg-background border-2 border-black border-t-0 border-l-0 border-r-0 shadow-md overflow-hidden">
                    {/* This Noise overlay needed seperately because dropdown is positioned outside the header */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none opacity-[0.9]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "180px 180px",
                            mixBlendMode: "multiply",
                        }}
                        aria-hidden="true"
                    />
                    <div className="relative z-10 px-3">
                        <MobileNavLink
                            to="/"
                            onNavigate={closeMenu}
                            onClick={handleHomeClick}
                        >
                            Home
                        </MobileNavLink>

                        <Accordion
                            type="single"
                            collapsible
                            className="border-b border-border"
                        >
                            <AccordionItem value="tech">
                                <AccordionTrigger className="px-3 py-3 text-base">
                                    Tech Domain
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                    {navItems
                                        .find((x) => x.title === "Tech Domain")
                                        ?.subItems?.map((sub) => (
                                            <MobileSubLink
                                                key={sub.title}
                                                to={sub.href}
                                                onNavigate={closeMenu}
                                            >
                                                {sub.title}
                                            </MobileSubLink>
                                        ))}
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="nontech">
                                <AccordionTrigger className="px-3 py-3 text-base">
                                    Non-Tech Domain
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                    {navItems
                                        .find(
                                            (x) =>
                                                x.title === "Non-Tech Domain",
                                        )
                                        ?.subItems?.map((sub) => (
                                            <MobileSubLink
                                                key={sub.title}
                                                to={sub.href}
                                                onNavigate={closeMenu}
                                            >
                                                {sub.title}
                                            </MobileSubLink>
                                        ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <MobileNavLink
                            to={isHome ? "/" : "/#events-section"}
                            onNavigate={closeMenu}
                            onClick={handleEventsClick}
                        >
                            Events
                        </MobileNavLink>
                        <MobileNavLink
                            to={isHome ? "/" : "/#footer"}
                            onNavigate={closeMenu}
                            onClick={handleContactClick}
                        >
                            Contact
                        </MobileNavLink>
                        <MobileNavLink to="/advitya" onNavigate={closeMenu}>
                            <img src="/olympicsImages/advitya.png" alt="Advitya" className="w-[18vw] h-[3vh]" />
                        </MobileNavLink>
                        <MobileNavLink to="/about" onNavigate={closeMenu}>
                            About
                        </MobileNavLink>
                        {/* <MobileNavLink
                            to="/event-registration"
                            onNavigate={closeMenu}
                        >
                            Register Event
                        </MobileNavLink> */}
                    </div>

                    <div className="relative z-10 p-4">
                        <Link
                            to="https://gdg.community.dev/gdg-on-campus-vellore-institute-of-technology-bhopal-india/"
                            onClick={closeMenu}
                            className="block w-full rounded-md bg-blue-500 px-4 py-3 text-center font-semibold text-white"
                        >
                            Join Us
                        </Link>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}

export default MobileNavBar;
