import React from "react";

function DomainInfo({ domain }) {
    return (
        <section className="mb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-8">
                <div
                    className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl"
                    style={{ backgroundColor: `${domain.color}20` }}
                >
                    {domain.icon && <domain.icon className="w-8 h-8" />}
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {domain.name}
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {domain.description}
                    </p>
                </div>
            </div>

            {/* Skills and Tools Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Skills Card */}
                <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                        <span className="text-xl">🎯</span>
                        Skills You'll Learn
                    </h3>
                    <ul className="space-y-2.5">
                        {domain.skills.map((skill, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 text-sm md:text-base text-foreground"
                            >
                                <span
                                    className="w-2 h-2 rounded-full shrink-0"
                                    style={{ backgroundColor: domain.color }}
                                />
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools Card */}
                <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                        <span className="text-xl">🛠️</span>
                        Tools & Technologies
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {domain.tools.map((tool, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-3 py-2.5 bg-secondary rounded-lg"
                            >
                                {tool.icon && <tool.icon className="w-5 h-5" />}
                                <span className="text-sm font-medium text-foreground truncate">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DomainInfo;
