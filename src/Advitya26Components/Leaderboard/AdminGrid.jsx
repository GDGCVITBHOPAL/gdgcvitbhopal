import React, { useState } from "react";
import { X, Trash2, RotateCcw, AlertCircle } from "lucide-react";
import {
    doc,
    setDoc,
    updateDoc,
    addDoc,
    deleteDoc,
    collection,
    writeBatch,
} from "firebase/firestore";
import { db } from "./firebase";

export default function AdminGrid({ teams, games }) {
    const [newTeamName, setNewTeamName] = useState("");
    const [newGameName, setNewGameName] = useState("");
    const [editingTeam, setEditingTeam] = useState(null);
    const [editingGame, setEditingGame] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [error, setError] = useState("");

    // -------- Score Management --------
    const handleScoreChange = async (teamId, gameId, value) => {
        const numValue = parseInt(value, 10);
        if (isNaN(numValue) || numValue < 0) return;
        try {
            await updateDoc(doc(db, "teams", teamId), {
                [`scores.${gameId}`]: numValue,
            });
        } catch (err) {
            console.error("Failed to update score:", err);
            setError("Failed to update score. Please try again.");
        }
    };

    // -------- Team CRUD --------
    const addTeam = async () => {
        const name = newTeamName.trim();
        if (!name) return;
        try {
            const scores = {};
            games.forEach((g) => (scores[g.id] = 0));
            await addDoc(collection(db, "teams"), { name, scores });
            setNewTeamName("");
        } catch (err) {
            console.error("Failed to add team:", err);
            setError("Failed to add team. Please try again.");
        }
    };

    const removeTeam = async (teamId, teamName) => {
        if (!window.confirm(`Delete team "${teamName}"? This cannot be undone.`)) return;
        try {
            await deleteDoc(doc(db, "teams", teamId));
        } catch (err) {
            console.error("Failed to delete team:", err);
            setError("Failed to delete team. Please try again.");
        }
    };

    const renameTeam = async (teamId) => {
        const name = editValue.trim();
        if (!name) return;
        try {
            await updateDoc(doc(db, "teams", teamId), { name });
            setEditingTeam(null);
            setEditValue("");
        } catch (err) {
            console.error("Failed to rename team:", err);
            setError("Failed to rename team. Please try again.");
        }
    };

    // -------- Game CRUD --------
    const addGame = async () => {
        const name = newGameName.trim();
        if (!name) return;
        try {
            const newId = `g${Date.now()}`;
            const updatedGames = [...games, { id: newId, name }];
            await setDoc(doc(db, "config", "settings"), { games: updatedGames }, { merge: true });

            // Add score 0 for new game to all teams
            const batch = writeBatch(db);
            teams.forEach((team) => {
                batch.update(doc(db, "teams", team.id), { [`scores.${newId}`]: 0 });
            });
            await batch.commit();
            setNewGameName("");
        } catch (err) {
            console.error("Failed to add game:", err);
            setError("Failed to add game. Please try again.");
        }
    };

    const removeGame = async (gameId, gameName) => {
        if (!window.confirm(`Delete game "${gameName}"? All scores for this game will be lost.`)) return;
        try {
            const updatedGames = games.filter((g) => g.id !== gameId);
            await setDoc(doc(db, "config", "settings"), { games: updatedGames }, { merge: true });

            // Remove score key from all teams
            const batch = writeBatch(db);
            teams.forEach((team) => {
                const newScores = { ...team.scores };
                delete newScores[gameId];
                batch.update(doc(db, "teams", team.id), { scores: newScores });
            });
            await batch.commit();
        } catch (err) {
            console.error("Failed to remove game:", err);
            setError("Failed to remove game. Please try again.");
        }
    };

    const renameGame = async (gameId) => {
        const name = editValue.trim();
        if (!name) return;
        try {
            const updatedGames = games.map((g) =>
                g.id === gameId ? { ...g, name } : g
            );
            await setDoc(doc(db, "config", "settings"), { games: updatedGames }, { merge: true });
            setEditingGame(null);
            setEditValue("");
        } catch (err) {
            console.error("Failed to rename game:", err);
            setError("Failed to rename game. Please try again.");
        }
    };

    // -------- Reset All --------
    const handleReset = async () => {
        if (!window.confirm("⚠️ Reset ALL scores to 0? This cannot be undone.")) return;
        try {
            const batch = writeBatch(db);
            const emptyScores = {};
            games.forEach((g) => (emptyScores[g.id] = 0));
            teams.forEach((team) => {
                batch.update(doc(db, "teams", team.id), { scores: emptyScores });
            });
            await batch.commit();
        } catch (err) {
            console.error("Failed to reset:", err);
            setError("Failed to reset scores. Please try again.");
        }
    };

    const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="space-y-4 sm:space-y-6">
            {/* -------- Error Banner -------- */}
            {error && (
                <div className="flex items-center justify-between gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                    </div>
                    <button onClick={() => setError("")} className="hover:text-red-300 transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* -------- Header & Actions -------- */}
            <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
                <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white">Score Management</h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        {teams.length} teams · {games.length} games
                    </p>
                </div>
                <button
                    onClick={handleReset}
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 rounded-xl text-xs sm:text-sm font-medium transition-all"
                >
                    <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block mr-1" /> Reset All
                </button>
            </div>

            {/* -------- Add Team & Game -------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Add Team */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="newTeamName"
                        value={newTeamName}
                        onChange={(e) => setNewTeamName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addTeam()}
                        placeholder="New team name..."
                        className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-800/50 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                    />
                    <button
                        onClick={addTeam}
                        disabled={!newTeamName.trim()}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs sm:text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                        + Team
                    </button>
                </div>

                {/* Add Game */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="newGameName"
                        value={newGameName}
                        onChange={(e) => setNewGameName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addGame()}
                        placeholder="New game name..."
                        className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-800/50 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
                    />
                    <button
                        onClick={addGame}
                        disabled={!newGameName.trim()}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-xl text-xs sm:text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                        + Game
                    </button>
                </div>
            </div>

            {/* -------- Score Grid -------- */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm shadow-2xl">
                <table className="w-full text-xs sm:text-sm" style={{ minWidth: `${200 + games.length * 80}px` }}>
                    <thead>
                        <tr className="bg-gray-800/80 border-b border-white/10">
                            <th className="bg-gray-800/95 px-2 sm:px-4 py-2 sm:py-4 text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider border-r border-white/10">
                                Team
                            </th>
                            {games.map((game) => (
                                <th key={game.id} className="px-1 sm:px-2 py-2 sm:py-3 text-center border-r border-white/10">
                                    {editingGame === game.id ? (
                                        <div className="flex items-center gap-1">
                                            <input
                                                autoFocus
                                                name="renameGame"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") renameGame(game.id);
                                                    if (e.key === "Escape") setEditingGame(null);
                                                }}
                                                onBlur={() => setEditingGame(null)}
                                                className="w-full px-1 py-0.5 bg-gray-700 border border-violet-500/50 rounded text-white text-[10px] sm:text-xs text-center focus:outline-none"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex gap-1 justify-center items-center">
                                            <span
                                                onClick={() => { setEditingGame(game.id); setEditValue(game.name); }}
                                                className="text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:text-violet-400 transition-colors break-words"
                                                title="Click to rename"
                                            >
                                                {game.name}
                                            </span>
                                            <button
                                                onClick={() => removeGame(game.id, game.name)}
                                                className="text-[10px] sm:text-[12px] cursor-pointer shrink-0"
                                                title="Remove game"
                                            >
                                                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400 hover:text-red-300 transition-colors" />
                                            </button>
                                        </div>
                                    )}
                                </th>
                            ))}
                            <th className="px-2 sm:px-4 py-2 sm:py-4 text-center text-[10px] sm:text-xs font-bold text-violet-400 uppercase tracking-wider w-[50px] sm:w-[70px]">
                                Total
                            </th>
                            <th className="px-1 sm:px-3 py-2 sm:py-4 text-center text-[10px] sm:text-xs font-semibold text-gray-500 uppercase w-[30px] sm:w-[40px]">

                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {sortedTeams.map((team) => {
                            const total = games.reduce((sum, g) => sum + (team.scores?.[g.id] || 0), 0);
                            return (
                                <tr key={team.id} className="hover:bg-white/5 transition-colors">
                                    {/* Team Name */}
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-white/10">
                                        {editingTeam === team.id ? (
                                            <input
                                                autoFocus
                                                name="renameTeam"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") renameTeam(team.id);
                                                    if (e.key === "Escape") setEditingTeam(null);
                                                }}
                                                onBlur={() => setEditingTeam(null)}
                                                className="w-full px-2 py-1 bg-gray-800 border border-violet-500/50 rounded-lg text-white text-xs sm:text-sm focus:outline-none"
                                            />
                                        ) : (
                                            <span
                                                onClick={() => { setEditingTeam(team.id); setEditValue(team.name); }}
                                                className="font-semibold text-white text-xs sm:text-sm cursor-pointer hover:text-violet-400 transition-colors break-words"
                                                title="Click to rename"
                                            >
                                                {team.name}
                                            </span>
                                        )}
                                    </td>

                                    {/* Scores */}
                                    {games.map((game) => (
                                        <td key={game.id} className="px-1 sm:px-2 py-1 sm:py-2 text-center border-r border-white/10">
                                            <input
                                                type="number"
                                                name={`score-${team.id}-${game.id}`}
                                                min="0"
                                                value={team.scores?.[game.id] || 0}
                                                onChange={(e) => handleScoreChange(team.id, game.id, e.target.value)}
                                                className="w-full max-w-[48px] sm:max-w-[64px] mx-auto px-1 sm:px-2 py-1 sm:py-1.5 bg-gray-800/50 border border-white/10 rounded-lg text-center text-white text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all hover:bg-gray-800/80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </td>
                                    ))}

                                    {/* Total */}
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                                        <span className="inline-block px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-violet-500/15 text-violet-400 font-bold text-xs sm:text-sm border border-violet-500/20">
                                            {total}
                                        </span>
                                    </td>

                                    {/* Delete */}
                                    <td className="px-1 sm:px-3 py-2 sm:py-3 text-center">
                                        <button
                                            onClick={() => removeTeam(team.id, team.name)}
                                            className="text-gray-600 hover:text-red-400 transition-colors text-xs sm:text-sm"
                                            title="Delete team"
                                        >
                                            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}

                        {teams.length === 0 && (
                            <tr>
                                <td colSpan={games.length + 3} className="px-4 py-8 sm:py-12 text-center text-gray-500 text-xs sm:text-sm">
                                    No teams yet. Add a team above to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
