import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const PopupOffer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ type: 'spring', damping: 22, stiffness: 260 }}
          onAnimationComplete={() => window.setTimeout(() => setIsOpen(false), 5500)}
          className="fixed bottom-24 left-4 z-[90] max-w-[310px] rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl md:left-6"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
              <ShoppingBag size={19} />
            </div>
            <div>
              <p className="text-sm font-black text-gray-900">Someone from Dhaka just ordered</p>
              <p className="mt-1 text-xs font-semibold text-gray-500">Magnetic Gym Crossbody Bag • Cash on Delivery</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupOffer;
