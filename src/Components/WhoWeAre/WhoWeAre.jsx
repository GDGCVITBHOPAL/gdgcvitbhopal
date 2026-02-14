import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shadcn/ui/button.jsx";
import { ExternalLink } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="h-screen w-full bg-white overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col h-full max-h-225">

        {/* ── Title Row with Fancy Elements (Compact) ── */}
        <div className="flex shrink-0 items-center justify-center gap-3 sm:gap-4 mb-4 lg:mb-6">
          {/* Yellow Diagonal Bars */}
          <div className="flex gap-0.5">
            <div className="w-4 h-10 sm:w-5 sm:h-12 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
            <div className="w-4 h-10 sm:w-5 sm:h-12 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black">Who We Are</h2>

          {/* Three Overlapping Yellow Circles */}
          <div className="flex items-center -space-x-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#FBBC04] border border-[#555]"></div>
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#FBBC04] border border-[#555]"></div>
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#FBBC04] border border-[#555]"></div>
          </div>

          {/* Arrow */}
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* ── Horizontal Content: Text Left + Photos Right (Fills remaining height) ── */}
        <div className="flex flex-col lg:flex-row w-full flex-1 min-h-0 gap-4 lg:gap-8 items-stretch">

          {/* Left: Description Card — neobrutalist hover: shadow collapses + translates */}
          <div className="lg:w-[35%] xl:w-[30%] shrink-0 flex flex-col rounded-2xl border-2 border-black bg-white p-5 sm:p-6 lg:p-8 shadow-[4px_4px_0_0_#111] overflow-y-auto">
            {/* Google-color accent bar */}
            <div className="flex gap-1 mb-4 shrink-0">
              <div className="h-1.5 w-8 rounded-full bg-[#4285F4]"></div>
              <div className="h-1.5 w-8 rounded-full bg-[#EA4335]"></div>
              <div className="h-1.5 w-8 rounded-full bg-[#FBBC04]"></div>
              <div className="h-1.5 w-8 rounded-full bg-[#34A853]"></div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700 font-medium">
                We are a vibrant community of passionate developers, designers, and tech enthusiasts
                at VIT Bhopal University.
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-500">
                United by our love for Google technologies and innovation, we create, learn,
                and grow together through workshops, hackathons, and collaborative projects
                that make a real impact.
              </p>
            </div>

            {/* Button: "Join Us"-style from navbar, keeping green gradient */}
            <div className="mt-6 shrink-0">
              <Button className="rounded-full bg-linear-to-r from-emerald-300 to-green-400 text-black hover:from-emerald-400 hover:to-green-500">
                <ExternalLink className="mr-1" />
                <Link to="/about" className="inline text-sm font-semibold">
                  Learn More 🚀
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Photo Grid (Flexible height) */}
          <div className="flex-1 flex flex-col gap-3 lg:gap-4 min-h-0">
            {/* Top row: Main wide team photo - Flex 3 to take more space */}
            <div className="flex-3 min-h-0 rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0_0_#111] transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <img
                src="/gdgc-team-formal copy.jpg"
                alt="GDG on Campus team"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom row: two photos side by side - Flex 2 */}
            <div className="flex-2 min-h-0 grid grid-cols-2 gap-3 lg:gap-4">
              <div className="rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0_0_#111] transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <img
                  src="/gdgc-team-selfie.jpg"
                  alt="Team selfie"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0_0_#111] transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <img
                  src="/gdgc-team-casual.jpg"
                  alt="Team casual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
