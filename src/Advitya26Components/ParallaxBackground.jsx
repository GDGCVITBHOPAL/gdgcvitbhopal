import { useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import OlympicRings from './OlympicRings'
import GoogleOlympicsHeading from './GoogleOlympicsHeading'
import { Link } from 'react-router-dom'
import { Button } from '@/shadcn/ui/button.jsx'
import { ExternalLink } from 'lucide-react'

const ParallaxBackground = ({ onRingsFadeStart = () => { } }) => {
    const [showHeading, setShowHeading] = useState(false);
    const [enableParallax, setEnableParallax] = useState(true);
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, { stiffness: 100, damping: 50, mass: 1 });
    const bridge = useTransform(x, [0, 0.5], [0, 500]);
    const pisa = useTransform(x, [0, 0.5], [0, -300]);
    const gate = useTransform(x, [0, 0.5], [0, -200]);
    const colosseum = useTransform(x, [0, 0.5], [0, 300]);
    const greatwall = useTransform(x, [0, 0.5], [0, 250]);

    const blurValue = useTransform(scrollYProgress, [0.15, 0.5], [0, 12]);
    const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

    return (
        <>

            <div className='sticky top-0 h-screen w-full z-0'>
                <motion.div
                    className='relative h-screen overflow-y-hidden bg-[#fdfbd4] overflow-x-hidden'
                    style={{
                        transformOrigin: 'center center',
                        filter: blur,
                    }}
                >
                    {/* Olympic Rings */}
                    {enableParallax && (
                        <OlympicRings
                            responsive={true}
                            className="absolute inset-0 z-[100] pointer-events-none"
                            ringSize={50}
                            strokeWidth={8}
                            assembleY={0.5}
                            finalY={0.15}
                            startFromBelow={true}
                            onFadeStart={() => {
                                onRingsFadeStart();
                                setTimeout(() => setShowHeading(true), 500);
                            }}
                        />
                    )}

                    {/* Google Olympics Heading */}
                    {enableParallax && (
                        <div className="absolute inset-0 z-[101] flex items-start justify-center pt-[8vh] pointer-events-none">
                            <GoogleOlympicsHeading show={showHeading} />
                        </div>
                    )}

                    {/* Register Button */}
                    {enableParallax && showHeading && (
                        <motion.div
                            className="absolute inset-0 z-[102] flex justify-center items-end pb-[38vh] pointer-events-none"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <Button className="rounded-full bg-gradient-to-r from-[#DF0024] via-[#FF4518] to-[#F4C300] text-white pointer-events-auto cursor-pointer">
                                <ExternalLink color="white" />
                                <Link to="https://forms.gle/geUHuLxd2PenFN4s8" target="_blank" className="inline text-sm">
                                    Register Now 🎯
                                </Link>
                            </Button>
                        </motion.div>
                    )}

                    {/* Golden Bridge */}
                    {enableParallax && (
                        <motion.div
                            style={{ x: bridge }}
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
                            className='absolute top-0 left-0 w-full h-full z-60'
                        >
                            <motion.img
                                src="/olympicsImages/golden-bridge.avif"
                                alt="Golden Bridge"
                                className='absolute -right-37.5 -bottom-37.5 scale-x-[-1] h-[90vh] w-[90vw] z-60'
                            />
                        </motion.div>
                    )}

                    {/* Pisa Tower */}
                    {enableParallax && (
                        <motion.div
                            style={{ x: pisa }}
                            className='absolute w-full left-0 h-[90vh] z-70 bottom-0'
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                        >
                            <motion.img
                                src="/olympicsImages/pisa.avif"
                                alt="pisa"
                                className='absolute bottom-0 h-[80vh] left-180px scale-x-[-1] z-70'
                            />
                        </motion.div>
                    )}

                    {/* Torri Gate */}
                    {enableParallax && (
                        <motion.div
                            style={{ x: gate }}
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.95, ease: "easeInOut", delay: 0.15 }}
                            className='absolute top-0 left-10 w-full h-[90vh] z-80'
                        >
                            <motion.img
                                src="/olympicsImages/torriigate.avif"
                                alt="Torri Gate"
                                className='absolute -bottom-30 -left-15 h-[60vh] z-80'
                            />
                        </motion.div>
                    )}

                    {/* Great Wall */}
                    {enableParallax && (
                        <motion.div
                            style={{ y: greatwall }}
                            initial={{ y: 400, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
                            className='absolute w-full h-[90vh] z-0 bottom-0'
                        >
                            <motion.img
                                src="/olympicsImages/greatwall-final.avif"
                                alt="great wall"
                                className="absolute bottom-0 z-0"
                            />
                        </motion.div>
                    )}

                    {/* Colosseum */}
                    {enableParallax && (
                        <motion.div
                            style={{ y: colosseum }}
                            initial={{ y: 300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2.5, ease: "easeIn" }}
                            className='absolute w-full h-[90vh] z-80 bottom-0'
                        >
                            <motion.img
                                src="/olympicsImages/Colosseum.avif"
                                alt="Colosseum"
                                className='absolute -bottom-30 right-87.5 h-[70vh] z-90'
                            />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </>
    )
}

export default ParallaxBackground