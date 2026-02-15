// Videography & Photography Domain Data
import { Camera, Film, Video, CameraOff, Videotape } from "lucide-react";

const mediaDomain = {
    id: "videoPhotographyTeam",
    name: "Videography & Photography",
    shortName: "Media",
    icon: Camera,
    color: "#EA4335",
    description:
        "Capture and create visual stories that showcase the community's journey.",
    skills: [
        "Photography",
        "Videography",
        "Video Editing",
        "Photo Editing",
        "Lighting Techniques",
        "Drone Photography",
        "Live Streaming",
        "Content Production",
    ],
    tools: [
        { name: "Adobe Premiere", icon: Film },
        { name: "DaVinci Resolve", icon: Video },
        { name: "Lightroom", icon: Camera },
        { name: "OBS Studio", icon: Videotape },
        { name: "After Effects", icon: Film },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Documentary",
            description:
                "Short documentary showcasing the community's impact and journey.",
            image: "https://placehold.co/400x400",
            technologies: ["Videography", "Editing", "Storytelling"],
            githubUrl: null,
            liveUrl: "https://youtube.com/gdgc",
            featured: true,
        },
        {
            id: 2,
            title: "Event Highlights",
            description: "Professional coverage of all community events.",
            image: "https://placehold.co/400x400",
            technologies: ["Photography", "Videography", "Editing"],
            githubUrl: null,
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Capturing Tech Events Like a Pro",
            excerpt:
                "Tips and techniques for photographing tech conferences and meetups.",
            author: "Aryan Khanna",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-12-12",
            readTime: "5 min read",
            url: "/blogs/event-photography",
            tags: ["Photography", "Events", "Tips"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "YouTube Creator Academy",
            description: "Free resources for creating engaging video content.",
            url: "https://creatoracademy.youtube.com",
            type: "Learning Resource",
        },
    ],
    team: {
        lead: {
            name: "Swati Singh",
            role: "Media Lead",
            avatar: "/Domainimages/N-TechDomainimages/Videographyteamimages/SWATI SINGH 24BEY10046.webp",
            bio: "Professional videographer and photographer specializing in tech events.",
            linkedin: "https://www.linkedin.com/in/swatiiisiiingh",
            github: "",
            email: "",
        },
        coLead: [
            {
                name: "Yash Khatwani",
                role: "Media Co-Lead",
                avatar: "/Domainimages/N-TechDomainimages/Videographyteamimages/Yash Khatwani 23bce10362.jpeg",
                bio: "Videographer and editor working on event coverage and tutorials.",
                linkedin: "https://www.linkedin.com/in/yash-khatwani-133bb9353",
                github: "https://github.com/YashKhatwani915",
                email: "",
            },
            {
                name: "Shashwat Roy",
                role: "Media Co-Lead",
                avatar: "/Domainimages/N-TechDomainimages/Videographyteamimages/SHASHWAT ROY 24MIM10019.jpeg",
                bio: "",
                linkedin: "https://www.linkedin.com/in/shashwat-roy-955308315/",
                github: "https://github.com/Shash-roy",
                email: "",
            },
        ],
        members: [
            {
                name: "Karthik Gupta",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Videographyteamimages/GUPTA KARTHIK.jpeg",
                linkedin: "https://www.linkedin.com/in/karthik-gupta-k2112",
                github: "",
            },
            {
                name: "Saksham Raut",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Videographyteamimages/RAUT SAKSHAM.jpeg",
                linkedin: "https://www.linkedin.com/in/saksham-raut-11b10b377/",
                github: "https://github.com/saksham110206",
            },
            {
                name: "Noynika Asrani",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Videographyteamimages/NOYNIKA ASRANI 24MIM10237.jpeg",
                linkedin:
                    "https://www.linkedin.com/in/noynika-asrani-50167b32a",
                github: "https://github.com/Noynika",
            },
            {
                name: "Achyut Khetan",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Videographyteamimages/ACHYUT KHETAN 24BCE11249.jpg",
                linkedin: "https://in.linkedin.com/in/achyut-khetan-443673350",
                github: "https://github.com/achyutkhetan",
            },
        ],
    },
};

export default mediaDomain;
