"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { MessageCircle } from "lucide-react"

export function WhatsappButton() {
  const [showTooltip, setShowTooltip] = React.useState(false)

  // Show tooltip briefly after mount to draw attention
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
      // Hide after 5 seconds
      const hideTimer = setTimeout(() => setShowTooltip(false), 5000)
      return () => clearTimeout(hideTimer)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleChatRedirect = () => {
    // Open a mockup WhatsApp chat link for Khan Builders Advisor
    const phoneNumber = "8801700000000" // Mock premium Dhaka number
    const message = encodeURIComponent(
      "Hi Khan Builders, I'm interested in viewing your premium luxury properties. Could you please connect me with a sales advisor?"
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            className="hidden sm:block bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 border border-accent/20 px-4 py-2 rounded-xl text-xs font-semibold shadow-xl shadow-gold"
          >
            <span className="text-accent mr-1">✦</span> Talk to a Property Advisor
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={handleChatRedirect}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-[#25d366] text-white hover:bg-[#20ba5a] shadow-lg shadow-green-500/20 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Contact Khan Builders on WhatsApp"
      >
        {/* Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 group-hover:scale-110 transition-transform duration-300 animate-ping -z-10" />
        
        {/* Inner Gold Border Ring */}
        <span className="absolute inset-0.5 rounded-full border border-white/20 -z-10" />

        {/* Custom SVG Icon or Lucide Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-[#25d366] group-hover:rotate-12 transition-transform duration-300" />
      </motion.button>
    </div>
  )
}
