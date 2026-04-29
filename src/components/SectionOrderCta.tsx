import React from 'react';
import { ArrowRight, PackageCheck, ShoppingBag } from 'lucide-react';
import { useLiveStock } from '../hooks/useLiveStock';

const SectionOrderCta = () => {
  const { stockCount } = useLiveStock();

  const scrollToForm = () => {
    document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-4 rounded-[2rem] border border-red-100 bg-gradient-to-r from-red-50 via-white to-orange-50 px-5 py-6 text-center shadow-sm">
      <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-extrabold text-red-600 shadow-sm">
        <PackageCheck size={16} />
        <span>Only {stockCount} pcs left in stock</span>
      </div>

      <div className="space-y-2">
        <p className="text-xl font-black text-gray-950 md:text-2xl">পছন্দ হলে এখনই অর্ডার করুন</p>
        <p className="text-sm font-semibold text-gray-600">স্টক কমে যাওয়ার আগেই checkout complete করুন।</p>
      </div>

      <button
        type="button"
        onClick={scrollToForm}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#cc0000] px-8 py-3 text-base font-extrabold text-white shadow-[0_14px_34px_rgba(204,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#a30000]"
      >
        <ShoppingBag size={18} />
        <span>অর্ডার করুন</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default SectionOrderCta;
