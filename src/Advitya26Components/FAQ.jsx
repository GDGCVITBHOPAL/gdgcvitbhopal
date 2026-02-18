import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/shadcn/ui/accordion';
import { cn } from '@/shadcn/lib/utils';

// FAQ data
const faqData = {
  general: [
    {
      question: "What is Google Olympics?",
      answer: "Google Olympics is a fun and competitive event organized by Google Developer Groups (GDG) at VIT Bhopal. It includes 10 different games that test teamwork, memory, creativity, physical coordination, and coding skills.",
    },
    {
      question: "Who will win the Google Olympics?",
      answer: "The team with the highest total points after all 10 games will be declared the winner.",
    },
    {
      question: "What kind of skills are required?",
      answer: "Logical thinking, Team coordination, Quick decision-making, Creativity, Basic technical understanding, and Physical coordination.",
    }
  ],
  registration: [
    {
      question: "How can participants register?",
      answer: (
        <span>
          Participants can register through GDG website or go through the{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8HHryzN-7d3mNEyGg_iyoKqA2k4-TPHSzbqH4oxgG1j7HjQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8ab4f8] underline"
          >
            Google Olympics 2.0 Registration Form
          </a>.
        </span>
      ),
    },
    {
      question: "How early should teams report to the venue?",
      answer: "Teams are advised to report at least 10–15 minutes before 10:00 AM for smooth coordination.",
    },
    {
      question: "Do participants need to bring anything?",
      answer: "Yes — a laptop (one per team), basic essentials like water, and a College ID card.",
    }
  ],
  about: [
    {
      question: "When and where will the event take place?",
      answer: "The event will be held on 27th February from 10:00 AM to 2:00 PM at AB2 – Auditorium 1, VIT Bhopal.",
    },
    {
      question: "What types of games are included?",
      answer: "The event comprises games which challenge a team to think logically, behave rationally and test physical as well as mental strength.",
    },
    {
      question: "Is there any elimination round?",
      answer: "No. There are no eliminations. All teams will play all 10 games.",
    },
    {
      question: "How will the scores get calculated?",
      answer: "Points will be awarded after every game based on performance.",
    }
  ]
};

const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];

const tabs = [
  { id: 'general', label: 'General' },
  { id: 'registration', label: 'Registration' },
  { id: 'about', label: 'About' },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('general');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="w-screen h-[calc(100vh-1rem)] overflow-hidden relative flex flex-col bg-[rgba(10,10,15,0.85)] font-[Inter,Poppins,sans-serif]">
      {/* Google accent bar */}
      <div className="flex h-[3px] shrink-0">
        {GOOGLE_COLORS.map((c, i) => (
          <div key={i} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      {/* Ambient blurs */}
      <div className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none blur-[60px] bg-[radial-gradient(circle,rgba(66,133,244,0.12)_0%,transparent_70%)]" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full pointer-events-none blur-[60px] bg-[radial-gradient(circle,rgba(52,168,83,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full pointer-events-none blur-[80px] bg-[radial-gradient(circle,rgba(251,188,4,0.06)_0%,transparent_70%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col relative z-10 p-[clamp(20px,4vh,48px)_clamp(16px,5vw,80px)] overflow-hidden">
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-4 shrink-0 mb-[clamp(16px,3vh,32px)]">
          <div>
            <span className="inline-block text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#4285F4] mb-1.5">
              Have Questions?
            </span>
            <h1 className="font-[Syne,sans-serif] text-[clamp(2.2rem,6vw,4.5rem)] font-black tracking-tighter leading-none text-white m-0">
              FAQs
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-[14px] bg-white/5 border border-white/[0.08]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  'px-5 py-2 rounded-[10px] text-[clamp(0.7rem,1.2vw,0.8rem)] font-semibold tracking-wider uppercase border-none cursor-pointer transition-all duration-300 font-[Inter,sans-serif]',
                  activeTab === tab.id
                    ? 'text-white shadow-[0_4px_20px_rgba(66,133,244,0.3)]'
                    : 'bg-transparent text-white/45'
                )}
                style={
                  activeTab === tab.id
                    ? { background: 'linear-gradient(135deg, #4285F4, #34A853)' }
                    : undefined
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Subtle divider */}
        <div className="h-px shrink-0 mb-[clamp(16px,3vh,28px)] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Scrollable FAQ list using shadcn Accordion */}
        <div className="flex-1 overflow-y-auto pr-2 w-full faq-scroll">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="flex flex-col gap-2.5"
          >
            {(faqData[activeTab] || []).map((faq, index) => {
              const accentColor = GOOGLE_COLORS[index % 4];
              return (
                <AccordionItem
                  key={`${activeTab}-${index}`}
                  value={`item-${index}`}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] data-[state=open]:bg-white/[0.08] data-[state=open]:border-white/[0.12] transition-all duration-350 overflow-hidden"
                >
                  <AccordionTrigger
                    className="w-full flex items-center gap-3.5 px-5 py-4.5 text-white font-semibold leading-snug tracking-tight font-[Syne,Inter,sans-serif] text-[clamp(0.9rem,1.8vw,1.1rem)] hover:no-underline"
                  >
                    <span className="flex items-center gap-3.5 flex-1 text-left">
                      {/* Accent dot */}
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{
                          background: accentColor,
                          boxShadow: `0 0 10px ${accentColor}55`,
                        }}
                      />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4.5 pl-[42px] text-white/65 font-[Inter,sans-serif] text-[clamp(0.82rem,1.4vw,0.95rem)] leading-relaxed">
                    {typeof faq.answer === 'string' ? (
                      <p className="m-0">{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Bottom info line */}
        <div className="shrink-0 mt-[clamp(12px,2vh,20px)] flex items-center gap-2 text-white/25 text-[0.72rem] font-medium tracking-wider">
          <span className="flex gap-[3px]">
            {GOOGLE_COLORS.map((c, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full opacity-60"
                style={{ background: c }}
              />
            ))}
          </span>
          Google Developer Groups — VIT Bhopal
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .faq-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .faq-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .faq-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .faq-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
}
