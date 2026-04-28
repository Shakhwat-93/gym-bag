import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+8801942212267"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      aria-label="Call Canvas Bag support"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg border-2 border-white/50 group"
      style={{
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <PhoneCall size={24} className="fill-current group-hover:rotate-12 transition-transform" />
      </motion.div>
    </motion.a>
  );
};

export default FloatingCallButton;
