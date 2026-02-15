import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function OlympicRings({
    width = 600,
    height = 400,
    responsive = false,
    className = "",
    style = {},
    ringSize = 60,
    strokeWidth = 10,
    assembleY = 0.55,
    finalY = 0.25,
    startFromBelow = false,
    onFadeStart = () => { },
}) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const tlRef = useRef(null);
    const onFadeStartRef = useRef(onFadeStart);
    const [containerOpacity, setContainerOpacity] = useState(1);

    // Keep the callback ref updated
    useEffect(() => {
        onFadeStartRef.current = onFadeStart;
    }, [onFadeStart]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setup = () => {
            const rect = container.getBoundingClientRect();
            const cssWidth = Math.max(1, Math.floor(rect.width));
            const cssHeight = Math.max(1, Math.floor(rect.height));
            const dpr = window.devicePixelRatio || 1;

            canvas.width = cssWidth * dpr;
            canvas.height = cssHeight * dpr;
            canvas.style.width = `${cssWidth}px`;
            canvas.style.height = `${cssHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const centerX = cssWidth / 2;
            const assembleYPos = cssHeight * assembleY;
            const finalYPos = cssHeight * finalY;
            const rowOffset = ringSize * 0.6;
            const spacing = ringSize * 1.6;
            const belowY = cssHeight + ringSize * 2;

            const initialTopY = startFromBelow ? belowY : assembleYPos;
            const initialBottomY = startFromBelow
                ? belowY
                : cssHeight + ringSize * 2;

            const rings = [
                {
                    x: -ringSize * 2,
                    y: initialTopY,
                    r: ringSize,
                    color: "#0085C7",
                    glow: 0,
                },
                {
                    x: centerX,
                    y: startFromBelow ? belowY : -ringSize * 2,
                    r: ringSize,
                    color: "#000000",
                    glow: 0,
                },
                {
                    x: cssWidth + ringSize * 2,
                    y: initialTopY,
                    r: ringSize,
                    color: "#DF0024",
                    glow: 0,
                },
                {
                    x: centerX - spacing / 2,
                    y: initialBottomY,
                    r: ringSize,
                    color: "#F4C300",
                    glow: 0,
                },
                {
                    x: centerX + spacing / 2,
                    y: initialBottomY,
                    r: ringSize,
                    color: "#009F3D",
                    glow: 0,
                },
            ];

            const draw = () => {
                ctx.clearRect(0, 0, cssWidth, cssHeight);

                rings.forEach((ring) => {
                    ctx.save();
                    ctx.shadowBlur = ring.glow;
                    ctx.shadowColor = ring.color;

                    ctx.beginPath();
                    ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
                    ctx.strokeStyle = ring.color;
                    ctx.lineWidth = strokeWidth;
                    ctx.stroke();

                    ctx.restore();
                });
            };

            tlRef.current?.kill();
            const tl = gsap.timeline({ onUpdate: draw });
            tlRef.current = tl;

            // 1️⃣ Fly in from edges and assemble
            tl.to(rings, {
                duration: 0.6,
                ease: "power3.out",
                x: (i) =>
                    [
                        centerX - spacing,
                        centerX,
                        centerX + spacing,
                        centerX - spacing / 2,
                        centerX + spacing / 2,
                    ][i],
                y: (i) => (i < 3 ? assembleYPos : assembleYPos + rowOffset),
                stagger: 0.16,
            });

            // 2️⃣ Fusion glow moment
            tl.to(rings, {
                glow: 32,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.05,
            }).to(rings, {
                glow: 0,
                duration: 0.6,
                ease: "power2.inOut",
            });

            // 3️⃣ Lift combined logo to top like a heading
            tl.to(rings, {
                duration: 0.6,
                ease: "power3.inOut",
                y: (i) =>
                    i < 3
                        ? finalYPos - ringSize * 0.2
                        : finalYPos + rowOffset - ringSize * 0.2,
                stagger: 0.04,
            });

            // 4️⃣ Now Atlast Fade out the rings
            // starts slightly before lift ends (-=0.3)
            tl.to({ opacity: 1 }, {
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
                onStart: () => {
                    onFadeStartRef.current();
                },
                onUpdate: function () {
                    setContainerOpacity(this.targets()[0].opacity);
                },
            }, "-=0.3");

            draw();
        };

        setup();

        const resizeObserver = new ResizeObserver(() => setup());
        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
            tlRef.current?.kill();
        };
    }, [
        responsive,
        width,
        height,
        ringSize,
        strokeWidth,
        assembleY,
        finalY,
        startFromBelow,
    ]);

    const resolvedStyle = {
        width: responsive
            ? "100%"
            : typeof width === "number"
                ? `${width}px`
                : width,
        height: responsive
            ? "100%"
            : typeof height === "number"
                ? `${height}px`
                : height,
        ...style,
    };

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ ...resolvedStyle, opacity: containerOpacity }}
        >
            <canvas
                ref={canvasRef}
                className="block"
                role="img"
                aria-label="Olympic rings animation"
            />
        </div>
    );
}
