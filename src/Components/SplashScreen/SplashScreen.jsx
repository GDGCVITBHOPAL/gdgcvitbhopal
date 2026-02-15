import { useEffect } from "react";
import leftImg from "/gdg_left_half.png";
import rightImg from "/gdg_right_half.png";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
    useEffect(() => {
        const finishId = setTimeout(() => {
            onFinish?.();
        }, 4000);

        return () => {
            clearTimeout(finishId);
        };
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
            <div className="relative flex flex-col items-center justify-center gap-6">
                <div className="relative flex w-75 h-75 sm:w-100 sm:h-100">
                    {/* Left half */}
                    <img
                        src={leftImg}
                        className="absolute top-20 -left-50 h-50 w-50 splash-left"
                        alt="left"
                    />

                    {/* Right half */}
                    <img
                        src={rightImg}
                        className="absolute top-20 -right-50 h-50 w-50 splash-right"
                        alt="right"
                    />
                </div>
            </div>
        </div>
    );
}
