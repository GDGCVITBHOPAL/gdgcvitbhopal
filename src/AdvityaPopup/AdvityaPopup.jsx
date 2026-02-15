import React, { useEffect, useState } from "react";
import "./AdvityaPopup.css";

export default function AdvityaPopup({
  onClose,
  eventDate = "2026-02-27T00:00:00",
  eventName = "ADVITYA",
  registerLink = "https://forms.gle/geUHuLxd2PenFN4s8"
}) {
  const targetDate = new Date(eventDate);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="speech-wrapper" onClick={(e) => e.stopPropagation()}>

        <div className="stamp-frame">

          {/* STAMP */}
          <div className="stamp-border">
            <button className="close-btn" onClick={onClose}>✕</button>

            <div className="stamp-core">
              <img src="/AdvityaPopup.avif" alt="poster" />
            </div>
          </div>

          {/* COUNTDOWN */}
          <div className="flex items-start justify-center w-full gap-4 count-down-main">

            {/* DAYS */}
            <div className="timer w-16">
              <div className="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
                <h3 className="countdown-element days font-Cormorant font-semibold text-2xl text-white text-center">
                  {timeLeft.days}
                </h3>
              </div>
              <p className="text-lg font-Cormorant font-medium text-gray-900 mt-1 text-center w-full">
                days
              </p>
            </div>

            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>

            {/* HOURS */}
            <div className="timer w-16">
              <div className="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
                <h3 className="countdown-element hours font-Cormorant font-semibold text-2xl text-white text-center">
                  {timeLeft.hours}
                </h3>
              </div>
              <p className="text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">
                hours
              </p>
            </div>

            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>

            {/* MINUTES */}
            <div className="timer w-16">
              <div className="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
                <h3 className="countdown-element minutes font-Cormorant font-semibold text-2xl text-white text-center">
                  {timeLeft.minutes}
                </h3>
              </div>
              <p className="text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">
                minutes
              </p>
            </div>

            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>

            {/* SECONDS */}
            <div className="timer w-16">
              <div className="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
                <h3 className="countdown-element seconds font-Cormorant font-semibold text-2xl text-white text-center animate-countinsecond">
                  {timeLeft.seconds}
                </h3>
              </div>
              <p className="text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">
                seconds
              </p>
            </div>

          </div>

          {/* REGISTER BUTTON */}
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="register-btn"
          >
            REGISTER NOW
          </a>

        </div>
      </div>
    </div>
  );
}
