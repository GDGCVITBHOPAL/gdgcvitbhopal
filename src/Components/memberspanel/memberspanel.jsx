import { useState, useEffect, useRef } from "react";
import { Github, Linkedin } from "lucide-react";
import "./memberspanel.css";
import leftBracket from "@/assets/EventsSectionAssets/leftBracket.svg";
import rightBracket from "@/assets/EventsSectionAssets/rightBracket.svg";
import wheel from "@/assets/EventsSectionAssets/wheel.svg";
const ScrollLinkedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const profileRefs = useRef([]);
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const transitionTimeoutRef = useRef(null);

  const teamData = [
    {
      name: "Anubhavi Jaiswal",
      role: "GDG Organizer",
      image: "/Panel_member1.jpeg",
      github: "https://github.com/Anubhavi-Jaiswal",
      linkedin: "https://www.linkedin.com/in/anubhavi-jaiswal/",
      vision: "As Organizer of GDGC VIT Bhopal, I’ve built a collaborative tech community through workshops, hackathons, and hands-on initiatives, empowering students as developers and leaders."
    },
    {
      name: "Akshay Kumar Mishra",
      role: "Technical Lead",
      image: "/Panel-member2.jpeg",
      github: " https://github.com/akshayvibe",
      linkedin: " https://www.linkedin.com/in/itsakshay/",
      vision: "Being Tech Lead at GDGC VIT Bhopal has been rewarding, fostering innovation and collaboration while empowering students to grow as developers, leaders, and solution builders."
    },
    {
      name: "Gagan Bhardwaj",
      role: "Technical Co-lead",
      image: "/Panel_member3.jpeg",
      github:  "https://github.com/gagan771",
      linkedin: "https://www.linkedin.com/in/gagan-bhardwaj-b8831a292",
      vision: "Spent two amazing years at GDGC, growing from Web Team Member to Tech Co-Lead, learning, collaborating, and grateful for community, growth, and experiences ahead. 🚀✨"
    },
    {
      name: "Priyansh Chaudhary",
      role: "Non-Technical Lead",
      image: "/Panel_member4.jpeg",
      github: "#",
      linkedin: "#",
      vision: "Being Non-Tech Lead at GDG on Campus means driving vision with accountability, leading a talented team, pushing boundaries, and reaching new heights together—always with great vibes. 🏎️"
    },
    {
      name: "Devanshi Sharma",
      role: "Non-Technical Co-lead",
      image: "/Panel_member5.jpeg",
      github: "https://github.com/devanshi2208",
      linkedin: " https://www.linkedin.com/in/devanshi-sharma-183461324",
      vision: "Started as an Event Team Member and now serve as Non-Tech Co-Lead, driven by ambition, consistency, and meaningful contributions toward personal and collective growth."
    }
  ];

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const scrollCenter = scrollTop + containerHeight / 2;

      let newActiveIndex = 0;
      let minDistance = Infinity;

      profileRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const cardCenter =
            rect.top -
            containerRect.top +
            rect.height / 2 +
            scrollTop;
          const distance = Math.abs(cardCenter - scrollCenter);

          if (distance < minDistance) {
            minDistance = distance;
            newActiveIndex = index;
          }
        }
      });

      if (newActiveIndex !== activeIndexRef.current) {
        setActiveIndex(newActiveIndex);
        setIsTransitioning(true);
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
        }
        transitionTimeoutRef.current = setTimeout(() => {
          setIsTransitioning(false);
        }, 200);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="scroll-linked-section">
      <div className="heading-container">
        <img src={wheel} alt="wheel" className="wheel left-wheel" />
        <img src={leftBracket} alt="left bracket" className="bracket left-bracket" />
        <h2 className="team-heading">Meet Our Team</h2>
        <img src={rightBracket} alt="right bracket" className="bracket right-bracket" />
        <img src={wheel} alt="wheel" className="wheel right-wheel" />
      </div>
      <div className="panels-row">
        <div className="vision-card">
          <h2 className="vision-title">Our Vision</h2>
          <div className="vision-content">
            <div
              className={`vision-text ${isTransitioning ? "transitioning-out" : "transitioning-in"}`}
              key={activeIndex}
            >
              <p>{teamData[activeIndex].vision}</p>
              <div className="vision-author">
                <span className="author-name">
                  {teamData[activeIndex].name}
                </span>
                <span className="author-role">
                  {teamData[activeIndex].role}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="profiles-container" ref={containerRef}>
          <div className="scroll-spacer-top"></div>
          {teamData.map((member, index) => (
            <div
              key={index}
              ref={(el) => (profileRefs.current[index] = el)}
              className={`profile-card ${index === activeIndex ? "active" : ""} ${isTransitioning && index === activeIndex
                  ? "transitioning-in"
                  : ""
                } ${isTransitioning && index !== activeIndex
                  ? "transitioning-out"
                  : ""
                }`}
            >
              <div className="profile-info">
                <h3 className="profile-name">{member.name}</h3>
                <p className="profile-role">{member.role}</p>
                <div className="social-icons">
                  <a
                    href={member.github}
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <Github />
                  </a>
                  <a
                    href={member.linkedin}
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
              <div className="profile-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-image"
                />
              </div>
            </div>
          ))}
          <div className="scroll-spacer-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollLinkedSection;