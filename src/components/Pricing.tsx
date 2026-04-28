import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock3, Star, Tag, Truck, Wallet } from 'lucide-react';
import productImg from '../../assets/894897897.webp';

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-extrabold text-red-700"
          >
            <Tag size={17} />
            <span>আজকের স্পেশাল অফার</span>
          </motion.div>

          <h2 className="text-3xl font-black leading-tight text-gray-950 md:text-5xl">স্টক শেষ হওয়ার আগেই অর্ডার করুন</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-gray-600">
            Magnetic Gym Crossbody Bag এখন পাচ্ছেন কম দামে. পরে price আবার ৳1850 হয়ে যেতে পারে.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-gradient-to-br from-white via-brand-50 to-orange-50/70 shadow-xl md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[320px] bg-gray-100">
            <img src={productImg} alt="Magnetic Gym Crossbody Bag on gym machine" className="h-full w-full object-cover" />
            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-red-600 shadow-lg">
              Only 17 pcs left
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-4 flex items-center gap-2 text-yellow-400">
              <Star size={19} fill="currentColor" />
              <Star size={19} fill="currentColor" />
              <Star size={19} fill="currentColor" />
              <Star size={19} fill="currentColor" />
              <Star size={19} fill="currentColor" />
              <span className="ml-2 text-sm font-bold text-gray-500">Customer Review</span>
            </div>

            <h3 className="text-2xl font-black text-gray-950 md:text-3xl">Magnetic Gym Crossbody Bag</h3>
            <p className="mt-3 text-base font-semibold text-gray-600">
              Phone, wallet, keys safe রাখুন. জিমের metal machine-এ লাগিয়ে workout করুন tension ছাড়া.
            </p>

            <div className="my-8 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-lg font-extrabold text-gray-400 line-through">৳1850</span>
                <span className="text-5xl font-black text-red-600">৳1650</span>
                <span className="mb-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-black text-accent">আজকের দাম</span>
              </div>
              <p className="mt-3 flex items-center gap-2 text-sm font-bold text-red-600">
                <Clock3 size={16} />
                <span>Offer ending soon — stock limited</span>
              </p>
            </div>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                <CheckCircle size={17} />
                <span>100% Quality Checked</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700">
                <Wallet size={17} />
                <span>Cash on Delivery</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm font-bold text-orange-700 sm:col-span-2">
                <Truck size={17} />
                <span>Fast Delivery All Over Bangladesh</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full rounded-full bg-[#cc0000] px-8 py-4 text-center text-lg font-extrabold text-white shadow-[0_16px_40px_rgba(204,0,0,0.22)] transition-all hover:-translate-y-1 hover:bg-[#a30000]"
            >
              স্টক শেষ হওয়ার আগে অর্ডার করুন
            </button>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <p className="rounded-2xl border border-gray-100 bg-white p-4 text-sm font-semibold text-gray-600 shadow-sm">
                ⭐ “জিমে ফোন রাখার সমস্যা ছিল — এটা perfect solution!”
              </p>
              <p className="rounded-2xl border border-gray-100 bg-white p-4 text-sm font-semibold text-gray-600 shadow-sm">
                ⭐ “Magnet অনেক strong, খুব useful product.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
