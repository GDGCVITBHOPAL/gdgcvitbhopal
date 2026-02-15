import React from "react";
import { Rocket, FolderOpen, Github, ExternalLink, Star } from "lucide-react";

function DomainProjects({ projects, domainColor }) {
    if (!projects || projects.length === 0) {
        return (
            <section className="mb-12">
                <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-6">
                    <Rocket
                        className="w-6 h-6"
                        style={{ color: domainColor }}
                    />
                    Projects
                </h2>
                <div className="bg-secondary rounded-2xl p-8 text-center text-muted-foreground">
                    <p>No projects available yet. Stay tuned!</p>
                </div>
            </section>
        );
    }

    return (
        <section className="mb-12">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-6">
                <Rocket className="w-6 h-6" style={{ color: domainColor }} />
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`
                            bg-card border border-border rounded-2xl overflow-hidden relative
                            transition-all duration-200 hover:-translate-y-1 hover:shadow-xl
                            ${project.featured ? "border-2" : ""}
                        `}
                        style={
                            project.featured ? { borderColor: domainColor } : {}
                        }
                    >
                        {project.featured && (
                            <div
                                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white z-10 flex items-center gap-1"
                                style={{ backgroundColor: domainColor }}
                            >
                                <Star className="w-3 h-3" /> Featured
                            </div>
                        )}
                        <div className="aspect-video overflow-hidden">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex items-center justify-center"
                                    style={{
                                        backgroundColor: `${domainColor}15`,
                                    }}
                                >
                                    <FolderOpen
                                        className="w-12 h-12 opacity-50"
                                        style={{ color: domainColor }}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2.5 py-1 border rounded-full text-xs font-medium text-foreground"
                                        style={{ borderColor: domainColor }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                        style={{ backgroundColor: domainColor }}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default DomainProjects;
