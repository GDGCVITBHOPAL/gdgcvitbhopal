import { useState, useRef, useEffect } from "react";
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

// Mobile: 2 columns, 5 rows - snake pattern
const mobileGridPositions = [
    { row: 1, col: 1 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
    { row: 2, col: 1 },
    { row: 3, col: 1 },
    { row: 3, col: 2 },
    { row: 4, col: 2 },
    { row: 4, col: 1 },
    { row: 5, col: 1 },
    { row: 5, col: 2 },
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

            // Calculate scale factor by comparing rendered size vs layout size
            const scaleX = gridRect.width / gridRef.current.offsetWidth;
            const scaleY = gridRect.height / gridRef.current.offsetHeight;
            const scale = (scaleX + scaleY) / 2 || 1;

            const positions = [];
            circleRefs.current.forEach((el, index) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const relativeX = rect.left - gridRect.left + rect.width / 2;
                const relativeY = rect.top - gridRect.top + rect.height / 2;

                positions.push({
                    id: index + 1,
                    x: relativeX / scale,
                    y: relativeY / scale,
                    gridPos: mobileGridPositions[index],
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
                    height: 3px;
                    transform: rotate(${angle}deg) translateY(-50%);
                    transform-origin: left center;
                    background: repeating-linear-gradient(90deg, #8B4513 0px, #8B4513 8px, transparent 8px, transparent 14px);
                    background-size: 14px 100%;
                    opacity: 0;
                    z-index: 1;
                    pointer-events: none;
                `;
                linesContainerRef.current.appendChild(line);

                gsap.to(line, {
                    opacity: 0.6,
                    duration: 0.3,
                    delay,
                    ease: "power2.out",
                });
                gsap.to(line, {
                    backgroundPositionX: "14px",
                    duration: 0.7,
                    repeat: -1,
                    ease: "none",
                    delay,
                });
            };

            let lineDelay = 0;
            for (let i = 0; i < positions.length - 1; i++) {
                const start = positions[i];
                const end = positions[i + 1];
                if (!start || !end) continue;

                const sameRow = start.gridPos.row === end.gridPos.row;
                if (sameRow) {
                    createLine(
                        start.x,
                        start.y,
                        end.x,
                        end.y,
                        lineDelay * 0.08,
                    );
                } else {
                    createLine(
                        start.x,
                        start.y,
                        start.x,
                        end.y,
                        lineDelay * 0.08,
                    );
                }
                lineDelay++;
            }
        };

        // Use ResizeObserver to detect size changes of the grid specifically
        const resizeObserver = new ResizeObserver(() => {
            window.requestAnimationFrame(drawLines);
        });

        if (gridRef.current) {
            resizeObserver.observe(gridRef.current);
        }

        const timer = setTimeout(drawLines, 500);
        window.addEventListener("resize", drawLines);
        return () => {
            resizeObserver.disconnect();
            clearTimeout(timer);
            window.removeEventListener("resize", drawLines);
        };
    }, []);

    return (
        <div
            className="relative w-full h-full bg-linear-to-br from-[#d2b48c] via-[#c19a6b] to-[#d2b48c] p-3 pb-6 overflow-hidden flex flex-col items-center"
            style={{ boxShadow: "inset 0 0 60px rgba(101, 67, 33, 0.3)" }}
        >
            {/* Vintage border */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border-3 border-double border-[#654321] rounded-lg pointer-events-none" />

            {/* Corner decorations */}
            <div className="absolute top-3 left-3 text-xl text-[#654321] opacity-60">
                ❧
            </div>
            <div className="absolute top-3 right-3 text-xl text-[#654321] opacity-60 scale-x-[-1]">
                ❧
            </div>
            <div className="absolute bottom-3 left-3 text-xl text-[#654321] opacity-60 scale-y-[-1]">
                ❧
            </div>
            <div className="absolute bottom-3 right-3 text-xl text-[#654321] opacity-60 scale-[-1]">
                ❧
            </div>

            {/* Title */}
            <div className="relative text-center mb-2 z-10 pt-2 shrink-0">
                <h1 className="font-serif font-black text-xl text-[#3d2817] tracking-widest mb-1 uppercase">
                    📌Game's Boards
                </h1>
                <div className="inline-block px-3 py-0.5 bg-[rgba(139,69,19,0.15)] border-2 border-[#654321] rounded-full">
                    <span className="font-serif italic text-[10px] text-[#654321]">
                        10 Challenges Await
                    </span>
                </div>
            </div>

            {/* Game Grid - 2 columns for mobile */}
            <div
                ref={gridRef}
                className="relative grid grid-cols-2 grid-rows-5 gap-x-8 gap-y-2 px-6 py-1 z-10 flex-1 place-content-center items-center justify-items-center"
            >
                {/* Lines container */}
                <div
                    ref={linesContainerRef}
                    className="absolute inset-0 pointer-events-none overflow-visible"
                    style={{ zIndex: 0 }}
                />

                {games.map((game, index) => {
                    const gridPos = mobileGridPositions[index];
                    const isRevealed = REVEALED_GAME_IDS.includes(game.id);
                    return (
                        <motion.div
                            key={game.id}
                            className="relative flex flex-col items-center cursor-pointer py-0.5"
                            style={{
                                gridColumn: gridPos.col,
                                gridRow: gridPos.row,
                                zIndex: selectedGame === game.id ? 100 : 10,
                            }}
                            onClick={() =>
                                setSelectedGame(
                                    selectedGame === game.id ? null : game.id,
                                )
                            }
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: game.id * 0.05,
                                type: "spring",
                                stiffness: 250,
                            }}
                        >
                            {/* Game circle */}
                            <div
                                ref={(el) => (circleRefs.current[index] = el)}
                                className={`relative w-11 h-11 bg-linear-to-br ${isRevealed ? "from-[#f4e4c1] to-[#d4af37]" : "from-[#5c4033] to-[#3b2716]"} border-2 border-[#654321] rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${selectedGame === game.id ? (isRevealed ? "shadow-[0_0_15px_rgba(218,165,32,0.8)] scale-110" : "shadow-[0_0_15px_rgba(139,69,19,0.8)] scale-110") : ""}`}
                            >
                                {isRevealed ? (
                                    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full">
                                        <img
                                            src={game.icon}
                                            alt={game.name}
                                            className="w-full h-full object-fill filter sepia-[0.5] transition-all duration-300"
                                            style={game.imgStyle}
                                        />
                                    </div>
                                ) : (
                                    <span className="text-lg select-none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>🔒</span>
                                )}
                                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#8B0000] text-white border-2 border-[#654321] rounded-full flex items-center justify-center font-bold text-[7px] shadow-sm">
                                    {game.id}
                                </div>
                            </div>

                            {/* Label */}
                            {isRevealed ? (
                                <div className="mt-1 px-1.5 py-0.5 bg-[rgba(244,228,193,0.95)] border border-[#654321] rounded shadow-sm">
                                    <span className="font-serif font-bold text-[8px] text-[#3d2817] whitespace-nowrap">
                                        {game.name}
                                    </span>
                                </div>
                            ) : (
                                <div className="mt-1 px-1.5 py-0.5 bg-[rgba(92,64,51,0.9)] border border-[#654321] rounded shadow-sm">
                                    <span className="font-serif font-bold text-[8px] text-[#f4e4c1] whitespace-nowrap">
                                        🔒 Locked
                                    </span>
                                </div>
                            )}

                            {/* Tooltip on tap */}
                            {selectedGame === game.id && (
                                <motion.div
                                    className={`absolute w-40 ${gridPos.row >= 3
                                        ? "bottom-full mb-0"
                                        : "top-full mt-0"
                                        } left-1/2 -translate-x-1/2`}
                                    style={{ zIndex: 1000 }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.12 }}
                                >
                                    {isRevealed ? (
                                        <div className="bg-linear-to-br from-[#f5e6d3] to-[#e8d5b7] border-2 border-[#654321] rounded-lg p-2 shadow-xl">
                                            <h3 className="font-serif text-[10px] font-bold text-[#3d2817] mb-0.5 pb-0.5 border-b border-[#8B4513] uppercase">
                                                {game.name}
                                            </h3>
                                            <p className="font-serif text-[9px] leading-snug text-[#4a3728]">
                                                {game.description}
                                            </p>
                                            <div className="mt-1.5 rounded-md overflow-hidden border border-[#8B4513]">
                                                <img
                                                    src={game.icon}
                                                    alt={game.name}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-linear-to-br from-[#3b2716] to-[#2a1a0e] border-2 border-[#654321] rounded-lg p-2 shadow-xl text-center">
                                            <div className="text-3xl mb-1">🏴‍☠️</div>
                                            <h3 className="font-serif text-[10px] font-bold text-[#d4af37] mb-0.5 pb-0.5 border-b border-[#8B4513] uppercase">
                                                Challenge #{game.id}
                                            </h3>
                                            <p className="font-serif text-[9px] leading-snug text-[#c19a6b] italic">
                                                This challenge is locked! Stay tuned for the big reveal...
                                            </p>
                                            <div className="mt-1.5 py-1 px-1.5 bg-[rgba(139,69,19,0.3)] rounded-md border border-[#654321]">
                                                <span className="font-serif text-[9px] font-bold text-[#d4af37] uppercase tracking-wider">
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
