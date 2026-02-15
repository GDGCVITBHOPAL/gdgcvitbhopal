import React from "react";

function DomainBlogs({ blogs, domainColor }) {
    if (!blogs || blogs.length === 0) {
        return (
            <section className="mb-12">
                <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-6">
                    <span className="text-2xl">📝</span>
                    Blogs
                </h2>
                <div className="bg-secondary rounded-2xl p-8 text-center text-muted-foreground">
                    <p>
                        No blogs available yet. Stay tuned for community
                        insights!
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="mb-12">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-6">
                <span className="text-2xl">📝</span>
                Blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <article
                        key={blog.id}
                        className="bg-card border border-border rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <div className="mb-3">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span>{formatDate(blog.date)}</span>
                                <span>{blog.readTime}</span>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                            {blog.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {blog.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 rounded-md text-xs font-medium"
                                    style={{
                                        backgroundColor: `${domainColor}15`,
                                        color: domainColor,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex items-center gap-2.5">
                                <div
                                    className="w-16 h-16 rounded-full overflow-hidden"
                                    style={{
                                        backgroundColor: `${domainColor}30`,
                                    }}
                                >
                                    {blog.authorAvatar ? (
                                        <img
                                            src={blog.authorAvatar}
                                            alt={`${blog.author} avatar`}
                                            className="w-16 h-16 object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-sm font-semibold">
                                            {blog.author.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <span className="text-sm font-medium text-foreground">
                                    {blog.author}
                                </span>
                            </div>
                            <a
                                href={blog.url}
                                className="text-sm font-medium hover:opacity-80 transition-opacity"
                                style={{ color: domainColor }}
                            >
                                Read More →
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default DomainBlogs;
