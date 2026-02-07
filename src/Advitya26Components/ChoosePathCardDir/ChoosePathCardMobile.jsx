import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const games = [
    { id: 1, name: "Uno Flip", icon: "a", description: "Teams take turns flipping two cards to find matching pairs, using memory and strategy to score the most matches." },
    { id: 2, name: "Gemini", icon: "b", description: "Players recreate a given AI-generated image as closely as possible by writing effective text prompts—no image upload allowed." },
    { id: 3, name: "Tower Defence", icon: "c", description: "Teams build and defend a cup tower while teammates throw balls to knock down the opponent's tower within a time limit." },
    { id: 4, name: "Maze Game", icon: "d", description: "A blindfolded player navigates a taped maze using only indirect communication and teamwork from teammates." },
    { id: 5, name: "Human Tic Tac Toe", icon: "e", description: "Players race to claim positions on a 3×3 grid, aiming to form three in a row before the opposing team." },
    { id: 6, name: "5-Legged Sprint", icon: "f", description: "Four players run a race while their legs are tied together, testing balance, coordination, and teamwork." },
    { id: 7, name: "Red Light Green Light", icon: "g", description: 'Players move only during "Green Light" and must freeze instantly at "Red Light" to avoid elimination.' },
    { id: 8, name: "Pass the Hoop", icon: "h", description: "A team passes a hoop through every member while holding hands the entire time, without breaking the chain." },
    { id: 9, name: "Auction Round", icon: "i", description: "Teams bid their points in auctions to win mystery boxes containing hidden rewards or penalties." },
    { id: 10, name: "Code Relay", icon: "j", description: "Teams solve a coding problem in relay style, with each member coding for only 10 seconds and no communication allowed." },
];

// Mobile: 2 columns, 5 rows - snake pattern
const mobileGridPositions = [
    { row: 1, col: 1 }, { row: 1, col: 2 },
    { row: 2, col: 2 }, { row: 2, col: 1 },
    { row: 3, col: 1 }, { row: 3, col: 2 },
    { row: 4, col: 2 }, { row: 4, col: 1 },
    { row: 5, col: 1 }, { row: 5, col: 2 },
];

export default function ChoosePathCardMobile({ contentOpacity = 1 }) {
    const [selectedGame, setSelectedGame] = useState(null);
    const gridRef = useRef(null);
    const linesContainerRef = useRef(null);
    const circleRefs = useRef([]);

    useEffect(() => {
        const drawLines = () => {
            if (!gridRef.current || !linesContainerRef.current) return;
            linesContainerRef.current.innerHTML = "";

            const gridRect = gridRef.current.getBoundingClientRect();
            const positions = circleRefs.current
                .filter((el) => el)
                .map((el, index) => {
                    const rect = el.getBoundingClientRect();
                    return {
                        id: index + 1,
                        x: rect.left - gridRect.left + rect.width / 2,
                        y: rect.top - gridRect.top + rect.height / 2,
                        gridPos: mobileGridPositions[index],
                    };
                });

            const createLine = (x1, y1, x2, y2, delay) => {
                const dx = x2 - x1;
                const dy = y2 - y1;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 2) return;

                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                const line = document.createElement("div");
                line.style.cssText = `
                    position: absolute;
                    left: ${x1}px;
                    top: ${y1}px;
                    width: ${distance}px;
                    height: 2px;
                    transform: rotate(${angle}deg) translateY(-50%);
                    transform-origin: left center;
                    background: repeating-linear-gradient(90deg, #8B4513 0px, #8B4513 6px, transparent 6px, transparent 12px);
                    background-size: 12px 100%;
                    opacity: 0;
                    z-index: 1;
                    pointer-events: none;
                `;
                linesContainerRef.current.appendChild(line);

                gsap.to(line, { opacity: 0.6, duration: 0.3, delay, ease: "power2.out" });
                gsap.to(line, { backgroundPositionX: "12px", duration: 0.6, repeat: -1, ease: "none", delay });
            };

            let lineDelay = 0;
            for (let i = 0; i < positions.length - 1; i++) {
                const start = positions[i];
                const end = positions[i + 1];
                if (!start || !end) continue;

                const sameRow = start.gridPos.row === end.gridPos.row;
                if (sameRow) {
                    createLine(start.x, start.y, end.x, end.y, lineDelay * 0.08);
                } else {
                    createLine(start.x, start.y, start.x, end.y, lineDelay * 0.08);
                }
                lineDelay++;
            }
        };

        const timer = setTimeout(drawLines, 300);
        window.addEventListener("resize", drawLines);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", drawLines);
        };
    }, []);

    return (
        <div
            className="relative w-full h-full bg-gradient-to-br from-[#d2b48c] via-[#c19a6b] to-[#d2b48c] p-3 overflow-auto"
            style={{ boxShadow: "inset 0 0 60px rgba(101, 67, 33, 0.3)" }}
        >
            {/* Vintage border */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-double border-[#654321] rounded-lg pointer-events-none" />

            {/* Corner decorations - smaller */}
            <div className="absolute top-3 left-3 text-lg text-[#654321] opacity-50">❧</div>
            <div className="absolute top-3 right-3 text-lg text-[#654321] opacity-50 scale-x-[-1]">❧</div>
            <div className="absolute bottom-3 left-3 text-lg text-[#654321] opacity-50 scale-y-[-1]">❧</div>
            <div className="absolute bottom-3 right-3 text-lg text-[#654321] opacity-50 scale-[-1]">❧</div>

            {/* Title - compact */}
            <div className="relative text-center mb-2 z-10 pt-2">
                <h1 className="font-serif font-black text-xl text-[#3d2817] tracking-wider uppercase">
                    Heading
                </h1>
                <div className="inline-block px-3 py-0.5 bg-[rgba(139,69,19,0.15)] border border-[#654321] rounded-full mt-1">
                    <span className="font-serif italic text-[10px] text-[#654321]">
                        10 Challenges Await
                    </span>
                </div>
            </div>

            {/* Game Grid - 2 columns for mobile */}
            <div
                ref={gridRef}
                className="relative grid grid-cols-2 gap-x-4 gap-y-3 px-4 py-2 z-10"
            >
                {/* Lines container */}
                <div
                    ref={linesContainerRef}
                    className="absolute inset-0 pointer-events-none overflow-visible"
                    style={{ zIndex: 0 }}
                />

                {games.map((game, index) => {
                    const gridPos = mobileGridPositions[index];
                    return (
                        <motion.div
                            key={game.id}
                            className="relative flex flex-col items-center cursor-pointer"
                            style={{
                                gridColumn: gridPos.col,
                                gridRow: gridPos.row,
                                zIndex: selectedGame === game.id ? 100 : 10,
                            }}
                            onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: game.id * 0.05,
                                type: "spring",
                                stiffness: 250,
                            }}
                        >
                            {/* Game circle - smaller */}
                            <div
                                ref={(el) => (circleRefs.current[index] = el)}
                                className={`relative w-10 h-10 bg-gradient-to-br from-[#f4e4c1] to-[#d4af37] border-2 border-[#654321] rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${selectedGame === game.id ? "shadow-[0_0_12px_rgba(218,165,32,0.8)] scale-110" : ""}`}
                            >
                                <div className="text-sm font-semibold text-[#654321]">
                                    {game.icon}
                                </div>
                                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#8B0000] text-white border border-[#654321] rounded-full flex items-center justify-center font-bold text-[7px] shadow-sm">
                                    {game.id}
                                </div>
                            </div>

                            {/* Label - compact */}
                            <div className="mt-1 px-1.5 py-0.5 bg-[rgba(244,228,193,0.95)] border border-[#654321] rounded shadow-sm">
                                <span className="font-serif font-bold text-[7px] text-[#3d2817] whitespace-nowrap">
                                    {game.name}
                                </span>
                            </div>

                            {/* Tooltip on tap - shows below */}
                            {selectedGame === game.id && (
                                <motion.div
                                    className="absolute top-full mt-1 w-36 left-1/2 -translate-x-1/2"
                                    style={{ zIndex: 1000 }}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="bg-gradient-to-br from-[#f5e6d3] to-[#e8d5b7] border border-[#654321] rounded-lg p-2 shadow-lg">
                                        <h3 className="font-serif text-[10px] font-bold text-[#3d2817] mb-0.5 pb-0.5 border-b border-[#8B4513] uppercase">
                                            {game.name}
                                        </h3>
                                        <p className="font-serif text-[8px] leading-tight text-[#4a3728]">
                                            {game.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
