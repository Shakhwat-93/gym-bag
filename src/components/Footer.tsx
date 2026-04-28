import React from 'react';
import logoImg from '../../assets/logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-950 text-brand-300 py-10 border-t border-brand-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Canvas Bag" className="h-10 w-10 object-contain rounded-lg bg-white/10 p-1.5" />
          <span className="font-bold text-xl tracking-tight text-white">Canvas Bag</span>
        </div>

        <div className="text-center md:text-left text-sm">
          <p>© {currentYear} Canvas Bag BD. All rights reserved.</p>
          <p className="mt-1 text-brand-500">Premium everyday carry for active people.</p>
        </div>

        <div className="flex gap-4 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
