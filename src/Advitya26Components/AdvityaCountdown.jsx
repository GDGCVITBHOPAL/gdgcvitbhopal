import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdvityaCountdown({ onFinish }) {
  const [startCounting, setStartCounting] = useState(false)

  const handleCountComplete = useCallback(() => {
    // After the counter reaches 2026 wait 300 milisecond
    const finishId = setTimeout(() => {
      onFinish()
    }, 500)
    return () => clearTimeout(finishId)
  }, [onFinish])

  useEffect(() => {
    // Delay before starting the countdown
    const startId = setTimeout(() => setStartCounting(true), 300)
    return () => clearTimeout(startId)
  }, [])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#FFFDD0',
      }}
    >

      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(66, 133, 244, 0.3) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(234, 67, 53, 0.2) 0%, transparent 60%)'
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center px-4 gap-6"
      >

        <div className="flex items-baseline gap-3 md:gap-6">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight"
            style={{
              fontFamily: "'Fredericka the Great', cursive",
              color: '#000000',
              textShadow: '3px 3px 0px rgba(66, 133, 244, 0.2)'
            }}
          >
            Advitya
          </h1>

          <Year2026Display startCounting={startCounting} onCountComplete={handleCountComplete} />
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >


          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function Year2026Display({ startCounting, onCountComplete }) {
  const [displayNumber, setDisplayNumber] = React.useState(0);
  const colors = ['#0085C7', '#F4C300', '#DF0024', '#009F3D'];

  useEffect(() => {
    if (!startCounting) return;

    let current = 0;
    const target = 2026;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayNumber(target);
        clearInterval(timer);
        onCountComplete();
      } else {
        setDisplayNumber(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [startCounting, onCountComplete]);

  const digits = displayNumber.toString().padStart(4, '0').split('');

  return (
    <div
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
      style={{
        fontFamily: "'Fredericka the Great', cursive",
        letterSpacing: '0.05em',
        display: 'inline-flex'
      }}
    >
      {digits.map((digit, index) => (
        <span key={index} style={{ color: colors[index % colors.length] }}>
          {digit}
        </span>
      ))}
    </div>
  );
}