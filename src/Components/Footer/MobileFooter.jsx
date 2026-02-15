import { Link } from "react-router-dom";
// import footerCloud from "@/assets/footer_cloud_img.svg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shadcn/ui/accordion";
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Twitter,
} from "lucide-react";

export default function MobileFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="lg:hidden relative w-full overflow-hidden bg-[#0f1115] text-white">
            {/* Cloud header */}
            <div className="pointer-events-none select-none relative w-full">
                {/* <img
                    src={footerCloud}
                    alt=""
                    className="w-full h-44 scale-x-120"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-b from-transparent to-[#0f1115]" />
            </div>

            <div className="px-6 pt-8 pb-10">
                {/* Logo */}
                <Link to="/" className="inline-flex items-center gap-3">
                    <img
                        src="/GDG Logo.svg"
                        alt="GDG Logo"
                        className="h-10 w-auto"
                    />
                    <div className="leading-tight">
                        <div className="text-base font-bold">GDG On Campus</div>
                        <div className="text-xs text-white/80 tracking-wide">
                            VIT BHOPAL
                        </div>
                    </div>
                </Link>

                <p className="mt-4 text-sm leading-6 text-white/80">
                    Google Developer Group at VIT Bhopal — learn, build and grow
                    with the community through sessions, events and hands-on
                    projects.
                </p>

                <div className="mt-4 flex items-start gap-2 text-sm text-white/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>VIT Bhopal University, India</span>
                </div>

                {/* Social */}
                <div className="mt-6 flex items-center gap-3">
                    <a
                        href="https://www.instagram.com/gdgcvitbhopal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/gdgcvitbhopal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.facebook.com/gdscvitbhopal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                        aria-label="Facebook"
                    >
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a
                        href="https://x.com/gdgcvitbhopal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                        aria-label="Twitter"
                    >
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/GDGCVITBHOPAL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href="mailto:gdgc@vitbhopal.ac.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                        aria-label="Email"
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                </div>

                {/* Links (Accordion) */}
                <div className="mt-8">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem
                            value="quick-links"
                            className="border-white/15"
                        >
                            <AccordionTrigger className="text-sm font-semibold tracking-wider text-white">
                                QUICK LINKS
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="space-y-3 text-sm text-white/80">
                                    <li>
                                        <Link
                                            to="/"
                                            className="hover:text-white"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/#events-section"
                                            className="hover:text-white"
                                        >
                                            Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/#footer"
                                            className="hover:text-white"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="tech-domains"
                            className="border-white/15"
                        >
                            <AccordionTrigger className="text-sm font-semibold tracking-wider text-white">
                                Tech Domains
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="space-y-3 text-sm text-white/80">
                                    <li>
                                        <Link
                                            to="/teams/tech/webDTeam"
                                            className="hover:text-white"
                                        >
                                            Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/teams/tech/androidTeam"
                                            className="hover:text-white"
                                        >
                                            Android Dev Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/teams/tech/mlTeam"
                                            className="hover:text-white"
                                        >
                                            Machine Learning Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/teams/tech/blockChainTeam"
                                            className="hover:text-white"
                                        >
                                            Block Chain Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/teams/tech/womenTechmakers"
                                            className="hover:text-white"
                                        >
                                            Women Techmakers
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="non-tech-domains"
                            className="border-white/15"
                        >
                            <AccordionTrigger className="text-sm font-semibold tracking-wider text-white">
                                Non Tech Domains
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="space-y-3 text-sm text-white/80">
                                    <li>
                                        <Link
                                            to="/teams/nonTech/eventManagementTeam"
                                            className="hover:text-white"
                                        >
                                            Event Management Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/teams/nonTech/socialMediaMarketingTeam"
                                            className="hover:text-white"
                                        >
                                            Social Media & Marketing Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/teams/nonTech/designContentTeam"
                                            className="hover:text-white"
                                        >
                                            Design & Content Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/teams/nonTech/videoPhotographyTeam"
                                            className="hover:text-white"
                                        >
                                            Video & Photography Team
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-white/15 pt-5 space-y-2">
                    <div className="text-xs text-white/60">
                        © {year} GDG ON CAMPUS VIT Bhopal. All rights reserved.
                    </div>
                    <div className="text-xs text-white/60">
                        Built with ❤️ By GDG Web Development Team VIT Bhopal.
                    </div>
                </div>
            </div>
        </footer>
    );
}
