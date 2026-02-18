import { Link } from "react-router-dom";
import {
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Facebook,
    Mail,
    MapPin,
    Phone,
    ExternalLink,
    TwitchIcon,
} from "lucide-react";

export default function DesktopFooter() {
    const year = new Date().getFullYear();

    const contacts = [
        { name: "Anubhavi Jaiswal", phone: "9569326645" },
        { name: "Priyansh Chaudhary", phone: "8602574613" },
        { name: "Devanshi Sharma", phone: "7477255153" },
    ];

    return (
        <footer className="hidden lg:block relative w-full overflow-hidden bg-[#0f1115] text-white">
            <div className="mx-auto max-w-6xl px-8 pt-10 pb-10">
                <div className="grid grid-cols-12 gap-10">
                    {/* Logo */}
                    <div className="col-span-4">
                        <Link to="/" className="inline-flex items-center gap-3">
                            <img
                                src="/GDG Logo.svg"
                                alt="GDG Logo"
                                className="h-12 w-auto"
                            />
                            <div className="leading-tight">
                                <div className="text-lg font-bold">GDG On Campus</div>
                                <div className="text-sm text-white/80 tracking-wide">
                                    VIT BHOPAL
                                </div>
                            </div>
                        </Link>

                        <p className="mt-5 text-sm leading-6 text-white/80 max-w-sm">
                            Google Developer Group at VIT Bhopal — learn, build
                            and grow with the community through sessions, events
                            and hands-on projects.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-5 flex flex-col gap-2">
                            <div className="flex items-start gap-2 text-sm text-white/80">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>VIT Bhopal University, India</span>
                            </div>

                            <a
                                href="mailto:gdgc@vitbhopal.ac.in"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition cursor-pointer"
                            >
                                <Mail className="h-4 w-4 shrink-0" />
                                <span>gdgc@vitbhopal.ac.in</span>
                            </a>

                            <div className="flex flex-col gap-1.5 mt-1">
                                {contacts.map((contact) => (
                                    <a
                                        key={contact.phone}
                                        href={`tel:+91${contact.phone}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition cursor-pointer"
                                    >
                                        <Phone className="h-4 w-4 shrink-0" />
                                        <span>
                                            {contact.name}: +91 {contact.phone}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/gdgcvitbhopal"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/gdgcvitbhopal"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/gdscvitbhopal"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://x.com/gdgcvitbhopal"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com/GDGCVITBHOPAL"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:gdgc@vitbhopal.ac.in"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="col-span-8 grid grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-white">
                                QUICK LINKS
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/80">
                                <li>
                                    <Link to="/" className="hover:text-white">
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
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-white">
                                Tech Domains
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/80">
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
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-white">
                                Non Tech Domains
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/80">
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
                                        Social Media &amp; Marketing Team
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/teams/nonTech/designContentTeam"
                                        className="hover:text-white"
                                    >
                                        Design &amp; Content Team
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/teams/nonTech/videoPhotographyTeam"
                                        className="hover:text-white"
                                    >
                                        Video &amp; Photography Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-white/15 pt-6 flex items-center justify-between">
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