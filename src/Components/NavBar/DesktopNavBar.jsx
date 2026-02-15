import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/shadcn/ui/navigation-menu";

import { cn } from "@/shadcn/lib/utils";
import { Link, useLocation } from "react-router-dom";
import "@/shadcn/styles/neobrutalism.css";
import { Button } from "@/shadcn/ui/button.jsx";
import { ExternalLink } from "lucide-react";
import { useScrollContext } from "@/context/ScrollContext";

const techDomainLinks = [
    {
        title: "Web Development Team",
        href: "/teams/tech/webDTeam",
        description: "Building amazing web experiences",
    },
    {
        title: "Android Dev Team",
        href: "/teams/tech/androidTeam",
        description: "Meet our Android developers",
    },
    {
        title: "Machine Learning Team",
        href: "/teams/tech/mlTeam",
        description: "Meet our Machine Learning experts",
    },
    {
        title: "BlockChain Team",
        href: "/teams/tech/blockChainTeam",
        description: "Explore our Blockchain projects",
    },
    {
        title: "Women Techmakers",
        href: "/teams/tech/womenTechmakers",
        description: "Meet our Women Techmakers community",
    },
];

const nonTechDomainLinks = [
    {
        title: "Event Management Team",
        href: "/teams/nonTech/eventManagementTeam",
        description: "Organizing memorable events",
    },
    {
        title: "Social Media & Marketing Team",
        href: "/teams/nonTech/socialMediaMarketingTeam",
        description: "Spreading the word about GDG",
    },
    {
        title: "Design & Content Team",
        href: "/teams/nonTech/designContentTeam",
        description: "Creating stunning visuals and content",
    },
    {
        title: "Videography and Photography Team",
        href: "/teams/nonTech/videoPhotographyTeam",
        description: "Capturing moments...",
    },
];

function ListItem({ className, title, children, href, ...props }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}

function DesktopNavBar() {
    const { scrollToTop, scrollToEvents, scrollToFooter } = useScrollContext();
    const location = useLocation();
    const isHome = location.pathname === "/";

    const handleHomeClick = (e) => {
        if (isHome) {
            e.preventDefault();
            scrollToTop();
        }
    };

    const handleEventsClick = (e) => {
        if (isHome) {
            e.preventDefault();
            scrollToEvents();
        }
    };

    const handleContactClick = (e) => {
        if (isHome) {
            e.preventDefault();
            scrollToFooter();
        }
    };

    return (
        <nav className="hidden lg:flex items-center justify-between w-full h-12 px-8 py-7 bg-transparent">
            {/* Logo */}
            <Link
                to="/"
                className="flex items-center"
                onClick={handleHomeClick}
            >
                <img
                    src="/GDG Logo.svg"
                    alt="GDG Logo"
                    className="h-10 w-auto"
                />

                <div className="flex flex-col">
                    <div className="text-sm font-medium ml-2">
                        GDG On Campus
                    </div>
                    <div className="text-xs font-medium ml-2">VIT Bhopal</div>
                </div>
            </Link>

            {/* Navigation Menu */}
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/" onClick={handleHomeClick}>
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Tech Domain
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-100 md:grid-cols-2">
                                {techDomainLinks.map((link) => (
                                    <ListItem
                                        key={link.title}
                                        title={link.title}
                                        href={link.href}
                                    >
                                        {link.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Non-Tech Domain
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-125 md:grid-cols-2">
                                {nonTechDomainLinks.map((link) => (
                                    <ListItem
                                        key={link.title}
                                        title={link.title}
                                        href={link.href}
                                    >
                                        {link.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link
                                to={isHome ? "/" : "/#events-section"}
                                onClick={handleEventsClick}
                            >
                                Events
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link
                                to={isHome ? "/" : "/#footer"}
                                onClick={handleContactClick}
                            >
                                Contact
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/advitya"><img src="/olympicsImages/advitya.png" alt="advitya" className="w-[7vw] top-1" /></Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/about">About</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/event-registration">Register</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem> */}
                </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button className="mb-1 rounded-full bg-linear-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700">
                <ExternalLink color="white" />
                <Link to="https://gdg.community.dev/gdg-on-campus-vellore-institute-of-technology-bhopal-india/" className="inline text-sm">
                    Join Us 🚀
                </Link>
            </Button>
        </nav>
    );
}

export default DesktopNavBar;
