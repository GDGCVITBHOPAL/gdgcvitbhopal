// Design & Content Domain Data
import { Palette, Layers, FileText, Wand } from "lucide-react";

const designDomain = {
    id: "designContentTeam",
    name: "Design & Content",
    shortName: "Design",
    icon: Palette,
    color: "#FBBC04",
    description:
        "Create visually stunning designs and compelling content that tells our story.",
    skills: [
        "Graphic Design",
        "UI/UX Design",
        "Brand Identity",
        "Typography",
        "Content Writing",
        "Motion Graphics",
        "Illustration",
        "Design Systems",
    ],
    tools: [
        { name: "Figma", icon: Layers },
        { name: "Adobe Creative Suite", icon: Wand },
        { name: "Canva", icon: Palette },
        { name: "Notion", icon: FileText },
        { name: "Lottie", icon: FileText },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Brand Guidelines",
            description:
                "Comprehensive brand identity system for the community.",
            image: "https://placehold.co/400x400",
            technologies: ["Branding", "Design System", "Guidelines"],
            githubUrl: null,
            liveUrl: "https://brand.gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Event Collateral Design",
            description:
                "Visual assets for all community events and activities.",
            image: "https://placehold.co/400x400",
            technologies: ["Graphic Design", "Print", "Digital"],
            githubUrl: null,
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Designing for Developer Communities",
            excerpt:
                "Creating visual content that resonates with technical audiences.",
            author: "Tanya Gupta",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-11-28",
            readTime: "7 min read",
            url: "/blogs/design-for-developers",
            tags: ["Design", "Community", "Branding"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Material Design Guidelines",
            description:
                "Google's design system for creating beautiful, usable products.",
            url: "https://m3.material.io",
            type: "Design System",
        },
        {
            id: 2,
            title: "Figma Community",
            description:
                "Free design resources and inspiration from the community.",
            url: "https://www.figma.com/community",
            type: "Resource",
        },
    ],
    team: {
        lead: {
            name: "Kshitij Tripathi",
            role: "Design Lead",
            avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/KSHITIJ TRIPATHI.jpg",
            bio: "Visual designer creating impactful designs for tech communities.",
            linkedin: "https://www.linkedin.com/in/kshitij-tripathi-163415275",
            github: "https://github.com/KTPhantom",
            email: "",
        },
        coLead: [
            {
                name: "Harshika Sunkara",
                role: "Design Co-Lead",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/SUNKARA HARSHIKA 24BOE10050.png",
                bio: "Product designer focused on UX systems and prototyping.",
                linkedin: "https://linkedin.com/in/harshika-sunkara-11143537a",
                github: "https://github.com/harshika-nub",
                email: "",
            },
            {
                name: "Akash Kumar Pandey",
                role: "Design Co-Lead",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/AKASH KUMAR PANDEY 24BEY10064.jpg",
                bio: "",
                linkedin: "https://www.linkedin.com/in/akash-pandey-987466190",
                github: "https://github.com/a4kashhh",
                email: "",
            },
        ],
        members: [
            {
                name: "Anika Mangla",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/ANIKA 25BAI10931.jpg",
                linkedin: "https://www.linkedin.com/in/anika-m-892081299",
                github: "https://github.com/anika00mangla",
            },
            {
                name: "Singh Bhumija Lalitkumar",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/SINGHBHUMIJA LALITKUMAR 24BCE11200.jpg",
                linkedin: "",
                github: "",
            },
            {
                name: "Shubh Tyagi",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/SHUBH TYAGI 24BCY10016(1).png",
                linkedin: "https://www.linkedin.com/in/shubh-tyagi-1a8aab323/",
                github: "https://github.com/tyagishubh17",
            },
            {
                name: "Priyanshi Gupta",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/picture - PRIYANSHI GUPTA 24BCE10525.jpeg",
                linkedin:
                    "https://www.linkedin.com/in/priyanshi-gupta-68598335a",
                github: "https://github.com/magnetic-c",
            },
            {
                name: "Utkarsh Sharma",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/IMG_20260129_212625 - UTKARSH SHARMA 24BCY10080.jpg",
                linkedin: "https://www.linkedin.com/in/xylarian",
                github: "https://github.com/Xylarian",
            },
            {
                name: "Saumil Singhal",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/IMG_20260131_103117 - Saumil Singhal 23bai11005.jpg",
                linkedin:
                    "https://www.linkedin.com/in/saumil-singhal-02a424227",
                github: "https://github.com/saumil-777",
            },
            {
                name: "Yuvraj Singh Parihar",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/Yuvraj Singh Parihar 23bai10187.jpeg",
                linkedin:
                    "https://www.linkedin.com/in/yuvraj-singh-parihar-a75a0428a/",
                github: "",
            },
            {
                name: "Ekansh Singh",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Design&contentteamimages/Ekansh Singh 23bai10119.jpg",
                linkedin: "",
                github: "",
            },
        ],
    },
};

export default designDomain;
