import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, AlertCircle } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "@/Advitya26Components/Leaderboard/firebase";
import LeaderboardNavbar from "@/Advitya26Components/Leaderboard/LeaderboardNavbar";
import LoginForm from "@/Advitya26Components/Leaderboard/LoginForm";
import AdminGrid from "@/Advitya26Components/Leaderboard/AdminGrid";

export default function AdminPage() {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [teams, setTeams] = useState([]);
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!user) return;

        const unsubConfig = onSnapshot(
            doc(db, "config", "settings"),
            (snapshot) => {
                if (snapshot.exists()) {
                    setGames(snapshot.data().games || []);
                }
            },
            (err) => {
                console.error("Config snapshot error:", err);
                setError("Failed to load game configuration.");
            }
        );

        const unsubTeams = onSnapshot(
            collection(db, "teams"),
            (snapshot) => {
                setTeams(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
            },
            (err) => {
                console.error("Teams snapshot error:", err);
                setError("Failed to load teams data.");
            }
        );

        return () => { unsubConfig(); unsubTeams(); };
    }, [user]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/advitya/leaderboard");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    if (authLoading) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin h-10 w-10 text-violet-500" />
                    <p className="text-gray-400 text-sm">Checking authentication...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <LeaderboardNavbar />

            <main className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {error && (
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-6 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                    </div>
                )}
                {user ? (
                    <>
                        <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-extrabold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    Admin Panel
                                </h1>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                                    Signed in as <span className="text-violet-400 break-all">{user.email}</span>
                                </p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white rounded-xl text-xs sm:text-sm font-medium transition-all"
                            >
                                Sign Out
                            </button>
                        </div>

                        <AdminGrid teams={teams} games={games} />
                    </>
                ) : (
                    <LoginForm />
                )}
            </main>
        </div>
    );
}
