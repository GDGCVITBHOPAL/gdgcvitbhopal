// Android Development Domain Data
import { Smartphone, Code } from "lucide-react";

const androidDomain = {
    id: "androidTeam",
    name: "Android Development",
    shortName: "Android",
    icon: Smartphone,
    color: "#34A853",
    description:
        "Create powerful Android applications using Kotlin and modern Android development practices.",
    skills: ["Kotlin Programming", "Android SDK", "Jetpack Compose"],
    tools: [
        { name: "Android Studio", icon: Code },
        { name: "Kotlin", icon: Code },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Events App",
            description:
                "Mobile app for tracking and registering for GDGC events.",
            image: "https://placehold.co/400x400",
            technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
            githubUrl: "https://github.com/gdgc/android-app",
            liveUrl:
                "https://play.google.com/store/apps/details?id=dev.gdgc.app",
            featured: true,
        },
        {
            id: 2,
            title: "Study Buddy",
            description:
                "A collaborative study app for students with shared notes and schedules.",
            image: "https://placehold.co/400x400",
            technologies: ["Kotlin", "Room", "Material Design 3"],
            githubUrl: "https://github.com/gdgc/study-buddy",
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Mastering Jetpack Compose",
            excerpt:
                "A comprehensive guide to building beautiful UIs with Jetpack Compose.",
            author: "Vikram Joshi",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-12-10",
            readTime: "10 min read",
            url: "/blogs/jetpack-compose-guide",
            tags: ["Android", "Kotlin", "Jetpack Compose"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Android Developers Official",
            description:
                "Official Android development documentation and codelabs.",
            url: "https://developer.android.com",
            type: "Documentation",
        },
        {
            id: 2,
            title: "Kotlin Documentation",
            description: "Learn Kotlin programming language from scratch.",
            url: "https://kotlinlang.org/docs/home.html",
            type: "Documentation",
        },
    ],
    team: {
        lead: {
            name: "Shikhar Sharma",
            role: "Android Development Lead",
            avatar: "/Domainimages/TechDomainimages/Androiddevmembersimages/WhatsApp Image 2026-01-30 at 11.28.53 PM - Shikhar Sharma 23bce10108.jpeg",
            bio: "Android developer with experience in building production apps.",
            linkedin: "https://www.linkedin.com/in/shikhar-sharma-1268552b7/",
            github: "https://github.com/Shikhar-web25",
            email: "",
        },
        coLead: {
            name: "Nethaniel Johan Kurian",
            role: "Android Development Co-Lead",
            avatar: "/Domainimages/TechDomainimages/Androiddevmembersimages/IMG-20240127-WA0000 - NETHANIEL JOHAN KURIAN 24BCY10210.jpg",
            bio: "Kotlin enthusiast and Android engineer.",
            linkedin: "https://linkedin.com/in/nethaniel-kurian/",
            github: "https://github.com/Neth766/",
            email: "",
        },
        members: [
            {
                name: "Prateek Das",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Androiddevmembersimages/IMG-20251215-WA0016 - PRATEEK DAS 25BCE10599.jpg",
                linkedin: "https://www.linkedin.com/in/prateek-das-a45215252",
                github: "https://github.com/Amazingdude1525",
            },
            {
                name: "Radha Agarwal",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Androiddevmembersimages/Radha Agarwal 23bce10626.jpg",
                linkedin: "https://www.linkedin.com/in/radha-agarwal-67b925289",
                github: "https://github.com/ravine27",
            },
            {
                name: "Nityay Bhavsar",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Androiddevmembersimages/photo - NITYAY BHAVSAR 24BCG10064.jpeg",
                linkedin:
                    "https://www.linkedin.com/in/nityay-bhavsar-b05190310/",
                github: "https://github.com/Nityayyrrr",
            },
            {
                name: "Aryan Katwal",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Androiddevmembersimages/AK - ARYAN KATWAL 24BCG10101.jpeg",
                linkedin: "https://www.linkedin.com/in/aryan-katwal-b1b9b6307/",
                github: "https://github.com/AryanKatwal06",
            },
            {
                name: "Shubham Pratap Singh",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Androiddevmembersimages/IMG_20260131_135103 - SHUBHAM PRATAP SINGH 24BAI10214.jpg",
                linkedin:
                    "https://www.linkedin.com/in/shubham-pratap-7b0ab3327",
                github: "https://github.com/shubham989825",
            },
        ],
    },
};

export default androidDomain;
