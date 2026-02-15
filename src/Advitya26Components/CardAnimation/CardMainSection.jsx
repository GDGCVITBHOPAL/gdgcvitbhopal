import {
    useRef,
    useEffect,
    useState,
    Children,
    cloneElement,
    isValidElement,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Size presets
const SIZE_CLASSES = {
    sm: "h-[60vh]",
    md: "h-[70vh]",
    lg: "h-[80vh]",
    xl: "h-[85vh]",
    "2xl": "h-[90vh]",
};

const SIZE_VALUES = {
    sm: 60,
    md: 70,
    lg: 80,
    xl: 85,
    "2xl": 90,
};

const DEFAULT_GAP_VW = 5;

// Utility functions
const getCardWidthVw = (cardSize) => SIZE_VALUES[cardSize] || SIZE_VALUES.lg;
const getInitialOffset = (cardWidthVw) => (100 - cardWidthVw) / 2;

// CardMainSection component using GSAP ScrollTrigger (Mobile)
export default function CardMainSection({
    children,
    bgColor = "transparent",
    cardSize = "lg",
    scaleLastCard = false,
    lastCardInitialScale = 0.15,
}) {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const lastCardInnerRef = useRef(null);
    const [contentOpacity, setContentOpacity] = useState(0);
    const childArray = Children.toArray(children);

    const cardWidthVw = getCardWidthVw(cardSize);
    const cardHeightVh = SIZE_VALUES[cardSize] || 80;
    const gapVw = DEFAULT_GAP_VW;
    const initialOffset = getInitialOffset(cardWidthVw);

    // Calculate full screen scale
    const getFullScreenScale = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const cardWidth = (cardWidthVw / 100) * viewportWidth;
        const cardHeight = (cardHeightVh / 100) * viewportHeight;
        const scaleForWidth = viewportWidth / cardWidth;
        const scaleForHeight = viewportHeight / cardHeight;
        return Math.max(scaleForWidth, scaleForHeight);
    };

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        const section = sectionRef.current;
        const lastCard = cardRefs.current[childArray.length - 1];
        const lastCardInner = lastCardInnerRef.current;

        if (!container || !track || !section) return;

        // Create context for cleanup
        const ctx = gsap.context(() => {
            // Get the last card's position to calculate scroll to center it
            const lastCardEl = cardRefs.current[childArray.length - 1];
            if (!lastCardEl) return;

            // Ensure all cards are at full scale for accurate measurement
            cardRefs.current.forEach((card) => {
                if (card) gsap.set(card, { scale: 1 });
            });

            // Force layout recalculation
            track.offsetHeight;

            // Use offsetLeft/offsetWidth instead of getBoundingClientRect
            // These are layout-based and don't depend on scroll position or timing
            const lastCardCenterInTrack =
                lastCardEl.offsetLeft + lastCardEl.offsetWidth / 2;

            // Scroll needed to bring last card center to viewport center
            const viewportCenter = window.innerWidth / 2;
            const scrollToCenter = lastCardCenterInTrack - viewportCenter;
            const scrollWidth = Math.max(0, scrollToCenter);

            const scaleDistance = scaleLastCard ? window.innerHeight * 1.5 : 0;
            // Extra scroll buffer so the animation finishes before the pin ends
            const scrollBuffer = scaleLastCard ? window.innerHeight * 0.6 : 0;
            const totalDistance = scrollWidth + scaleDistance + scrollBuffer;

            if (totalDistance <= 0) return;

            // NOW set initial states (after measurement)
            gsap.set(track, { x: 0 });
            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const isLast = index === childArray.length - 1;
                if (scaleLastCard && isLast) {
                    gsap.set(card, { scale: lastCardInitialScale });
                } else {
                    gsap.set(card, { scale: 1 });
                }
            });
            if (lastCardInner) {
                gsap.set(lastCardInner, { borderRadius: "24px" });
            }

            // Create main timeline with THREE phases (scroll, scale, hold)
            const mainTL = gsap.timeline({ paused: true });

            // Calculate durations based on scroll distances
            const phase1Duration = scrollWidth / totalDistance; // Horizontal scroll phase
            const phase2Duration = scaleDistance / totalDistance; // Scale phase
            const bufferDuration = scrollBuffer / totalDistance; // Hold phase for scrub catchup

            // PHASE 1: Horizontal scroll until last card is CENTERED
            mainTL.to(
                track,
                {
                    x: -scrollWidth,
                    ease: "none",
                    duration: phase1Duration,
                },
                0,
            );

            // PHASE 2: Scale last card from small to full screen (after it's centered)
            if (scaleLastCard && lastCard) {
                mainTL.to(
                    lastCard,
                    {
                        scale: getFullScreenScale(),
                        ease: "power2.out",
                        duration: phase2Duration,
                    },
                    phase1Duration,
                ); // Start after phase 1
            }

            // Border radius animation during phase 2
            if (scaleLastCard && lastCardInner) {
                mainTL.to(
                    lastCardInner,
                    {
                        borderRadius: "0px",
                        ease: "power2.out",
                        duration: phase2Duration,
                    },
                    phase1Duration,
                ); // Start after phase 1
            }

            // PHASE 3: Hold final state while scrub catches up
            if (bufferDuration > 0) {
                mainTL.to({}, { duration: bufferDuration });
            }

            // Single ScrollTrigger with proper pinning
            ScrollTrigger.create({
                trigger: container,
                start: "top top",
                end: () => `+=${totalDistance}`,
                pin: section,
                pinSpacing: true,
                scrub: 0.1,
                animation: mainTL,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const progress = self.progress;

                    // Content opacity - starts revealing during phase 2 (after card is centered)
                    if (scaleLastCard) {
                        const phase2Start = phase1Duration;
                        if (progress >= phase2Start) {
                            // In phase 2 - reveal content
                            const phase2Progress =
                                (progress - phase2Start) / phase2Duration;
                            const opacityProgress = Math.min(
                                1,
                                phase2Progress * 2,
                            );
                            setContentOpacity(opacityProgress);
                        } else {
                            setContentOpacity(0);
                        }
                    }

                    // Scale non-last cards based on position
                    const vpCenter = window.innerWidth / 2;
                    cardRefs.current.forEach((card, index) => {
                        if (!card) return;
                        const isLast = index === childArray.length - 1;

                        if (!isLast) {
                            const rect = card.getBoundingClientRect();
                            const cardCenter = rect.left + rect.width / 2;
                            const distance = Math.abs(vpCenter - cardCenter);
                            const maxDistance =
                                window.innerWidth / 2 + rect.width / 2;
                            const proximity =
                                1 - Math.min(1, distance / maxDistance);
                            const scale = 0.8 + proximity * 0.2;
                            gsap.set(card, { scale: scale });
                        }
                    });
                },
            });
        }, container);

        // Handle resize
        const handleResize = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            ctx.revert();
            window.removeEventListener("resize", handleResize);
        };
    }, [
        childArray.length,
        cardWidthVw,
        cardHeightVh,
        scaleLastCard,
        lastCardInitialScale,
    ]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                zIndex: 2,
            }}
        >
            <section
                ref={sectionRef}
                className="h-screen flex items-center overflow-hidden"
                style={{ backgroundColor: bgColor, zIndex: 10 }}
            >
                <div
                    ref={trackRef}
                    className="flex flex-row items-center will-change-transform"
                    style={{
                        gap: `${gapVw}vw`,
                        paddingLeft: `${initialOffset}vw`,
                        paddingRight: `${initialOffset}vw`,
                    }}
                >
                    {childArray.map((child, index) => {
                        const isLastCard = index === childArray.length - 1;
                        const renderedChild =
                            scaleLastCard && isLastCard && isValidElement(child)
                                ? cloneElement(child, { contentOpacity })
                                : child;

                        const isSecondToLast = index === childArray.length - 2;

                        return (
                            <div
                                key={index}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className={`${SIZE_CLASSES[cardSize]} shrink-0 will-change-transform`}
                                style={{
                                    width: isSecondToLast
                                        ? "auto"
                                        : `${cardWidthVw}vw`,
                                    transformOrigin: "center center",
                                    marginRight: isSecondToLast
                                        ? "20vw"
                                        : undefined, // Extra spacing after LoadingTextScroller
                                }}
                            >
                                {scaleLastCard && isLastCard ? (
                                    <div
                                        ref={lastCardInnerRef}
                                        className="w-full h-full overflow-hidden"
                                        style={{ borderRadius: "24px" }}
                                    >
                                        {renderedChild}
                                    </div>
                                ) : (
                                    child
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
