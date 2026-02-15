// Machine Learning Domain Data
import { Cpu, Code, BookOpen, Cloud, BarChart2, Zap } from "lucide-react";

const mlDomain = {
    id: "mlTeam",
    name: "Machine Learning",
    shortName: "ML/AI",
    icon: Cpu,
    color: "#FBBC04",
    description:
        "Explore the world of artificial intelligence and machine learning with hands-on projects.",
    skills: [
        "Python Programming",
        "NumPy & Pandas",
        "TensorFlow & PyTorch",
        "Data Visualization",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Model Deployment",
    ],
    tools: [
        { name: "Python", icon: Code },
        { name: "TensorFlow", icon: Zap },
        { name: "Jupyter", icon: BookOpen },
        { name: "Google Colab", icon: Cloud },
        { name: "Kaggle", icon: BarChart2 },
    ],
    projects: [
        {
            id: 1,
            title: "Sentiment Analysis Tool",
            description:
                "NLP-based tool for analyzing sentiment in social media posts.",
            image: "https://placehold.co/400x400",
            technologies: ["Python", "TensorFlow", "BERT"],
            githubUrl: "https://github.com/gdgc/sentiment-analysis",
            liveUrl: "https://sentiment.gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Image Classification API",
            description:
                "REST API for classifying images using deep learning models.",
            image: "https://placehold.co/400x400",
            technologies: ["Python", "FastAPI", "PyTorch"],
            githubUrl: "https://github.com/gdgc/image-classifier",
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Introduction to Neural Networks",
            excerpt:
                "Understanding the fundamentals of neural networks and deep learning.",
            author: "Dr. Meera Iyer",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-11-25",
            readTime: "12 min read",
            url: "/blogs/neural-networks-intro",
            tags: ["Machine Learning", "Deep Learning", "AI"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "TensorFlow Documentation",
            description: "Official TensorFlow tutorials and guides.",
            url: "https://www.tensorflow.org/learn",
            type: "Documentation",
        },
        {
            id: 2,
            title: "Google AI Blog",
            description: "Latest research and updates from Google AI.",
            url: "https://ai.googleblog.com",
            type: "Blog",
        },
    ],
    team: {
        lead: {
            name: "Kavya Gupta",
            role: "Machine Learning Lead",
            avatar: "/Domainimages/TechDomainimages/MLmembersimages/Kavya Gupta 23bai10538.jpg",
            bio: "ML enthusiast focused on NLP and computer vision.",
            linkedin: "https://www.linkedin.com/in/its-kavya-gupta/",
            github: "https://github.com/kavya1b1",
            email: "",
        },
        coLead: {
            name: "Shubham Sharma",
            role: "Machine Learning Co-Lead",
            avatar: "/Domainimages/TechDomainimages/MLmembersimages/IMG-20251030-WA0010 - Shubham Sharma 23bai10229.jpg",
            bio: "ML engineer working on model deployment and MLOps.",
            linkedin: "https://www.linkedin.com/iamshubhshrma",
            github: "https://github.com/iamshubhshrma",
            email: "",
        },
        members: [
            {
                name: "Manthan Awgan",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/MLmembersimages/MANTHAN GOVIND AWGAN 24BSA10053.jpg",
                linkedin: "https://www.linkedin.com/in/manthan-awgan-3591172a4",
                github: "https://github.com/manthanawgan",
            },
            {
                name: "Raghav Khare",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/MLmembersimages/IMG_20260130_171708 - RAGHAV KHARE 24BAI10086.png",
                linkedin: "https://www.linkedin.com/in/raghav-khare-360312382",
                github: "https://github.com/Raghavkhare12",
            },
            {
                name: "Prakhar Shukla",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/MLmembersimages/IMG-20251125-WA0004 (2) - PRAKHAR SHUKLA 24BCE10117.jpg",
                linkedin:
                    "https://www.linkedin.com/in/prakhar-shukla-b5745a324",
                github: "https://github.com/Intrepidloaf",
            },
            {
                name: "Mayank Joshi",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/MLmembersimages/IMG_20260131_103618 - MAYANK JOSHI 24BCE10858.jpg",
                linkedin: "https://www.linkedin.com/in/mayank-joshi-399b2b385",
                github: "https://github.com/Mayank251125",
            },
            {
                name: "Deeksha Kaushal",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/MLmembersimages/DEEKSHA KAUSHAL 25BHI10019.jpg",
                linkedin:
                    "https://www.linkedin.com/in/deeksha-kaushal-88b6ba261",
                github: "https://github.com/deenominator",
            },
        ],
    },
};

export default mlDomain;
