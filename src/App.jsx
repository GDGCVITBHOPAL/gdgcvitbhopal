import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Tech from "./pages/Tech";
import Home from "./pages/Home";
import WebDTeam from "./pages/WebDTeam";
import AllEvents from "./pages/AllEventsPage";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Footer from "./Components/Footer/Footer";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);

    return null;
}

function App() {
    const [showSplash, setShowSplash] = useState(true);

    if (showSplash) {
        return <SplashScreen onFinish={() => setShowSplash(false)} />;
    }

    return (
        <>
            <ScrollToTop />
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tech" element={<Tech />} />
                    <Route path="/teams/tech/webDTeam" element={<WebDTeam />} />
                    <Route path="/allEvents" element={<AllEvents />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
