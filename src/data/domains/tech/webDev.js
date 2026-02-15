// Web Development Domain Data
import { Globe, Monitor, Code, Zap, Database, Palette } from "lucide-react";

const webDevDomain = {
    id: "webDTeam",
    name: "Web Development",
    shortName: "Web Dev",
    icon: Globe,
    color: "#4285F4",
    description:
        "Build modern, responsive, and scalable web applications using cutting-edge technologies.",
    skills: [
        "HTML5 & CSS3",
        "JavaScript & TypeScript",
        "React.js & Next.js",
        "Node.js & Express",
        "Database Management",
        "API Development",
        "Version Control (Git)",
        "Responsive Design",
    ],
    tools: [
        { name: "VS Code", icon: Monitor },
        { name: "React", icon: Code },
        { name: "Node.js", icon: Zap },
        { name: "MongoDB", icon: Database },
        { name: "Firebase", icon: Zap },
        { name: "Tailwind CSS", icon: Palette },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Community Website",
            description:
                "Official website for the Google Developer Groups on Campus community.",
            image: "https://placehold.co/400x400",
            technologies: ["React", "Tailwind CSS", "Vite"],
            githubUrl: "https://github.com/gdgc/website",
            liveUrl: "https://gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Event Management System",
            description:
                "A comprehensive platform for managing community events and registrations.",
            image: "https://placehold.co/400x400",
            technologies: ["Next.js", "PostgreSQL", "Prisma"],
            githubUrl: "https://github.com/gdgc/events",
            liveUrl: null,
            featured: false,
        },
        {
            id: 3,
            title: "Resource Hub",
            description:
                "Centralized platform for learning resources and documentation.",
            image: "https://placehold.co/400x400",
            technologies: ["React", "Firebase", "Material UI"],
            githubUrl: "https://github.com/gdgc/resources",
            liveUrl: "https://resources.gdgc.dev",
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Getting Started with React 19",
            excerpt:
                "Explore the new features and improvements in React 19 and how to migrate your projects.",
            author: "Priya Sharma",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-12-15",
            readTime: "8 min read",
            url: "/blogs/react-19-guide",
            tags: ["React", "JavaScript", "Frontend"],
        },
        {
            id: 2,
            title: "Building Accessible Web Applications",
            excerpt:
                "Learn the best practices for creating web apps that everyone can use.",
            author: "Amit Kumar",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-11-20",
            readTime: "6 min read",
            url: "/blogs/accessibility-guide",
            tags: ["Accessibility", "HTML", "UX"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "MDN Web Docs - JavaScript",
            description:
                "Comprehensive documentation for JavaScript programming.",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            type: "Documentation",
        },
        {
            id: 2,
            title: "React Official Documentation",
            description:
                "Learn React from the official docs with interactive examples.",
            url: "https://react.dev",
            type: "Documentation",
        },
        {
            id: 3,
            title: "Web.dev by Google",
            description: "Guidance for building modern web experiences.",
            url: "https://web.dev",
            type: "Learning Resource",
        },
    ],
    team: {
        lead: {
            name: "Priyanshu Singh",
            role: "Web Development Lead",
            avatar: "/Domainimages/TechDomainimages/Webdevmembersimages/Priyanshu Singh 23bai10686.jpg",
            bio: "Full-stack developer passionate about building scalable web applications.",
            linkedin: "https://www.linkedin.com/in/iampriyanshusingh/",
            github: "https://github.com/iampriyanshusingh",
            email: "",
        },
        coLead: {
            name: "Ayank Kumar Giri",
            role: "Web Development Co-Lead",
            avatar: "/Domainimages/TechDomainimages/Webdevmembersimages/Ayank Kumar Giri.jpeg",
            bio: "Developer focused on Latest technologies and user experience design.",
            linkedin: "https://www.linkedin.com/in/ayank-kumar-giri-9895ab339",
            github: "https://github.com/Ayankkk29/",
            email: ""
        },
        members: [
            {
                name: "Rakshit Raj",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Webdevmembersimages/RAKSHIT RAJ 25BAI11234.jpg",
                linkedin:
                    "https://www.linkedin.com/in/rakshitrajvit/",
                github: "https://github.com/RakshitRajVIT",
            },
            {
                name: "Abhishek",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Webdevmembersimages/75_kb_imageL5OTTM (18) - ABHISHEK 24BCE10272.jpg",
                linkedin:
                    "https://www.linkedin.com/in/abhishek-tripathi-a714ab30b/",
                github: "https://github.com/Abhishekhack2909",
            },
            {
                name: "Aryan Amit Arya",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Webdevmembersimages/ARYAN AMIT ARYA 25BAI10295.png",
                linkedin: "https://www.linkedin.com/in/aryan-amit-arya",
                github: "https://github.com/RelaxItsAryan",
            },
            {
                name: "Jitish",
                role: "Core Member",
                avatar: "https://placehold.co/128x128",
                linkedin: "https://www.linkedin.com/in/jitish",
                github: "https://github.com/JitishxD",
            },
             {
                name: "Ilesh",
                role: "Core Member",
                avatar: "https://placehold.co/128x128",
                linkedin: "https://www.linkedin.com/in/jitish",
                github: "https://github.com/JitishxD",
            },
        ],
    },
};

export default webDevDomain;
