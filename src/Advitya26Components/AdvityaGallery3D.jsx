import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// High-quality Unsplash placeholder images
const galleryImages = [
  {
    src: 'gdgc-team-formal.jpg',
    alt: 'Tech Conference',
    accentColor: 'lime',
  },
  {
    src: 'gdgc-team-formal.jpg',
    alt: 'Hackathon Event',
    accentColor: 'cyan',
  },
  {
    src: 'gdgc-team-formal.jpg',
    alt: 'Team Collaboration',
    accentColor: 'purple',
  },
  {
    src: 'gdgc-team-formal.jpg',    
    alt: 'Workshop Session',
    accentColor: 'lime',
  },
  {
    src: 'gdgc-team-formal.jpg',
    alt: 'Coding Session',
    accentColor: 'cyan',
  },
  {
    src: 'gdgc-team-formal.jpg',
    alt: 'Speaker Presentation',
    accentColor: 'purple',
  },
];

// Accent color mapping for glow effects
const accentColors = {
  lime: {
    border: 'hover:border-lime-400',
    shadow: 'hover:shadow-lime-400/50',
    glow: '0 0 30px rgba(163, 230, 53, 0.6)',
  },
  cyan: {
    border: 'hover:border-cyan-400',
    shadow: 'hover:shadow-cyan-400/50',
    glow: '0 0 30px rgba(34, 211, 238, 0.6)',
  },
  purple: {
    border: 'hover:border-purple-400',
    shadow: 'hover:shadow-purple-400/50',
    glow: '0 0 30px rgba(192, 132, 252, 0.6)',
  },
};

// Gallery Card Component with 3D tilt effect
const GalleryCard = ({ image, scrollProgress }) => {
  // 3D skew/tilt effect - cards tilt as they move
  const rotateY = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [15, 0, -15]
  );
  
  const rotateX = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [-5, 0, 5]
  );
  
  // Scale effect for depth
  const scale = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [0.9, 1, 0.9]
  );

  const accent = accentColors[image.accentColor];

  return (
    <motion.div
      style={{
        rotateY,
        rotateX,
        scale,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className={`
        relative flex-shrink-0 w-[280px] h-[200px] 
        sm:w-[320px] sm:h-[220px] 
        md:w-[400px] md:h-[280px] 
        lg:w-[500px] lg:h-[350px]
        rounded-lg overflow-hidden
        border border-white/30
        ${accent.border}
        transition-all duration-300 ease-out
        cursor-pointer
        group
      `}
      whileHover={{
        scale: 1.05,
        boxShadow: accent.glow,
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[1px] z-10 pointer-events-none" />
      
      {/* Image */}
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none" />
      
      {/* Caption */}
      <div className="absolute bottom-4 left-4 right-4 z-30">
        <p className="text-white text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          {image.alt}
        </p>
      </div>
    </motion.div>
  );
};

export default function AdvityaGallery3D() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const xDesktop = useTransform(scrollYProgress, [0, 1], ['5%', '-75%']);
  const xMobile = useTransform(scrollYProgress, [0, 1], ['2%', '-85%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0a0a0a]"
      style={{
        height: '300vh', // Tall container for scroll distance
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(50,50,50,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(50,50,50,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '180px 180px',
        }}
      />

      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Header*/}
        <div className="relative z-20 px-6 md:px-28 pt-8 pb-4 md:pt-12 md:pb-6">
          <h1 className="text-white text-[60px] md:text-[100px] font-semibold tracking-tight">
            GALLERY
          </h1>
          <h2 className="text-white text-[24px] md:text-[32px] font-medium uppercase mt-2 opacity-80">
            Event Highlights
          </h2>
        </div>

        {/* Horizontal scrolling gallery */}
        <div className="relative z-10 flex-1 flex items-center overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8 lg:gap-10 px-6 md:px-28"
            style={{
              x: isMobile ? xMobile : xDesktop,
            }}
          >
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={index}
                image={image}
                scrollProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-20 px-6 md:px-28 pb-8 flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400"
              style={{
                scaleX: scrollYProgress,
                transformOrigin: 'left',
              }}
            />
          </div>
          <span className="text-white/60 text-sm font-medium">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}

