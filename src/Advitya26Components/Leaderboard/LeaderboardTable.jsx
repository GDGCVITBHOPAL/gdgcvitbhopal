import React, { useMemo } from "react";
import { BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RankBadge, { getRankRowClass } from "./RankBadge";

export default function LeaderboardTable({ teams, games }) {
    const rankedTeams = useMemo(() => {
        const gameIds = games.map((g) => g.id);
        return [...teams]
            .map((team) => ({
                ...team,
                total: gameIds.reduce((sum, gid) => sum + (team.scores?.[gid] || 0), 0),
            }))
            .sort((a, b) => b.total - a.total)
            .map((team, index) => ({ ...team, rank: index + 1 }));
    }, [teams, games]);

    if (teams.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <BarChart3 className="w-16 h-16 mb-4 opacity-30" strokeWidth={1.5} />
                <p className="text-lg font-medium">No teams yet</p>
                <p className="text-sm mt-1">Scores will appear here once the event begins.</p>
            </div>
        );
    }

    if (games.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <p className="text-xl font-medium">Please wait while we setup the games...</p>
            </div>
        );
    }

    return (
        <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm shadow-2xl">
            <table className="w-full text-xs sm:text-sm" style={{ minWidth: `${220 + games.length * 80}px` }}>
                {/* Header */}
                <thead>
                    <tr className="bg-gray-800/80 border-b border-white/10">
                        <th className="bg-gray-800/95 px-1 sm:px-3 py-2 sm:py-4 text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider w-[50px] sm:w-[80px] border-r border-white/10">
                            Rank
                        </th>
                        <th className="bg-gray-800/95 px-2 sm:px-4 py-2 sm:py-4 text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider border-r border-white/10">
                            Team
                        </th>
                        {games.map((game) => (
                            <th
                                key={game.id}
                                className="px-1 sm:px-3 py-2 sm:py-4 text-center text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider break-words border-r border-white/10"
                            >
                                {game.name}
                            </th>
                        ))}
                        <th className="px-2 sm:px-4 py-2 sm:py-4 text-center text-[10px] sm:text-xs font-bold text-violet-400 uppercase tracking-wider w-[50px] sm:w-[80px]">
                            Total
                        </th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-white/5">
                    <AnimatePresence>
                        {rankedTeams.map((team) => (
                            <motion.tr
                                key={team.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className={`hover:bg-white/5 transition-colors ${getRankRowClass(team.rank)}`}
                            >
                                {/* Rank */}
                                <td className="px-1 sm:px-3 py-2 sm:py-3 text-center border-r border-white/10 overflow-hidden">
                                    <RankBadge rank={team.rank} />
                                </td>

                                {/* Team Name */}
                                <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-white/10">
                                    <span className="font-semibold text-white text-xs sm:text-sm break-words">{team.name}</span>
                                </td>

                                {/* Game Scores */}
                                {games.map((game) => (
                                    <td key={game.id} className="px-1 sm:px-3 py-2 sm:py-3 text-center border-r border-white/10">
                                        <span
                                            className={`inline-block px-1 sm:px-2 py-0.5 rounded-md text-xs sm:text-sm font-medium ${(team.scores?.[game.id] || 0) > 0
                                                ? "text-white bg-white/5"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            {team.scores?.[game.id] || 0}
                                        </span>
                                    </td>
                                ))}

                                {/* Total */}
                                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                                    <span className="inline-block px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-violet-500/15 text-violet-400 font-bold text-xs sm:text-sm border border-violet-500/20">
                                        {team.total}
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </AnimatePresence>
                </tbody>
            </table>
        </div>
    );
}
