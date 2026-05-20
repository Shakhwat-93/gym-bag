import React, { useState, useEffect } from 'react';
import { ArrowRight, PackageCheck, ShieldCheck, ShoppingBag } from 'lucide-react';
import desktop1 from '../../assets/hero-desktop.webp';
import desktop2 from '../../assets/hero-desktop-2.webp';
import desktop3 from '../../assets/hero2.webp';
import mobile1 from '../../assets/hero-mobile-1.webp';
import mobile2 from '../../assets/hero-mobile-2.webp';
import mobile3 from '../../assets/hero-mobile-3.webp';
import { useLiveStock } from '../hooks/useLiveStock';

const desktopImages = [desktop1, desktop2, desktop3];
const mobileImages = [mobile1, mobile2, mobile3];
const Hero = () => {
  const { stockCount } = useLiveStock();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
        <div className="relative w-full bg-gray-100">
          {desktopImages.map((_, i) => (
            <picture
              key={i}
              className={`w-full block transition-opacity duration-700 ease-in-out ${
                i === currentIndex ? 'relative opacity-100 z-10' : 'absolute top-0 left-0 opacity-0 z-0'
              }`}
            >
              <source media="(min-width: 768px)" srcSet={desktopImages[i]} />
              <img
                src={mobileImages[i]}
                alt={`Canvas Bag Magnetic Gym Crossbody Bag offer ${i + 1}`}
                className="w-full object-cover"
                fetchpriority={i === 0 ? "high" : "auto"}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </picture>
          ))}
        </div>
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
