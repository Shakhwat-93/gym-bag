import React from 'react';
import { Headphones, ShieldCheck, Truck } from 'lucide-react';
import logoImg from '../../assets/logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const trustItems = [
    { icon: <ShieldCheck size={18} />, label: 'Cash on Delivery' },
    { icon: <Truck size={18} />, label: 'Fast BD Delivery' },
    { icon: <Headphones size={18} />, label: '+8801942-212267' },
  ];
  
  return (
    <footer className="relative border-t border-red-100 bg-white pb-24 pt-10 md:pb-12">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#cc0000] via-accent to-[#cc0000]"></div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Canvas Bag" className="h-12 w-12 rounded-2xl border border-gray-100 bg-white object-contain p-2 shadow-sm" />
              <div>
                <p className="text-xl font-black tracking-tight text-gray-950">Canvas Bag</p>
                <p className="text-sm font-semibold text-gray-500">Premium everyday carry for active people.</p>
              </div>
            </div>

            <p className="mt-5 text-sm font-semibold leading-6 text-gray-600">
              Magnetic Gym Crossbody Bag for gym, walking, travel and daily essentials. Clean look, strong utility, easy ordering.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:min-w-[520px]">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-bold text-gray-800">
                <span className="text-[#cc0000]">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6 text-sm font-semibold text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Canvas Bag BD. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-[#cc0000]">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-[#cc0000]">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-[#cc0000]">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
