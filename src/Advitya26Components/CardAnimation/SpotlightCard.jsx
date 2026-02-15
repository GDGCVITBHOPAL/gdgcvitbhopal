// SpotlightCard Component
// props.children - Content to render inside the card

export default function SpotlightCard({
    children,
    className = "",
    bgColor = "white",
    showGrid = true,
    contentOpacity = 1,
}) {
    return (
        <div className={`relative p-1 ${className}`}>
            {/* Card body - remove justify-center so it can expand */}
            <div
                className="relative w-full h-full rounded-[22px] p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden z-1 shadow-2xl border-2"
                style={{ backgroundColor: bgColor }}
            >
                {/* Grid pattern */}
                {showGrid && (
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }}
                    />
                )}

                {/* Content with optional opacity control */}
                <div
                    className="relative z-2 h-full"
                    style={{
                        opacity: contentOpacity,
                        transition: "opacity 0.15s ease-out",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}