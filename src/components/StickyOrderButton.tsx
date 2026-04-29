import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useLiveStock } from '../hooks/useLiveStock';

const StickyOrderButton = () => {
  const { stockCount } = useLiveStock();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      type="button"
      onClick={scrollToForm}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.35 }}
      className="fixed bottom-6 left-6 z-50 hidden min-h-14 items-center justify-center gap-2 rounded-full bg-[#cc0000] px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_36px_rgba(204,0,0,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#a30000] md:inline-flex"
      aria-label="Order now"
    >
      <ShoppingBag size={18} />
      <span>Order Now</span>
      <span className="hidden rounded-full bg-white/15 px-2 py-0.5 text-xs font-black sm:inline">{stockCount} left</span>
      <ArrowRight size={17} />
    </motion.button>
  );
};

export default StickyOrderButton;
