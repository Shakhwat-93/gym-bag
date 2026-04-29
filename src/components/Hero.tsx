import React from 'react';
import { ArrowRight, PackageCheck, ShieldCheck, ShoppingBag } from 'lucide-react';
import heroDesktopImg from '../../assets/hero-desktop.webp';
import heroMobileImg from '../../assets/hero-mobile.webp';
import { useLiveStock } from '../hooks/useLiveStock';

const Hero = () => {
  const { stockCount } = useLiveStock();

  const scrollToForm = () => {
    document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="overflow-hidden bg-white">
      <button
        type="button"
        onClick={scrollToForm}
        className="block w-full cursor-pointer bg-black text-left"
        aria-label="Order Magnetic Gym Crossbody Bag"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktopImg} />
          <img
            src={heroMobileImg}
            alt="Canvas Bag Magnetic Gym Crossbody Bag offer"
            className="w-full object-cover"
            fetchPriority="high"
          />
        </picture>
      </button>

      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-extrabold text-red-700">
              <PackageCheck size={16} />
              <span>Only {stockCount} pcs left</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700">
              <ShoppingBag size={16} />
              <span>Live selling now</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
              <ShieldCheck size={16} />
              <span>Cash on Delivery</span>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#cc0000] px-8 py-3 text-base font-extrabold text-white shadow-[0_12px_30px_rgba(204,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#a30000] md:w-auto"
          >
            <span>অর্ডার করুন</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
