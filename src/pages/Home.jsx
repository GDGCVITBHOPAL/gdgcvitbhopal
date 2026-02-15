import React from "react";
import HeroSection from "@/Components/HeroSection/HeroSectionContainer.jsx";
import WhoWeAre from "@/Components/WhoWeAre/WhoWeAre.jsx";
import EventsSectionContainer from "@/Components/EventsSection/EventsSectionContainer.jsx";
import MembersPanel from "@/Components/memberspanel/memberspanel.jsx";
import { useScrollContext } from "@/context/ScrollContext";

function Home() {
    const { eventsRef } = useScrollContext();

    return (
        <>
            <HeroSection />
            <WhoWeAre />
            <div ref={eventsRef} id="events-section">
                <EventsSectionContainer />
            </div>
            <MembersPanel />
        </>
    );
}

export default Home;
