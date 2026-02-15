import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react"

function CountingNumber({
  ref,
  number,
  fromNumber = 0,
  padStart = false,
  inView = false,
  inViewMargin = "0px",
  inViewOnce = true,
  decimalSeparator = ".",
  transition = { stiffness: 90, damping: 50 },
  decimalPlaces = 0,
  className,
  ...props
}) {
  const localRef = React.useRef(null)
  React.useImperativeHandle(ref, () => localRef.current)
  const numberStr = number.toString()
  const decimals =
    typeof decimalPlaces === "number"
      ? decimalPlaces
      : numberStr.includes(".")
        ? (numberStr.split(".")[1]?.length ?? 0)
        : 0
  const motionVal = useMotionValue(fromNumber)
  const springVal = useSpring(motionVal, transition)
  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  })
  const isInView = !inView || inViewResult
  React.useEffect(() => {
    if (isInView) {
      motionVal.set(number)
    }
  }, [isInView, number, motionVal])
  React.useEffect(() => {
    const unsubscribe = springVal.on("change", latest => {
      if (localRef.current) {
        let formatted = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
        if (decimals > 0) {
          formatted = formatted.replace(".", decimalSeparator)
        }
        if (padStart) {
          const finalIntLength = Math.floor(Math.abs(number)).toString().length
          const [intPart, fracPart] = formatted.split(decimalSeparator)
          const paddedInt = intPart?.padStart(finalIntLength, "0") ?? ""
          formatted = fracPart ? `${paddedInt}${decimalSeparator}${fracPart}` : paddedInt
        }
        localRef.current.textContent = formatted
      }
    })
    return () => unsubscribe()
  }, [springVal, decimals, padStart, number, decimalSeparator])
  const finalIntLength = Math.floor(Math.abs(number)).toString().length
  const initialText = padStart
    ? "0".padStart(finalIntLength, "0") +
      (decimals > 0 ? decimalSeparator + "0".repeat(decimals) : "")
    : `0${decimals > 0 ? decimalSeparator + "0".repeat(decimals) : ""}`
  return (
    <span className={className} data-slot="counting-number" ref={localRef} {...props}>
      {initialText}
    </span>
  )
}

export default function AdvityaCountdown({ 
  displayDuration = 5000,
  onComplete 
}) {
  const [isVisible, setIsVisible] = useState(true)
  const [startCounting, setStartCounting] = useState(false)
  const [scrolledUp, setScrolledUp] = useState(false)

  useEffect(() => {
    setTimeout(() => setStartCounting(true), 300)

    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolledUp) {
        setScrolledUp(true)
      }
    }

    const hideTimer = setTimeout(() => {
      setScrolledUp(true)
      setTimeout(() => {
        setIsVisible(false)
        if (onComplete) onComplete()
      }, 800)
    }, displayDuration)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(hideTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [displayDuration, onComplete, scrolledUp])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: scrolledUp ? 0 : 1, 
            y: scrolledUp ? '-100%' : 0 
          }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: '#FFFDD0',
            pointerEvents: scrolledUp ? 'none' : 'auto'
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
              
              <Year2026Display startCounting={startCounting} />
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Year2026Display({ startCounting }) {
  const [displayNumber, setDisplayNumber] = React.useState(0);
  const colors = ['#0085C7', '#F4C300', '#DF0024', '#009F3D'];
  
  React.useEffect(() => {
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
      } else {
        setDisplayNumber(Math.floor(current));
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [startCounting]);
  
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