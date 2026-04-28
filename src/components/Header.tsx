import React from 'react';
import { PhoneCall, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/logo.webp';

const Header = () => {
  const scrollToForm = () => {
    document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoImg} alt="Canvas Bag" className="h-10 w-10 object-contain rounded-lg bg-black p-1.5" />
          <span className="font-bold text-xl tracking-tight text-gray-900">Canvas Bag</span>
        </div>

        {/* Contact info - Hidden on very small screens */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600">
          <PhoneCall size={16} className="text-green-600" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-green-600 font-bold uppercase tracking-wider">24/7 SUPPORT</span>
            <span className="text-gray-900 font-bold">+8801942-212267</span>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={scrollToForm}
          className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <ShoppingBag size={16} />
          <span>Order Now</span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
