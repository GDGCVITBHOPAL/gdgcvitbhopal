export default function AboutCard() {
    return (
        <section className="w-full min-h-dvh flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-[90vw] md:max-w-[95vw] lg:max-w-[90vw]">

                {/* Card container - Glass effect */}
                <div className="relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl min-h-[85vh] p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl border border-white/50 flex items-center">

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-400/10 rounded-full blur-3xl"></div>

                    {/* Google colors accent bar at top */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                        <div className="flex-1 bg-blue-500"></div>
                        <div className="flex-1 bg-red-500"></div>
                        <div className="flex-1 bg-yellow-400"></div>
                        <div className="flex-1 bg-green-500"></div>
                    </div>

                    {/* Content grid */}
                    <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center gap-10 md:gap-16 lg:gap-20">

                        {/* Left - Heading */}
                        <div className="md:w-1/2">
                            <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 sm:mb-6">
                                About GDG
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                                Do Crazy Things
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500">
                                    That Matter.
                                </span>
                            </h2>
                        </div>

                        {/* Right - Description */}
                        <div className="md:w-1/2">
                            <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10">
                                Google Developer Group on Campus are university-based community groups for students interested in <span className="text-blue-600 font-semibold">Latest technologies</span>. Students from all programs with an interest in growing as a developer are <span className="text-green-600 font-semibold">welcome</span>.
                            </p>

                            {/* Stats */}
                            <div className="flex gap-8 sm:gap-10 lg:gap-12">
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">80+</div>
                                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mt-1">Members</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">10+</div>
                                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mt-1">Events</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">10+</div>
                                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mt-1">Projects</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}