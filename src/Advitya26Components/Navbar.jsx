import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Gamepad2, Users, Store, Info, HelpCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { href: '/', label: 'Home', icon: Home, underlineColor: '#3b82f6' },
  { href: '/games', label: 'Games', icon: Gamepad2, underlineColor: '#000000' },
  { href: '/community', label: 'Community', icon: Users, underlineColor: '#eab308' },
  { href: '/store', label: 'Store', icon: Store, underlineColor: '#22c55e' },
  { href: '/about', label: 'About', icon: Info, underlineColor: '#ef4444' },
  { href: '/advitya/faqs', label: 'FAQs', icon: HelpCircle, underlineColor: '#8b5cf6' },
];

export function GlobalNavbar({ showLogo = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logoOpacity, setLogoOpacity] = useState(showLogo ? 1 : 0);

  // Fade in logo opacity when showLogo changes
  useEffect(() => {
    if (showLogo) {
      // Fade in the logo
      const startTime = performance.now();
      const duration = 1500; // Match OlympicRings fade duration (1.5s)

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease in-out
        const eased = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        setLogoOpacity(eased);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [showLogo]);

  useEffect(() => {
    const img = new Image();
    img.src = '/Olympics-Logo.avif';
    if (img.decode) img.decode().catch(() => {});

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleLogoKeyDown = (e) => {
    if (!isMobile) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((v) => !v);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6 lg:h-20 font-montserrat flex justify-end"
    >
      <div
        className="flex flex-row-reverse items-center gap-4"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        {/* Logo */}
        <motion.div
          className="w-17 h-17 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer flex items-center justify-center"
          whileHover={{ scale: 1.25, rotate: 360 }}
          transition={{ duration: 0.3, ease: 'linear',}}
          onClick={handleToggle}
          onKeyDown={handleLogoKeyDown}
          role={isMobile ? 'button' : undefined}
          tabIndex={isMobile ? 0 : undefined}
          aria-label={isMobile ? (isOpen ? 'Close menu' : 'Open menu') : 'Logo'}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(232, 239, 211, 0.6)) drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))',
            transformOrigin: 'center',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            opacity: logoOpacity,
            transition: 'opacity 0.1s ease-out',
          }}
        >
          <img
            src="/Olympics-Logo.avif"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Desktop Menu */}
        <AnimatePresence>
          {isOpen && !isMobile && (
            <motion.nav
              role="navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-none lg:rounded-full absolute left-0 right-0 top-full z-50 lg:static overflow-hidden"
              style={{
                background: '#f7f6e4',
                backgroundColor: '#faf8e0',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                boxShadow: '0 0 15px rgba(21, 21, 21, 0.6), 0 0 30px rgba(32, 18, 18, 0.4), 0 0 45px rgb(23, 19, 21)',
              }}
            >
              <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-2 px-0 lg:px-4 py-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.li key={link.href} whileHover={{ y: -2 }} className="w-full lg:w-auto">
                      <Link
                        to={link.href}
                        className="relative flex items-center gap-2 px-3 py-2 rounded-full hover:bg-black/10 transition-colors text-black text-sm group"
                      >
                        <Icon size={16} />
                        <span>{link.label}</span>
                        <span
                          className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"
                          style={{ backgroundColor: link.underlineColor }}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.nav
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 right-4 rounded-2xl z-999"
              style={{
                background: '#faf8e0',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                boxShadow: '0 0 15px rgba(21, 21, 21, 0.6), 0 0 30px rgba(32, 18, 18, 0.4)',
                border: 'none',
              }}
            >
              <ul className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.li key={link.href} whileTap={{ scale: 0.95 }}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="relative flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-black/10 transition-colors text-black text-base"
                      >
                        <Icon size={20} />
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default GlobalNavbar;
