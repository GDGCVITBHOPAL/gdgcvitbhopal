import React from "react";
import { Link } from "react-router-dom";
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

const techDomainLinks = [
    {
        title: "Web Development Team",
        href: "/teams/tech/webDTeam",
        description: "Lorem ipsum dolor sit amet.",
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
        description: "Lorem ipsum dolor sit amet.",
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
];

function ListItem({ className, title, children, href, ...props }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
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
    return (
        <nav className="hidden lg:flex items-center justify-between w-full h-12 px-8 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
                <img
                    src="/GDG Logo.svg"
                    alt="GDG Logo"
                    className="h-10 w-auto"
                />

                <div className="text-base font-medium ml-2">GDG VIT</div>
            </Link>

            {/* Navigation Menu */}
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/">Home</Link>
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
                            <Link to="/events">Events</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/contact">Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <a
                href="https://gdg.community.dev/gdg-on-campus-vellore-institute-of-technology-bhopal-india/"
                target="_blank"
                className="bg-linear-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 px-6 py-2.5 rounded-full text-sm font-medium transition shadow-lg"
            >
                GDGC × VIT Bhopal University
            </a>
        </nav>
    );
}

export default DesktopNavBar;
