import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLiveStock } from '../hooks/useLiveStock';

const AnnouncementBar = () => {
  const { stockCount } = useLiveStock();

  return (
    <div className="bg-gradient-to-r from-[#cc0000] via-accent to-[#cc0000] text-white py-2 px-4 shadow-md w-full z-[60] relative overflow-hidden">
      {/* Decorative inner glow/shine */}
      <div className="absolute inset-0 bg-white/20 blur-xl translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
      
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm font-bold tracking-wide text-center">
        <Sparkles size={16} className="text-yellow-300 animate-pulse hidden sm:block" />
        <span className="leading-tight">🔥 বিশাল ধামাকা অফার: ৳1850 এর Magnetic Gym Crossbody Bag এখন মাত্র <span className="text-yellow-300 text-base md:text-lg mx-1">৳1550</span> | Only {stockCount} pcs left</span>
        <Sparkles size={16} className="text-yellow-300 animate-pulse hidden sm:block" />
      </div>
    </div>
  );
};

export default AnnouncementBar;
