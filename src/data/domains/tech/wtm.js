// Women Techmakers Domain Data
import { Users, Video, MessageSquare, FileText, Palette } from "lucide-react";

const wtmDomain = {
    id: "womenTechmakers",
    name: "Women Techmakers",
    shortName: "WTM",
    icon: Users,
    color: "#1DA462",
    description:
        "Empowering women in technology through visibility, community, and resources.",
    skills: [
        "Technical Leadership",
        "Public Speaking",
        "Community Building",
        "Mentorship",
        "Career Development",
        "Diversity & Inclusion",
        "Technical Skills (Various)",
        "Networking",
    ],
    tools: [
        { name: "Google Meet", icon: Video },
        { name: "Slack", icon: MessageSquare },
        { name: "Notion", icon: FileText },
        { name: "Canva", icon: Palette },
    ],
    projects: [
        {
            id: 1,
            title: "WTM Mentorship Program",
            description:
                "Structured mentorship program connecting women in tech with industry experts.",
            image: "https://placehold.co/400x400",
            technologies: ["Community", "Mentorship", "Career Growth"],
            githubUrl: null,
            liveUrl: "https://wtm.gdgc.dev/mentorship",
            featured: true,
        },
        {
            id: 2,
            title: "Tech Talk Series",
            description:
                "Monthly speaker series featuring women leaders in technology.",
            image: "https://placehold.co/400x400",
            technologies: ["Events", "Networking", "Learning"],
            githubUrl: null,
            liveUrl: "https://wtm.gdgc.dev/talks",
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Breaking Barriers in Tech",
            excerpt:
                "Stories and strategies from women who are making an impact in technology.",
            author: "Ananya Krishnan",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-12-01",
            readTime: "7 min read",
            url: "/blogs/breaking-barriers",
            tags: ["Women in Tech", "Career", "Inspiration"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Women Techmakers Official",
            description:
                "Google's program providing visibility, community, and resources for women in tech.",
            url: "https://developers.google.com/womentechmakers",
            type: "Community",
        },
        {
            id: 2,
            title: "She Code Africa",
            description:
                "Non-profit organization focused on celebrating women in tech across Africa.",
            url: "https://shecodeafrica.org",
            type: "Community",
        },
    ],
    team: {
        lead: {
            name: "Anshika Shrivastava",
            role: "Women Techmakers Lead",
            avatar:"/Domainimages/TechDomainimages/WTMmembersimages/Anshika Shrivastava 23bai10033.jpeg",
            bio: "Passionate about creating inclusive spaces for women in technology.",
            linkedin:
                "https://www.linkedin.com/in/anshika-shrivastava-a2a078294",
            github: "https://github.com/ANSHIKA1220",
            email: "",
        },
        coLead: {
            name: "Sneha Tiwari",
            role: "WTM Co-Lead",
            avatar: "/Domainimages/TechDomainimages/WTMmembersimages/Snapchat-419276788 - SNEHA TIWARI 24BCE11287.jpg",
            bio: "Community organizer and developer advocate focused on outreach.",
            linkedin: "https://www.linkedin.com/in/sneha-tiwari-63aa32327",
            github: "https://github.com/ssnehatiwari21",
            email: "",
        },
        members: [
            {
                name: "Pragya Richa Pandey",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/WTMmembersimages/PRAGYA RICHA PANDEY 24BCE10797.jpg",
                linkedin:
                    "https://www.linkedin.com/in/pragya-richa-pandey-94bbb9308/",
                github: "https://github.com/pragya-pp08",
            },
            {
                name: "Shruti Sinha",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/WTMmembersimages/B612_20241107_193531_644 - SHRUTI SINHA 24BCE10046.jpg",
                linkedin: "https://www.linkedin.com/in/shruti-sinha-133803339",
                github: "https://github.com/shrutisinha213",
            },
            {
                name: "Snehal Dixit",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/WTMmembersimages/1767272219181~2 - SNEHAL DIXIT 25MIP10072.jpg",
                linkedin: "https://www.linkedin.com/in/snehaldixitofficial",
                github: "https://www.github.com/snehaldixitofficial",
            },
            {
                name: "Aditi Singh",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/WTMmembersimages/IMG_20260131_123641 - ADITI SINGH 25BCE10868.jpg",
                linkedin: "https://www.linkedin.com/in/aditi-singh-6aa56a379",
                github: "https://github.com/aditi25bce10868-blip",
            },
        ],
    },
};

export default wtmDomain;
