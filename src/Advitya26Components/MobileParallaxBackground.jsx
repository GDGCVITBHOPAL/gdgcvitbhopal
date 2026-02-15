import { useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import OlympicRings from './OlympicRings'
import GoogleOlympicsHeading from './GoogleOlympicsHeading'
import AdvityaCountdown from './AdvityaCountdown'

const MobileParallaxBackground = ({ onRingsFadeStart = () => {} }) => {
    const [showHeading, setShowHeading] = useState(false);
    const [showCountdown, setShowCountdown] = useState(true);
    const [enableParallax, setEnableParallax] = useState(false);
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 50,
        mass: 1,
    });

    const colosseum = useTransform(x, [0, 0.1], [0, 100]);
    const greatwall = useTransform(x, [0, 0.1], [0, 80]);

    const blur = useTransform(scrollYProgress, (progress) =>
        progress >= 0.06 ? 'blur(8px)' : 'blur(0px)'
    );

    return (
        <>
            {showCountdown && (
                <AdvityaCountdown 
                    displayDuration={4000}
                    onComplete={() => {
                        setShowCountdown(false);
                        setTimeout(() => setEnableParallax(true), 100);
                    }}
                />
            )}

            <div className='sticky top-0 h-screen w-full z-0 border-none'>
                <motion.div
                    className='relative h-screen overflow-hidden bg-[#fdfbd4] border-none'
                    style={{
                        transformOrigin: 'center center',
                        filter: blur,
                    }}
                >
                    {/* Olympic Rings - Optimized for Mobile */}
                    {enableParallax && (
                        <OlympicRings
                            responsive={true}
                            className="absolute inset-0 z-[100]"
                            ringSize={30}
                            strokeWidth={5}
                            assembleY={0.5}
                            finalY={0.15}
                            startFromBelow={true}
                            onFadeStart={() => {
                                onRingsFadeStart();
                                // Delay showing heading until rings are mostly faded (0.5s after fade starts)
                                setTimeout(() => setShowHeading(true), 500);
                            }}
                        />
                    )}

                    {/*Google Olympics Heading - appears after rings fade`*/}
                    {enableParallax && (
                        <div className="absolute inset-0 z-[101] flex items-start justify-center pt-[11vh] px-4">
                            <GoogleOlympicsHeading show={showHeading} />
                        </div>
                    )}

                    {/* Great Wall - Mobile Optimized */}
                    {enableParallax && (
                        <motion.div
                            style={{ y: greatwall }}
                            initial={{ y: 700 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
                            className='absolute w-full h-auto z-0 bottom-0'
                        >
                            <motion.img
                                src="/greatwall-mobile.avif"
                                alt="great wall"
                                className="absolute bottom-20 left-1/2 -translate-x-1/2 h-[80vh] sm:h-[50vh] z-0 object-cover"
                            />
                        </motion.div>
                    )}

                    {/* Colosseum - Mobile Optimized */}
                    {enableParallax && (
                        <motion.div
                            style={{ y: colosseum }}
                            initial={{ y: 300 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.5, delay: 2.3, ease: "easeInOut" }}
                            className='absolute w-full h-auto z-80 bottom-0 border-amber-950'
                        >
                            <motion.img
                                src="/olympicsImages/Colosseum.avif"
                                alt="Colosseum"
                                className='absolute -bottom-60 w-[100vw] h-[100vh] z-80 object-contain'
                            />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </>
    )
}

export default MobileParallaxBackground