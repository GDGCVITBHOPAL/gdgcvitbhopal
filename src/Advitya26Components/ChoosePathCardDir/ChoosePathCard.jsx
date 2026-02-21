import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import * as gameIcons from "@/Advitya26Components/assets/gamesIcons/gameIcons";

// ADD GAME IDs HERE TO REVEAL: e.g. [1, 2, 3]
const REVEALED_GAME_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const games = [
    {
        id: 1,
        name: "Uno Flip",
        description:
            "Teams take turns flipping two cards to find matching pairs, using memory and strategy to score the most matches.",
        icon: gameIcons.game1,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 2,
        name: "Gemini",
        description:
            "Players recreate a given AI-generated image as closely as possible by writing effective text prompts—no image upload allowed.",
        icon: gameIcons.game2,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 3,
        name: "Tower Defence",
        description:
            "Teams build and defend a cup tower while teammates throw balls to knock down the opponent's tower within a time limit.",
        icon: gameIcons.game3,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 4,
        name: "Maze Game",
        description:
            "A blindfolded player navigates a taped maze using only indirect communication and teamwork from teammates.",
        icon: gameIcons.game4,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 5,
        name: "Human Tic Tac Toe",
        description:
            "Players race to claim positions on a 3×3 grid, aiming to form three in a row before the opposing team.",
        icon: gameIcons.game5,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 6,
        name: "5-Legged Sprint",
        description:
            "Four players run a race while their legs are tied together, testing balance, coordination, and teamwork.",
        icon: gameIcons.game6,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 7,
        name: "Red Light Green Light",
        description:
            'Players move only during "Green Light" and must freeze instantly at "Red Light" to avoid elimination.',
        icon: gameIcons.game7,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 8,
        name: "Pass the Hoop",
        description:
            "A team passes a hoop through every member while holding hands the entire time, without breaking the chain.",
        icon: gameIcons.game8,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 9,
        name: "Auction Round",
        description:
            "Teams bid their points in auctions to win mystery boxes containing hidden rewards or penalties.",
        icon: gameIcons.game9,
        imgStyle: { transform: "scale(1.3)" },
    },
    {
        id: 10,
        name: "Code Relay",
        description:
            "Teams solve a coding problem in relay style, with each member coding for only 10 seconds and no communication allowed.",
        icon: gameIcons.game10,
        imgStyle: { transform: "scale(1.3)" },
    },
];

// Snake pattern: Row 1 L→R, Row 2 R→L, Row 3 L→R
const gridPositions = [
    { row: 1, col: 1 },
    { row: 1, col: 2 },
    { row: 1, col: 3 },
    { row: 1, col: 4 },
    { row: 2, col: 4 },
    { row: 2, col: 3 },
    { row: 2, col: 2 },
    { row: 2, col: 1 },
    { row: 3, col: 1 },
    { row: 3, col: 2 },
];

export default function ChoosePathCard({ contentOpacity = 1 }) {
    const [hoveredGame, setHoveredGame] = useState(null);
    const gridRef = useRef(null);
    const linesContainerRef = useRef(null);
    const circleRefs = useRef([]);

    useEffect(() => {
        const drawLines = () => {
            if (!gridRef.current || !linesContainerRef.current) return;
            linesContainerRef.current.innerHTML = "";

            // Get grid container position and dimensions
            const gridRect = gridRef.current.getBoundingClientRect();
            const scaleX = gridRect.width / gridRef.current.offsetWidth;
            const scaleY = gridRect.height / gridRef.current.offsetHeight;
            const scale = (scaleX + scaleY) / 2 || 1;

            // Get positions from the CIRCLE elements relative to the grid
            const positions = [];
            circleRefs.current.forEach((el, index) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                // Calculate position relative to grid
                // Then divide by scale to get local coordinate system values
                const relativeX = rect.left - gridRect.left + rect.width / 2;
                const relativeY = rect.top - gridRect.top + rect.height / 2;

                positions.push({
                    id: index + 1,
                    x: relativeX / scale,
                    y: relativeY / scale,
                    gridPos: gridPositions[index],
                });
            });

            // Normalize Y coordination for each row to ensure straight horizontal lines
            const rowMap = new Map();
            positions.forEach(pos => {
                const row = pos.gridPos.row;
                if (!rowMap.has(row)) rowMap.set(row, []);
                rowMap.get(row).push(pos);
            });

            rowMap.forEach(rowPositions => {
                const avgY = rowPositions.reduce((sum, p) => sum + p.y, 0) / rowPositions.length;
                rowPositions.forEach(p => p.y = avgY);
            });

            // Helper function to create a line segment
            const createLine = (x1, y1, x2, y2, delay) => {
                const dx = x2 - x1;
                const dy = y2 - y1;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 2) return; // Skip tiny lines

                const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                const line = document.createElement("div");
                line.className = "dotted-line";
                line.style.cssText = `
                    position: absolute;
                    left: ${x1}px;
                    top: ${y1}px;
                    width: ${distance}px;
                    height: 4px;
                    transform: rotate(${angle}deg) translateY(-50%);
                    transform-origin: left center;
                    background: repeating-linear-gradient(90deg, #8B4513 0px, #8B4513 10px, transparent 10px, transparent 18px);
                    background-size: 18px 100%;
                    opacity: 0;
                    z-index: 1;
                    pointer-events: none;
                `;
                linesContainerRef.current.appendChild(line);

                // Fade in animation
                gsap.to(line, {
                    opacity: 0.7,
                    duration: 0.4,
                    delay: delay,
                    ease: "power2.out",
                });

                // Marching ants animation
                gsap.to(line, {
                    backgroundPositionX: "18px",
                    duration: 0.8,
                    repeat: -1,
                    ease: "none",
                    delay: delay,
                });
            };

            let lineDelay = 0;
            for (let i = 0; i < positions.length - 1; i++) {
                const start = positions[i];
                const end = positions[i + 1];
                if (!start || !end) continue;

                const sameRow = start.gridPos.row === end.gridPos.row;

                if (sameRow) {
                    // Same row - draw single horizontal line
                    createLine(start.x, start.y, end.x, end.y, lineDelay * 0.1);
                    lineDelay++;
                } else {
                    // Different row - draw L-shaped path (vertical segment)
                    // The circles are already positioned in a snake pattern,
                    // so we just need to draw the vertical connection
                    createLine(
                        start.x,
                        start.y,
                        start.x,
                        end.y,
                        lineDelay * 0.1,
                    );
                    lineDelay++;
                }
            }
        };

        // Use ResizeObserver to detect size changes of the grid specifically
        const resizeObserver = new ResizeObserver(() => {
            // Use requestAnimationFrame to avoid "ResizeObserver loop limit exceeded"
            window.requestAnimationFrame(drawLines);
        });

        if (gridRef.current) {
            resizeObserver.observe(gridRef.current);
        }

        // Initial draw
        const timer = setTimeout(drawLines, 500);

        // Window resize fallback
        window.addEventListener("resize", drawLines);

        return () => {
            resizeObserver.disconnect();
            clearTimeout(timer);
            window.removeEventListener("resize", drawLines);
        };
    }, []);

    return (
        <div
            className="relative w-full h-full bg-linear-to-br from-[#d2b48c] via-[#c19a6b] to-[#d2b48c] p-4 md:p-6 pb-8 overflow-visible"
            style={{ boxShadow: "inset 0 0 100px rgba(101, 67, 33, 0.3)" }}
        >
            {/* Vintage border */}
            <div className="absolute top-3 left-3 right-3 bottom-3 border-4 border-double border-[#654321] rounded-lg pointer-events-none" />

            {/* Corner decorations */}
            <div className="absolute top-5 left-5 text-2xl text-[#654321] opacity-60">
                ❧
            </div>
            <div className="absolute top-5 right-5 text-2xl text-[#654321] opacity-60 scale-x-[-1]">
                ❧
            </div>
            <div className="absolute bottom-5 left-5 text-2xl text-[#654321] opacity-60 scale-y-[-1]">
                ❧
            </div>
            <div className="absolute bottom-5 right-5 text-2xl text-[#654321] opacity-60 scale-[-1]">
                ❧
            </div>

            {/* Title */}
            <div className="relative text-center mb-3 z-10">
                <h1 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-[#3d2817] tracking-widest mb-2 uppercase">
                    📌Game's Boards
                </h1>
                <div className="inline-block px-4 py-1 bg-[rgba(139,69,19,0.15)] border-2 border-[#654321] rounded-full">
                    <span className="font-serif italic text-xs md:text-sm text-[#654321]">
                        10 Challenges Await
                    </span>
                </div>
            </div>

            {/* Game Grid - 4 columns, 3 rows with lines container inside */}
            <div
                ref={gridRef}
                className="relative grid grid-cols-4 grid-rows-3 gap-x-1 gap-y-2 md:gap-x-2 md:gap-y-3 px-2 md:px-4 lg:px-8 z-10"
            >
                {/* Lines container - positioned relative to grid */}
                <div
                    ref={linesContainerRef}
                    className="absolute inset-0 pointer-events-none overflow-visible"
                    style={{ zIndex: 0 }}
                />

                {games.map((game, index) => {
                    const gridPos = gridPositions[index];
                    const isRevealed = REVEALED_GAME_IDS.includes(game.id);
                    return (
                        <motion.div
                            key={game.id}
                            className="relative flex flex-col items-center cursor-pointer py-1"
                            style={{
                                gridColumn: gridPos.col,
                                gridRow: gridPos.row,
                                zIndex: hoveredGame === game.id ? 100 : 10,
                            }}
                            onMouseEnter={() => setHoveredGame(game.id)}
                            onMouseLeave={() => setHoveredGame(null)}
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: game.id * 0.06,
                                type: "spring",
                                stiffness: 200,
                            }}
                        >
                            {/* Game circle */}
                            <div
                                ref={(el) => (circleRefs.current[index] = el)}
                                className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-linear-to-br ${isRevealed ? "from-[#f4e4c1] to-[#d4af37]" : "from-[#5c4033] to-[#3b2716]"} border-3 border-[#654321] rounded-full flex items-center justify-center shadow-lg transition-shadow duration-300 ${hoveredGame === game.id ? (isRevealed ? "shadow-[0_0_20px_rgba(218,165,32,0.7)]" : "shadow-[0_0_20px_rgba(139,69,19,0.7)]") : ""}`}
                            >
                                {isRevealed ? (
                                    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full">
                                        <img
                                            src={game.icon}
                                            alt={game.name}
                                            className="w-full h-full object-fill filter sepia-[0.5] hover:sepia-0 transition-all duration-300"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-xl md:text-2xl lg:text-3xl select-none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>🔒</span>
                                )}
                                <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#8B0000] text-white border-2 border-[#654321] rounded-full flex items-center justify-center font-bold text-[8px] md:text-[10px] shadow-md">
                                    {game.id}
                                </div>
                            </div>

                            {/* Label */}
                            {isRevealed ? (
                                <div className="mt-1 px-2 py-0.5 bg-[rgba(244,228,193,0.95)] border border-[#654321] rounded shadow-sm">
                                    <span className="font-serif font-bold text-[8px] md:text-[10px] text-[#3d2817] whitespace-nowrap">
                                        {game.name}
                                    </span>
                                </div>
                            ) : (
                                <div className="mt-1 px-2 py-0.5 bg-[rgba(92,64,51,0.9)] border border-[#654321] rounded shadow-sm">
                                    <span className="font-serif font-bold text-[8px] md:text-[10px] text-[#f4e4c1] whitespace-nowrap">
                                        🔒 Locked
                                    </span>
                                </div>
                            )}

                            {/* Tooltip */}
                            {hoveredGame === game.id && (
                                <motion.div
                                    className={`absolute w-44 md:w-52 ${gridPos.row === 3
                                        ? "bottom-full mb-0 left-0"
                                        : (gridPos.row === 2
                                            ? (gridPos.col >= 3 ? "right-full mr-0 top-1/2 -translate-y-1/2" : "left-full ml-0 top-1/2 -translate-y-1/2")
                                            : (gridPos.col >= 3 ? "right-full mr-0 top-0" : "left-full ml-0 top-0")
                                        )
                                        }`}
                                    style={{ zIndex: 1000 }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.12 }}
                                >
                                    {isRevealed ? (
                                        <div className="bg-linear-to-br from-[#f5e6d3] to-[#e8d5b7] border-2 border-[#654321] rounded-lg p-2 shadow-xl">
                                            <h3 className="font-serif text-xs md:text-sm font-bold text-[#3d2817] mb-1 pb-1 border-b border-[#8B4513] uppercase">
                                                {game.name}
                                            </h3>
                                            <p className="font-serif text-[10px] md:text-xs leading-snug text-[#4a3728]">
                                                {game.description}
                                            </p>
                                            <div className="mt-2 rounded-md overflow-hidden border border-[#8B4513]">
                                                <img
                                                    src={game.icon}
                                                    alt={game.name}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-linear-to-br from-[#3b2716] to-[#2a1a0e] border-2 border-[#654321] rounded-lg p-3 shadow-xl text-center">
                                            <div className="text-4xl mb-2">🏴‍☠️</div>
                                            <h3 className="font-serif text-xs md:text-sm font-bold text-[#d4af37] mb-1 pb-1 border-b border-[#8B4513] uppercase">
                                                Challenge #{game.id}
                                            </h3>
                                            <p className="font-serif text-[10px] md:text-xs leading-snug text-[#c19a6b] italic">
                                                This challenge is locked! Stay tuned for the big reveal...
                                            </p>
                                            <div className="mt-2 py-1.5 px-2 bg-[rgba(139,69,19,0.3)] rounded-md border border-[#654321]">
                                                <span className="font-serif text-[10px] md:text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                                                    🔓 Unlocking Soon
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
