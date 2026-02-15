import React from "react";
import { Link } from "react-router-dom";

function DomainNavigation({ domains, activeDomainId, basePath, categoryName }) {
    return (
        <div className="sticky top-14 lg:top-10 z-40 bg-background border-b border-border py-3">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-3">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {categoryName}
                </h2>
            </div>
            <nav className="max-w-7xl mx-auto px-4 lg:px-6 overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 min-w-max">
                    {domains.map((domain) => (
                        <Link
                            key={domain.id}
                            to={`${basePath}/${domain.id}`}
                            className={`
                                flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                                whitespace-nowrap transition-all duration-200
                                ${
                                    activeDomainId === domain.id
                                        ? "text-white shadow-lg"
                                        : "bg-secondary text-foreground hover:bg-accent hover:-translate-y-0.5"
                                }
                            `}
                            style={
                                activeDomainId === domain.id
                                    ? {
                                          backgroundColor: domain.color,
                                          boxShadow: `0 4px 12px ${domain.color}4D`,
                                      }
                                    : {}
                            }
                        >
                            <span className="text-lg">
                                {domain.icon && (
                                    <domain.icon className="w-5 h-5" />
                                )}
                            </span>
                            <span className="hidden sm:inline">
                                {domain.shortName}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default DomainNavigation;
