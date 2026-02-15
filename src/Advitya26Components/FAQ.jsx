import { useState } from 'react';

// FAQ data
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
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin md:w-[70px] md:h-[70px]"
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
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin md:w-[70px] md:h-[70px]"
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
      width="50"
      height="50"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin md:w-[70px] md:h-[70px]"
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
  <div className="border border-black/100 rounded-lg p-7 md:p-6 flex items-center gap-8 md:gap-8 bg-black/10 md:bg-black/5 transition-colors w-full max-w-10xl" style={{ fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif" }}>
    <div className="flex-shrink-0">
      <AsteriskIcon color={iconColor} />
    </div>
    <div>
      <h3 className="text-black font-extrabold text-xl md:text-xl mb-3 md:mb-2">{question}</h3>
      <p className="text-black/90 text-base md:text-base font-extrabold">{answer}</p>
    </div>
  </div>
);

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'GENERAL' },
    { id: 'registration', label: 'REGISTRATION' },
    { id: 'hackathon', label: 'HACKATHON' }
  ];

  // Handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div
      className="w-screen min-h-screen relative flex flex-col isolate"
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: "url('/FAQ_BG.avif')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blurred, dark-lighted overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'rgba(240, 219, 114, 0.45)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
        }}
      />

      {/* Header - standard relative positioning */}
      <div
        className="relative z-20 px-4 md:px-28 py-4 md:py-12 shrink-0"
        style={{
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-black text-[40px] md:text-[100px] font-extrabold mb-0 md:mb-0 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            FAQs
          </h1>

          {/* Tabs */}
          <div className="flex gap-1.5 md:gap-3 flex-nowrap overflow-x-auto md:flex-wrap justify-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-3 md:px-6 py-1.5 md:py-2.5 rounded-full text-xs md:text-[18px] font-medium transition-all duration-300 border whitespace-nowrap ${activeTab === tab.id
                  ? 'bg-white text-black border-white'
                    : 'bg-transparent text-black border-black/50 hover:border-black'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-28 pt-2 pb-2 md:pb-4">
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-black text-lg md:text-2xl font-extrabold mt-1 mb-3 md:mb-4 uppercase">
            {activeTab}
          </h2>
          <div className="space-y-2 md:space-y-4 text-black">
            {faqData[activeTab].map((faq, index) => (
              <FAQCard key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

