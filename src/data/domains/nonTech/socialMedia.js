// Social Media & Marketing Domain Data
import {
    Megaphone,
    Smartphone,
    Palette,
    BarChart2,
    Mail,
    Coffee,
} from "lucide-react";

const socialMediaDomain = {
    id: "socialMediaMarketingTeam",
    name: "Social Media & Marketing",
    shortName: "Marketing",
    icon: Megaphone,
    color: "#34A853",
    description:
        "Amplify the community's reach through strategic social media and marketing initiatives.",
    skills: [
        "Social Media Management",
        "Content Strategy",
        "SEO & Analytics",
        "Email Marketing",
        "Community Engagement",
        "Brand Management",
        "Copywriting",
        "Campaign Planning",
    ],
    tools: [
        { name: "Buffer", icon: Smartphone },
        { name: "Canva", icon: Palette },
        { name: "Google Analytics", icon: BarChart2 },
        { name: "Mailchimp", icon: Mail },
        { name: "Hootsuite", icon: Coffee },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Social Media Revamp",
            description:
                "Complete overhaul of social media presence across all platforms.",
            image: "https://placehold.co/400x400",
            technologies: ["Strategy", "Content", "Analytics"],
            githubUrl: null,
            liveUrl: "https://instagram.com/gdgc",
            featured: true,
        },
        {
            id: 2,
            title: "Newsletter Campaign",
            description:
                "Weekly newsletter keeping the community informed and engaged.",
            image: "https://placehold.co/400x400",
            technologies: ["Email Marketing", "Content", "Engagement"],
            githubUrl: null,
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Building a Tech Community on Social Media",
            excerpt:
                "Strategies for growing and engaging a tech community online.",
            author: "Priyanka Roy",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-12-08",
            readTime: "6 min read",
            url: "/blogs/social-media-community",
            tags: ["Marketing", "Social Media", "Community"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Google Marketing Platform",
            description: "Tools and resources for effective digital marketing.",
            url: "https://marketingplatform.google.com",
            type: "Resource",
        },
    ],
    team: {
        lead: {
            name: "Kuhoo Champaneria",
            role: "Marketing Lead",
            avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/Kuhoo Mitesh Champaneria 23msi10022.jpg",
            bio: "Digital marketing specialist with a passion for community building.",
            linkedin:
                "https://www.linkedin.com/in/kuhoo-champaneria-5b690a289/",
            github: "",
            email: "",
        },
        coLead: [
            {
                name: "Atiksh Prasad",
                role: "Social Media Co-Lead",
                avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/ATIKSH PRASAD 24BCE10313.jpg",
                bio: "Content strategist and community manager focused on growth.",
                linkedin: "https://www.linkedin.com/in/atiksh-prasad",
                github: "",
                email: "",
            },
            {
                name: "Vaani Aidasani",
                role: "Social Media Co-Lead",
                avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/VAANI AIDASANI 24BCE10742.jpg",
                bio: "",
                linkedin: "https://www.linkedin.com/in/vaaniaidasani/",
                github: "",
                email: "",
            },
        ],
        members: [
            {
                name: "Sachin Sundareswaran",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/SACHIN SUNDARESWARAN 25MIM10056.jpg",
                linkedin:
                    "https://www.linkedin.com/in/sachin-sundareswaran-66273a37b",
                github: "",
            },
            {
                name: "Akriti Khantwal",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/AKRITI KHANTWAL 24BAI10401.jpg",
                linkedin:
                    "https://www.linkedin.com/in/akriti-khantwal-503a4b359",
                github: "",
            },
            {
                name: "Vedant Seth",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/VEDANT SETH 24BCE11450.jpeg",
                linkedin: "https://www.linkedin.com/in/vedant-seth-385102322/",
                github: "https://github.com/Vedant14092006",
            },
            {
                name: "Jhanvi Srivastava",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/JHANVI SRIVASTAVA 25BCE10405.jpeg",
                linkedin:
                    "https://www.linkedin.com/in/jhanvi-srivastava-6005a2386/",
                github: "https://github.com/Jhanvisrivastava2107",
            },
            {
                name: "Ashwin Sharma",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/Screenshot_20260131-021537_Photos - ASHWIN SHARMA 24BCE10351.png",
                linkedin:
                    "https://www.linkedin.com/in/ashwin-sharma-52b96035a/",
                github: "https://github.com/ASHWIN-48",
            },
            {
                name: "Sourav Shandilya",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Socialmedia&marketingteamimages/Sourav Shandilya 23bce10039.webp",
                linkedin:
                    "https://www.linkedin.com/in/sourav-shandilya-4b6165268",
                github: "",
            },
        ],
    },
};

export default socialMediaDomain;
