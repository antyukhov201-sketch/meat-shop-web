"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { totalItems, setIsOpen, showFlyingItem } = useCart();
  const [showFlyingDot, setShowFlyingDot] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative flex items-center justify-center text-cream-muted hover:text-gold transition-colors"
      aria-label="Warenkorb"
    >
      <AnimatePresence>
        {showFlyingDot && (
          <motion.div
            initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 0.5, x: -50, y: 20 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="absolute w-3 h-3 rounded-full"
            style={{ background: '#c9a227' }}
            onAnimationComplete={() => setShowFlyingDot(false)}
          />
        )}
      </AnimatePresence>
      
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        animate={showFlyingItem ? {
          scale: [1, 1.3, 1, 1.2, 1],
        } : undefined}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </motion.svg>
      
      {totalItems > 0 && (
        <motion.span 
          className="absolute -top-2 -right-2 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          style={{ background: '#c9a227', color: '#121212' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          key={totalItems}
        >
          {totalItems}
        </motion.span>
      )}
    </button>
  );
}