import React from "react";
import { Link } from "react-router-dom";

export default function LeaderboardNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Brand */}
                    <Link to="/advitya" className="flex items-center gap-2 sm:gap-3 group">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
                            A
                        </div>
                        <span className="text-white font-bold text-base sm:text-lg tracking-tight">
                            Advitya <span className="text-violet-400 font-normal text-xs sm:text-sm hidden sm:inline">Leaderboard</span>
                        </span>
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link
                            to="/advitya/leaderboard"
                            className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white/5"
                        >
                            Leaderboard
                        </Link>
                        <Link
                            to="/advitya/admin"
                            className="text-xs sm:text-sm text-gray-400 hover:text-violet-400 transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white/5"
                        >
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
