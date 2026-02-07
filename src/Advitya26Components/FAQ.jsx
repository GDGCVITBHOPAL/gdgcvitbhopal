import { useState, useEffect, useRef } from 'react';

// Import Google Sans alternative (Poppins is closest to Product Sans/Google Sans)
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector('link[href*="Poppins"]')) {
  document.head.appendChild(fontLink);
}

const faqData = {
  general: [
    {
      question: "What is the event about?",
      answer: "This event is a hackathon where participants can collaborate on projects.",
      iconColor: "yellow"
    },
    {
      question: "Who can participate?",
      answer: "Anyone interested in technology and innovation can participate.",
      iconColor: "cyan"
    },
    {
      question: "Is there a participation fee?",
      answer: "No, the event is free to attend.",
      iconColor: "blue"
    }
  ],
  registration: [
    {
      question: "How do I register?",
      answer: "You can register through our official website.",
      iconColor: "yellow"
    },
    {
      question: "What information is required for registration?",
      answer: "You will need to provide your name, email, and a brief bio.",
      iconColor: "cyan"
    },
    {
      question: "Can I register as a team?",
      answer: "Yes, you can register as a team of 4 members.",
      iconColor: "blue"
    }
  ],
  hackathon: [
    {
      question: "What are the judging criteria?",
      answer: "Projects will be judged based on creativity, technical complexity, and impact.",
      iconColor: "yellow"
    },
    {
      question: "Are there any prizes?",
      answer: "Yes, there are several prizes for the top projects.",
      iconColor: "cyan"
    },
    {
      question: "Can I work on a project before the event?",
      answer: "No, all work must be done during the hackathon.",
      iconColor: "blue"
    }
  ]
};

// Asterisk/Star icons for each color
const AsteriskIcon = ({ color }) => {
  if (color === "yellow") {
    // Bold 6-pointed asterisk (thick arms like the reference)
    return (
      <svg 
        width="70" 
        height="70" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
        style={{ animation: 'spin 4s linear infinite' }}
      >
        <polygon 
          points="50,0 58,38 100,38 65,58 78,100 50,72 22,100 35,58 0,38 42,38"
          fill="#C5E500"
        />
        <polygon 
          points="50,8 56,40 92,40 62,56 73,90 50,68 27,90 38,56 8,40 44,40"
          fill="#C5E500"
        />
      </svg>
    );
  }
  
  if (color === "cyan") {
    // 8-petal flower shape (rounded petals)
    return (
      <svg 
        width="70" 
        height="70" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
        style={{ animation: 'spin 4s linear infinite' }}
      >
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = 50 + 35 * Math.cos(angle);
          const y = 50 + 35 * Math.sin(angle);
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="8"
              ry="18"
              fill="#50E3C2"
              transform={`rotate(${i * 45 + 90}, ${x}, ${y})`}
            />
          );
        })}
        <circle cx="50" cy="50" r="12" fill="#50E3C2" />
      </svg>
    );
  }
  
  // Blue - Many thin radiating lines (starburst)
  return (
    <svg 
      width="70" 
      height="70" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
      style={{ animation: 'spin 4s linear infinite' }}
    >
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 45 * Math.cos((i * 15 * Math.PI) / 180)}
          y2={50 + 45 * Math.sin((i * 15 * Math.PI) / 180)}
          stroke="#4040FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <circle cx="50" cy="50" r="6" fill="#4040FF" />
    </svg>
  );
};

const FAQCard = ({ question, answer, iconColor }) => (
  <div className="border border-white/100 rounded-lg p-6 flex items-center gap-10 bg-transparent hover:bg-white/5 transition-colors w-full max-w-10xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <div className="flex-shrink-0">
      <AsteriskIcon color={iconColor} />  
    </div>
    <div>
      <h3 className="text-white font-bold text-[28px] mb-2">{question}</h3>
      <p className="text-white/100 text-[22px] font-normal">{answer}</p>
    </div>
  </div>
);

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('general');
  const scrollContainerRef = useRef(null);
  const generalRef = useRef(null);
  const registrationRef = useRef(null);
  const hackathonRef = useRef(null);

  const tabs = [
    { id: 'general', label: 'GENERAL', ref: generalRef },
    { id: 'registration', label: 'REGISTRATION', ref: registrationRef },
    { id: 'hackathon', label: 'HACKATHON', ref: hackathonRef }
  ];

  // Scroll to section when tab is clicked
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const tabObj = tabs.find(t => t.id === tabId);
    if (tabObj?.ref?.current) {
      tabObj.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // IntersectionObserver to detect which section is in view
  useEffect(() => {
    const options = {
      root: null, // Use viewport as root
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setActiveTab(sectionId);
          }
        }
      });
    }, options);

    // Observe all sections
    if (generalRef.current) observer.observe(generalRef.current);
    if (registrationRef.current) observer.observe(registrationRef.current);
    if (hackathonRef.current) observer.observe(hackathonRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Grid Background - Fixed */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(50,50,50,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(50,50,50,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '180px 180px'
        }}
      />

      {/* Fixed Header with Grid Background */}
      <div 
        className="fixed top-0 left-0 right-0 z-20 px-6 md:px-28 py-12"
        style={{
          backgroundColor: '#0a0a0a',
          backgroundImage: `
            linear-gradient(to right, rgba(50,50,50,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(50,50,50,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '180px 180px'
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-white text-[100px] font-semibold mb-6 md:mb-0 tracking-tight">
            FAQs
          </h1>
          
          {/* Tabs */}
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-2.5 rounded-full text-[18px] font-medium transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-white/50 hover:border-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div 
        ref={scrollContainerRef}
        className="relative z-10 px-6 md:px-28 pt-48 pb-12"
      >
        {/* FAQ Sections - All visible, scroll triggers tab change */}
        <div className="space-y-16">
          {/* General Section */}
          <div ref={generalRef} data-section="general" className="scroll-mt-40">
            <h2 className="text-white text-[32px] font-medium mb-6">General</h2>
            <div className="space-y-4">
              {faqData.general.map((faq, index) => (
                <FAQCard key={index} {...faq} />
              ))}
            </div>
          </div>

          {/* Registration Section */}
          <div ref={registrationRef} data-section="registration" className="scroll-mt-40">
            <h2 className="text-white text-[32px] font-medium mb-6">Registration</h2>
            <div className="space-y-4">
              {faqData.registration.map((faq, index) => (
                <FAQCard key={index} {...faq} />
              ))}
            </div>
          </div>

          {/* Hackathon Section */}
          <div ref={hackathonRef} data-section="hackathon" className="scroll-mt-40">
            <h2 className="text-white text-[32px] font-medium mb-6">Hackathon</h2>
            <div className="space-y-4">
              {faqData.hackathon.map((faq, index) => (
                <FAQCard key={index} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
