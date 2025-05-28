'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function FadeInSection({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
} 