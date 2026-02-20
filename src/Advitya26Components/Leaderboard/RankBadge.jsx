import React from "react";

const medals = {
    1: { emoji: "🥇", bg: "bg-yellow-500/15", border: "border-yellow-500/40", text: "text-yellow-400" },
    2: { emoji: "🥈", bg: "bg-gray-400/15", border: "border-gray-400/40", text: "text-gray-300" },
    3: { emoji: "🥉", bg: "bg-amber-600/15", border: "border-amber-600/40", text: "text-amber-500" },
};

export default function RankBadge({ rank }) {
    const medal = medals[rank];

    if (medal) {
        return (
            <span className={`inline-flex items-center gap-0.5 px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-bold text-[9px] sm:text-sm ${medal.bg} ${medal.border} ${medal.text} border`}>
                <span className="text-xs sm:text-lg leading-none">{medal.emoji}</span>
                {rank}
            </span>
        );
    }

    return (
        <span className="inline-flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-white/5 text-gray-400 font-semibold text-[9px] sm:text-sm">
            {rank}
        </span>
    );
}

export function getRankRowClass(rank) {
    switch (rank) {
        case 1: return "bg-yellow-500/8 border-l-4 border-l-yellow-500";
        case 2: return "bg-gray-400/8 border-l-4 border-l-gray-400";
        case 3: return "bg-amber-600/8 border-l-4 border-l-amber-600";
        default: return "border-l-4 border-l-transparent";
    }
}
