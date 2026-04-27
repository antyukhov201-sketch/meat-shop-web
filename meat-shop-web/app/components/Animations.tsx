"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const variants = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    scale: { opacity: 0, scale: 0.92 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <ScrollReveal direction="up" delay={delay} className={className}>{children}</ScrollReveal>;
}

export function FadeInLeft({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <ScrollReveal direction="left" delay={delay} className={className}>{children}</ScrollReveal>;
}

export function FadeInRight({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <ScrollReveal direction="right" delay={delay} className={className}>{children}</ScrollReveal>;
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <ScrollReveal direction="scale" delay={delay} className={className}>{children}</ScrollReveal>;
}