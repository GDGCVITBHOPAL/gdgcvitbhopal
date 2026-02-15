
export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Desktop View */}
      <div className="hidden md:block px-8 lg:px-16 py-12">
        {/* Title Section */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            {/* Yellow Diagonal Bars */}
            <div className="flex gap-0.5">
              <div className="w-6 h-16 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
              <div className="w-6 h-16 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
            </div>
            
            {/* About Us Text */}
            <h1 className="text-4xl font-bold tracking-wide">About Us</h1>
            
            {/* Three Overlapping Yellow Circles */}
            <div className="flex items-center -space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#FBBC04] border border-[#555]"></div>
              <div className="w-10 h-10 rounded-full bg-[#FBBC04] border border-[#555]"></div>
              <div className="w-10 h-10 rounded-full bg-[#FBBC04] border border-[#555]"></div>
            </div>
            
            {/* Arrow */}
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Intro Paragraph */}
        <p className="text-gray-800 text-sm leading-relaxed mb-6">
          Google Developer Group on Campus are university-based community groups for students interested in Google developer
          technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are
          welcome. By joining a GDGC, students grow their knowledge in a peer-to-peer learning environment and build solutions
          for local businesses and their communities.
        </p>

        {/* Two Column Layout */}
   <div className="flex gap-6 items-start">
  {/* Left: College Collage Image */}
  <div className="w-1/2 max-w-xl">
    <img 
      src="/College.png" 
      alt="GDG Events Collage" 
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>
  {/* Right: Key Opportunities */}
  <div className="w-1/2 max-w-xl">
    <h2 className="text-lg font-bold mb-4">Key Opportunities Provided by GDGCs</h2>
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p>
        <span className="font-bold">&gt; Peer-Led Technical Growth:</span> Students advance their technical
        knowledge of Google technologies and industry tools through hands-on, peer-to-peer workshops and collaborative events.
      </p>
      <p>
        <span className="font-bold">&gt; Real-World Problem:</span> Members build professional portfolios by
        developing technology-based solutions for local organizations, turning theoretical knowledge into practical industry
        experience.
      </p>
      <p>
        <span className="font-bold">&gt; Global Visibility and Inspiration:</span> The community provides a
        platform to showcase prototypes to industry leaders while connecting students with success stories that inspire them to
        become world-class change makers.
      </p>
    </div>
  </div>
</div>
      </div>



      {/* Mobile View */}
      <div className="md:hidden px-4 py-6">
        {/* GDG VIT Badge */}
        <div className="border border-gray-300 rounded-lg p-2 mb-4 inline-flex items-center gap-2">
          <div className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
            <span className="w-2 h-2 rounded-full bg-[#FBBC04]"></span>
            <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
            <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
          </div>
          <span className="text-sm font-medium">GDG VIT</span>
        </div>

        {/* Title Section */}
        <div className="flex items-center gap-3 mb-4">
          {/* Yellow Diagonal Bars */}
          <div className="flex gap-0.5">
            <div className="w-3 h-8 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
            <div className="w-3 h-8 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
          </div>
          
          {/* About Us Text */}
          <h1 className="text-xl font-bold">About Us</h1>
          
          {/* Three Overlapping Yellow Circles */}
          <div className="flex items-center -space-x-2">
            <div className="w-5 h-5 rounded-full bg-[#FBBC04] border border-[#555]"></div>
            <div className="w-5 h-5 rounded-full bg-[#FBBC04] border border-[#555]"></div>
            <div className="w-5 h-5 rounded-full bg-[#FBBC04] border border-[#555]"></div>
          </div>
          
          {/* Arrow */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-xs leading-relaxed mb-4">
          Google Developer Group on Campus are university-based community groups for students interested in Google developer
          technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are
          welcome.
        </p>

        {/* Key Opportunities */}
        <h2 className="text-sm font-bold mb-3">Key Opportunities Provided by GDGCs</h2>
        <div className="space-y-3 text-gray-700 text-xs leading-relaxed mb-6">
          <p>
            <span className="font-bold">&gt; Peer-Led Technical Growth:</span> Students advance their technical
            knowledge of Google technologies and industry tools through hands-on, peer-to-peer workshops and collaborative events.
          </p>
          <p>
            <span className="font-bold">&gt; Real-World Problem:</span> Members build professional portfolios by
            developing technology-based solutions for local organizations, turning theoretical knowledge into practical industry
            experience.
          </p>
          <p>
            <span className="font-bold">&gt; Global Visibility and Inspiration:</span> The community provides a
            platform to showcase prototypes to industry leaders while connecting students with success stories that inspire them to
            become world-class change makers.
          </p>
        </div>

        {/* College Image */}
        <div className="w-full">
          <img 
            src="/College.png" 
            alt="GDG Events Collage" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>


    </div>
  );
}