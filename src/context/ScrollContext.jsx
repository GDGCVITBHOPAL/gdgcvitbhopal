import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
    const eventsRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const scrollToEvents = () => {
        if (eventsRef.current) {
            eventsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToFooter = () => {
        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ScrollContext.Provider
            value={{
                eventsRef,
                footerRef,
                scrollToTop,
                scrollToEvents,
                scrollToFooter,
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
}

export function useScrollContext() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScrollContext must be used within ScrollProvider");
    }
    return context;
}
