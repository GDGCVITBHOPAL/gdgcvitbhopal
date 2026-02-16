import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./Components/NavBar/NavBar";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Footer from "./Components/Footer/Footer";
import { useScrollContext } from "./context/ScrollContext";
import AdvityaPopup from "./AdvityaPopup/AdvityaPopup";
import DinoFollower from "./Components/DinoFollower";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const { footerRef } = useScrollContext();

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      {showPopup && (
        <AdvityaPopup onClose={() => setShowPopup(false)} />
      )}
      <div className=" z-9999 select-none pointer-events-none absolute left-[2%] top-[6%] lg:w-20 xl:w-20 opacity-100">
        <DinoFollower/>
      </div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <div ref={footerRef} id="footer">
        <Footer />
      </div>
      <Analytics />
    </>
  );
}
export default App;