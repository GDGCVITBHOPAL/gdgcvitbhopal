import FallingImagesBackground from './FallingImagesBackground';

export default function AdvityaFooter() {
  const stickers = [
    "/stickers/01_alien 1.png",
    "/stickers/02_chip 1.png",
    "/stickers/03_cloud 1.png",
    "/stickers/04_gear 1.png",
    "/stickers/06_ai (1) 1.png",
    "/stickers/07_arrow 1.png",
    "/stickers/08_data 1.png",
    "/stickers/09_ml 1.png",
    "/stickers/10_play 1.png",
  ];

  return (
    <FallingImagesBackground
      images={stickers}
      trigger="auto"
      backgroundColor="#1f1f1f"
      gravity={0.5}
      imageWidth={120}
      imageHeight={120}
      bounce={0.7}
      rotation={true}
      hoverForce={10}
    >
      <footer className="relative w-full min-h-screen text-white flex flex-col justify-between py-8 md:py-16 px-6 md:px-16">
        {/* Main Content - Top Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex items-start pt-6 md:pt-12 pointer-events-auto">
          <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-12">
            {/* Left Side - CTA */}
            <div className="flex-1 max-w-3xl">
              <h2 
                className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-none tracking-tight text-white"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                WANNA BUILD<br />
                SOMETHING<br />
                COOL?
              </h2>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-lg md:text-xl hover:text-blue-400 transition-colors font-medium"
              >
                Let's talk tech →
              </a>
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex-1 flex flex-col items-start md:items-end">
              {/* Dragon Icon */}
              <div className="mb-4">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="60" height="60" fill="#6B7FFF" rx="8"/>
                  <circle cx="40" cy="45" r="5" fill="white"/>
                  <circle cx="60" cy="45" r="5" fill="white"/>
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">CONTACT US</h3>
              
              {/* Contact Email */}
              <div className="mb-4 text-left md:text-right">
                <p className="text-xl md:text-2xl font-semibold mb-1">gdsc@vitbhopal.ac.in</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-start md:justify-end gap-4">
                <a 
                  href="https://www.instagram.com/gdgcvitbhopal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/gdgcvitbhopal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/gdgcvitbhopal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FallingImagesBackground>
  );
}
