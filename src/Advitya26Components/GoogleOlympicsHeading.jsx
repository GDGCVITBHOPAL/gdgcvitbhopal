import { motion } from 'motion/react';

// Olympic color pattern: Blue, Yellow, Black, Green, Red (repeating)
const OLYMPIC_COLORS = ['#0085C7', '#F4C300', '#000000', '#009F3D', '#DF0024'];


const GoogleOlympicsHeading = ({ show = false, className = '' }) => {
    // Split into separate words for responsive layout
    const words = ['Google', 'Olympics'];

    const getLetterColor = (index) => {
        return OLYMPIC_COLORS[index % OLYMPIC_COLORS.length];
    };

    // Container variants for animation with smoother spring physics
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    // Individual letter variants with spring animation for smoother motion
    const letterVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 30,
            rotateX: -45,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.8,
            },
        },
    };

    // Shared text style with smooth CSS transitions for viewport changes
    const baseTextStyle = {
        fontFamily: 'Grenze Gotisch, Syne, cursive',
        letterSpacing: '0.01em',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
        lineHeight: 1.1,
        fontWeight: 800,
        transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1), letter-spacing 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    // Helper to render a word with colored letters
    const renderWord = (word, startIndex) => {
        return word.split('').map((letter, letterIndex) => {
            const colorIndex = startIndex + letterIndex;
            return (
                <motion.span
                    key={`${word}-${letterIndex}`}
                    variants={letterVariants}
                    className="inline-block"
                    style={{
                        ...baseTextStyle,
                        fontSize: 'clamp(2.5rem, 12vw, 5.5rem)',
                        color: getLetterColor(colorIndex),
                    }}
                >
                    {letter}
                </motion.span>
            );
        });
    };

    return (
        <motion.div
            className={`flex flex-col items-center select-none pointer-events-none ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            style={{ perspective: '1000px' }}
        >
            {/* Words container: stacked on mobile, inline on desktop */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center px-2 sm:px-4 md:px-0">
                {/* Google */}
                <div className="flex justify-center">
                    {renderWord(words[0], 0)}
                </div>

                {/* Space between words - only visible on desktop */}
                <span
                    className="hidden md:inline-block"
                    style={{
                        width: 'clamp(0.5rem, 2vw, 2rem)',
                        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    aria-hidden="true"
                />

                {/* Olympics */}
                <div className="flex justify-center">
                    {renderWord(words[1], words[0].length + 1)}
                </div>
            </div>
            {/* Second line: 2.0 */}
            <div className="w-full flex justify-center mt-1 sm:mt-2 px-2 sm:px-4 md:px-0">
                <motion.span
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                    transition={{
                        type: 'spring',
                        stiffness: 120,
                        damping: 18,
                        delay: 0.3,
                    }}
                    className="inline-block"
                    style={{
                        ...baseTextStyle,
                        fontSize: 'clamp(1.5rem, 8vw, 6rem)',
                        color: '#030c0f',
                        fontWeight: 900,
                        fontFamily: 'Pirata One, Grenze Gotisch, Syne, cursive',
                    }}
                >
                    2.0
                </motion.span>
            </div>
        </motion.div>
    );
};

export default GoogleOlympicsHeading;
