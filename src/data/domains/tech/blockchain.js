// Blockchain Domain Data
import { Link, FileText, Wrench, Shield, Zap } from "lucide-react";

const blockchainDomain = {
    id: "blockChainTeam",
    name: "Blockchain",
    shortName: "Blockchain",
    icon: Link,
    color: "#EA4335",
    description:
        "Dive into decentralized technologies, smart contracts, and Web3 development.",
    skills: [
        "Solidity Programming",
        "Smart Contracts",
        "Ethereum & EVM",
        "Web3.js / Ethers.js",
        "DeFi Protocols",
        "NFT Development",
        "Hardhat & Truffle",
        "IPFS & Decentralized Storage",
    ],
    tools: [
        { name: "Solidity", icon: FileText },
        { name: "Hardhat", icon: Wrench },
        { name: "MetaMask", icon: Shield },
        { name: "Remix IDE", icon: Wrench },
        { name: "OpenZeppelin", icon: Shield },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC NFT Collection",
            description:
                "Exclusive NFT collection for community members and event participants.",
            image: "https://placehold.co/400x400",
            technologies: ["Solidity", "IPFS", "React"],
            githubUrl: "https://github.com/gdgc/nft-collection",
            liveUrl: "https://nft.gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Decentralized Voting System",
            description:
                "Transparent and secure voting system using blockchain technology.",
            image: "https://placehold.co/400x400",
            technologies: ["Solidity", "Hardhat", "Next.js"],
            githubUrl: "https://github.com/gdgc/voting-dapp",
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Getting Started with Web3 Development",
            excerpt:
                "A beginner's guide to building decentralized applications.",
            author: "Karan Malhotra",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-12-05",
            readTime: "9 min read",
            url: "/blogs/web3-getting-started",
            tags: ["Blockchain", "Web3", "Ethereum"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Ethereum Developer Documentation",
            description:
                "Official Ethereum development resources and tutorials.",
            url: "https://ethereum.org/developers",
            type: "Documentation",
        },
        {
            id: 2,
            title: "Solidity by Example",
            description: "Learn Solidity through practical examples.",
            url: "https://solidity-by-example.org",
            type: "Learning Resource",
        },
    ],
    team: {
        lead: {
            name: "Ravi Kant Mishra",
            role: "Blockchain Lead",
            avatar: "/Domainimages/TechDomainimages/Blockchainmembersimages/WhatsApp Image 2026-01-29 at 10.51.20 PM - Ravi Kant Mishra 23bcy10032.jpeg",
            bio: "Web3 developer building the future of decentralized applications.",
            linkedin: "https://www.linkedin.com/in/ravi-kant-mishra-30a8642b1",
            github: "",
            email: "",
        },
        coLead: {
            name: "Meyhul V Jaiswal",
            role: "Blockchain Co-Lead",
            avatar: "/Domainimages/TechDomainimages/Blockchainmembersimages/Image 1 - MEYHUL V JAISWAL 24BCY10270.png",
            bio: "Blockchain developer with a focus on smart contracts and security.",
            linkedin: "https://www.linkedin.com/in/meyhul-v-jaiswal-525648263",
            github: "https://www.github.com/meyhul03",
            email: "",
        },
        members: [
            {
                name: "Poorva Jaiswal",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Blockchainmembersimages/IMG_20260115_104915 - POORVA JAISWAL 24BCE11486.jpg",
                linkedin:
                    "https://www.linkedin.com/in/poorva-jaiswal-53aa29303",
                github: "https://github.com/Poorva77",
            },
            {
                name: "Krishna Barot",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Blockchainmembersimages/IMG_20251110_152905 - KRISHNA VINIT BAROT 25BCE10252.jpg",
                linkedin: "https://www.linkedin.com/in/krishna-barot-75580b375",
                github: "https://github.com/barotkrishna1702",
            },
             {
                name: "Yadnyesh Patil ",
                role: "Core Member",
                avatar: "/Domainimages/TechDomainimages/Blockchainmembersimages/YADNYESH PRAKASH PATIL 24BAI10584.jpg",
                linkedin: "https://www.linkedin.com/in/yadnyeshp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                github: "https://github.com/Yadnyesh-patil",
            },
             
        ],
    },
};

export default blockchainDomain;
