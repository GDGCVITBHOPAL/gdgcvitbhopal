import EventsDesktop from "./EventsDesktop";
import EventsMobile from "./EventsMobile";
import "./events.css";

function EventsSectionContainer() {
    return (
        <>
            {/* Desktop - visible on lg screens and above */}
            <div className="hidden lg:block">
                <EventsDesktop />
            </div>

            {/* Mobile - visible on screens smaller than lg */}
            <div className="lg:hidden">
                <EventsMobile />
            </div>
        </>
    );
}

export default EventsSectionContainer;
