import { Button } from "@/shadcn/ui/button.jsx";
import { Link } from "react-router-dom";
import leftBracket from "@/assets/EventsSectionAssets/leftBracket.svg";
import rightBracket from "@/assets/EventsSectionAssets/rightBracket.svg";
import wheel from "@/assets/EventsSectionAssets/wheel.svg";
import gdgBadge from "@/assets/EventsSectionAssets/gdgBadge.svg";
import event1 from "@/assets/EventsSectionAssets/event1.jpeg";
import event2 from "@/assets/EventsSectionAssets/event2.jpeg";
import event3 from "@/assets/EventsSectionAssets/event3.jpeg";

const events = [
    {
        title: "Tech Winter Break 2024",
        date: "14 December 2024",
        accent: "bg-yellow-400",
        img: event1,
    },
    {
        title: "Build With AI",
        date: "6 April 2025",
        accent: "bg-blue-500",
        img: event2,
    },
    {
        title: "Speaker Session",
        date: "28 December 2025",
        accent: "bg-red-500",
        img: event3,
    },
];

function EventsDesktop() {
    return (
        <section className="w-full bg-white py-14">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6">
                <div className="flex justify-between">
                    <img
                        src={wheel}
                        alt="Decorative wheel"
                        className="h-30 w-30 wheel-rotate"
                    />
                    <div className="flex items-center justify-center gap-15 w-250">
                        <img
                            src={leftBracket}
                            alt="Left bracket"
                            className="h-25"
                        />
                        <h2 className="text-4xl font-extrabold text-black">
                            Events
                        </h2>
                        <img
                            src={rightBracket}
                            alt="Right bracket"
                            className="h-25"
                        />
                    </div>
                    <img
                        src={wheel}
                        alt="Decorative wheel"
                        className="h-30 w-30 wheel-rotate"
                    />
                </div>

                <div className="grid w-full grid-cols-3 gap-8">
                    {events.map((event) => (
                        <article
                            key={event.title}
                            className="group relative rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0_0_#111] transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                        >
                            <div
                                className={`h-4 w-full rounded-t-2xl ${event.accent}`}
                            />
                            <div className="relative px-5 pb-5 pt-4">
                                <div className="flex h-40 items-center justify-center rounded-xl border-2 border-black bg-slate-100 text-sm font-semibold text-slate-600">
                                    <img
                                        src={event.img}
                                        alt={event.title}
                                        className="h-full w-full object-cover rounded-xl"
                                    />
                                </div>
                                <div className="mt-4 space-y-1">
                                    <h3 className="text-lg font-bold text-black">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-600">
                                        {event.date}
                                    </p>
                                </div>
                                <img
                                    src={gdgBadge}
                                    alt="GDG badge"
                                    className="absolute bottom-1 right-4 h-20 w-20 rounded-md "
                                />
                            </div>
                        </article>
                    ))}
                </div>

                <Button
                    asChild
                    className="rounded-full bg-linear-to-r from-emerald-300 to-green-400 px-6 py-6 text-base font-semibold text-black shadow-[3px_3px_0_0_#111] hover:from-emerald-400 hover:to-green-500"
                >
                    <Link to="/allEvents">🎉 View All Events</Link>
                </Button>
            </div>
        </section>
    );
}

export default EventsDesktop;
