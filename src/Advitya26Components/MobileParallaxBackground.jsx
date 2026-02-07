import { useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import OlympicRings from './OlympicRings'
import GoogleOlympicsHeading from './GoogleOlympicsHeading'

const MobileParallaxBackground = ({ onRingsFadeStart = () => {} }) => {
    const [showHeading, setShowHeading] = useState(false);
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 50,
        mass: 1,
    });

    // Reduced parallax intensity for mobile - much subtler movements
    const colosseum = useTransform(x, [0, 0.1], [0, 100]);
    const greatwall = useTransform(x, [0, 0.1], [0, 80]);

    // Optimized blur effect for mobile
    const blurValue = useTransform(scrollYProgress, [0.15, 0.5], [0, 6]);
    const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

    return (
        <div className='sticky top-0 h-screen w-full z-0 border-none'>
            <motion.div
                className='relative h-screen overflow-hidden bg-[#fdfbd4] border-none'
                style={{
                    transformOrigin: 'center center',
                    filter: blur,
                }}
            >
                {/* Olympic Rings - Optimized for Mobile */}
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

                 {/*Google Olympics Heading - appears after rings fade`*/}
                <div className="absolute inset-0 z-[101] flex items-start justify-center pt-[11vh] px-4">
                    <GoogleOlympicsHeading show={showHeading} />
                </div>

                {/* Pisa Tower - Mobile Optimized */}
                {/* <motion.div
                    style={{ x: pisa }}
                    className='absolute w-full left-0 h-[70vh] z-70 bottom-0'
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <motion.img
                        src="/olympicsImages/pisa.png"
                        alt="pisa"
                        className='absolute bottom-[-10vh] h-[55vh] left-[-5vw] scale-x-[-1] z-70 object-contain'
                    />
                </motion.div> */}

                {/* Torri Gate - Mobile Optimized */}
                {/* <motion.div
                    style={{ x: gate }}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className='absolute top-0 left-[5vw] w-[85vw] h-[70vh] z-80'
                >
                    <motion.img
                        src="/olympicsImages/torriigate.png"
                        alt="Torri Gate"
                        className='absolute -bottom-[45vh] left-50 h-[50vh] z-80 object-contain'
                    />
                </motion.div> */}

                {/* Great Wall - Mobile Optimized */}
                <motion.div
                    style={{ y: greatwall }}
                    initial={{ y: 700 }}
                    animate={{ y: 0 }}
                    // transition={{ duration: 2.5, ease: "easeInOut" }}
                    transition={{ duration: 1.5,delay:2, ease: "easeInOut" }}
                    className='absolute w-full h-auto z-0 bottom-0'
                >
                    <motion.img
                        src="/greatwall-mobile.avif"
                        alt="great wall"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80vh] sm:h-[50vh] z-0 object-cover"
                    />

                </motion.div>

                {/* Colosseum - Mobile Optimized */}
                <motion.div
                    style={{ y: colosseum }}
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, delay:2.3, ease: "easeInOut" }}
                    className='absolute w-full h-auto z-80 bottom-0 border-amber-950'
                >
                    <motion.img
                        src="/olympicsImages/Colosseum.avif"
                        alt="Colosseum"
                        className='absolute -bottom-60 w-[100vw] h-[100vh] z-80 object-contain'
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default MobileParallaxBackground
