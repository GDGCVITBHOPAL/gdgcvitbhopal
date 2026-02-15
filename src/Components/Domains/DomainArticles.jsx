import React from "react";
import {
    BookOpen,
    GraduationCap,
    PenTool,
    Users,
    Package,
    Palette,
    FileText,
    ChevronRight,
    Library,
} from "lucide-react";

function DomainArticles({ articles, domainColor }) {
    if (!articles || articles.length === 0) {
        return (
            <section className="mb-12">
                <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-6">
                    <Library
                        className="w-6 h-6"
                        style={{ color: domainColor }}
                    />
                    Learning Resources
                </h2>
                <div className="bg-secondary rounded-2xl p-8 text-center text-muted-foreground">
                    <p>No articles available yet. Check back soon!</p>
                </div>
            </section>
        );
    }

    const getTypeIcon = (type) => {
        const iconProps = {
            className: "w-6 h-6",
            style: { color: domainColor },
        };
        switch (type) {
            case "Documentation":
                return <BookOpen {...iconProps} />;
            case "Learning Resource":
                return <GraduationCap {...iconProps} />;
            case "Blog":
                return <PenTool {...iconProps} />;
            case "Community":
                return <Users {...iconProps} />;
            case "Resource":
                return <Package {...iconProps} />;
            case "Design System":
                return <Palette {...iconProps} />;
            default:
                return <FileText {...iconProps} />;
        }
    };

    return (
        <section className="mb-12">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-6">
                <Library className="w-6 h-6" style={{ color: domainColor }} />
                Learning Resources
            </h2>
            <div className="flex flex-col gap-3">
                {articles.map((article) => (
                    <a
                        key={article.id}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl no-underline transition-all duration-200 hover:bg-secondary hover:translate-x-1"
                    >
                        <div
                            className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${domainColor}15` }}
                        >
                            {getTypeIcon(article.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-foreground mb-0.5">
                                {article.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-1 truncate hidden md:block">
                                {article.description}
                            </p>
                            <span
                                className="text-xs font-medium"
                                style={{ color: domainColor }}
                            >
                                {article.type}
                            </span>
                        </div>
                        <div
                            className="shrink-0 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                            style={{ color: domainColor }}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default DomainArticles;
