import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home";
import Tech from "./pages/Tech";
import NonTech from "./pages/NonTech";
import AllEvents from "./pages/AllEventsPage";
import AboutUs from "./pages/AboutUs";
import EventRegistration from "./pages/EventRegistration";
import Advitya from "./pages/Advitya";
import AdvityaFAQs from "./Advitya26Components/AdvityaFAQs";
import { ScrollProvider } from "./context/ScrollContext";

function ScrollToTop() {
    const { pathname } = useLocation();
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                } else {
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }
            }, 0);
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [pathname, hash]);

    return null;
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollProvider>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route
                            path="/teams/tech/:teamParam"
                            element={<Tech />}
                        />
                        <Route
                            path="/teams/nonTech/:teamParam"
                            element={<NonTech />}
                        />
                        <Route path="allEvents" element={<AllEvents />} />{" "}
                        <Route
                            path="event-registration"
                            element={<EventRegistration />}
                        />{" "}
                        <Route path="about" element={<AboutUs />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                    <Route path="/advitya" element={<Advitya />} />
                    <Route path="/advitya/faqs" element={<AdvityaFAQs />} />
                </Routes>
            </ScrollProvider>
        </BrowserRouter>
    </StrictMode>,
);
