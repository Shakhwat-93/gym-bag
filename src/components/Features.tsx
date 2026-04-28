import React from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  CheckCircle2,
  Droplets,
  Dumbbell,
  Feather,
  Footprints,
  Magnet,
  Plane,
  Repeat2,
  WalletCards,
} from 'lucide-react';

const featuresList = [
  {
    icon: <Magnet size={24} />,
    title: 'Ultra-Strong Magnetic Grip',
    desc: 'জিমের যেকোনো metal surface এ easily stick করে, তাই essentials সবসময় চোখের সামনে থাকে.',
  },
  {
    icon: <WalletCards size={24} />,
    title: 'Smart Storage System',
    desc: 'Phone, wallet, keys, earbuds — সব organised, আলাদা pocket এ clean ভাবে রাখা যায়.',
  },
  {
    icon: <Droplets size={24} />,
    title: 'Water-Resistant Material',
    desc: 'Sweat & splash protection, তাই workout এর সময় bag নিয়ে extra tension নেই.',
  },
  {
    icon: <Repeat2 size={24} />,
    title: 'Crossbody + Magnetic Use',
    desc: 'চাইলে crossbody হিসেবে পরো, চাইলে gym machine এ stick করো.',
  },
  {
    icon: <Feather size={24} />,
    title: 'Lightweight & Stylish',
    desc: 'Gym + outdoor — দুই জায়গাতেই use করা যায়, compact কিন্তু premium look.',
  },
];

const useCases = [
  { icon: <Dumbbell size={22} />, label: 'জিম ওয়ার্কআউট' },
  { icon: <Footprints size={22} />, label: 'রানিং / হাঁটা' },
  { icon: <Plane size={22} />, label: 'ট্রাভেল / আউটডোর' },
  { icon: <BriefcaseBusiness size={22} />, label: 'ডেইলি ইউজ' },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          >
            Why You’ll Love It
          </motion.h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A smarter way to keep your essentials clean, safe and close during every workout.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-50 rounded-2xl p-5 hover:shadow-lg transition-shadow border border-transparent hover:border-brand-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white text-accent flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-black text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-6">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-4 p-2"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-accent flex items-center justify-center shrink-0 mt-1">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 20 })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-gray-100 bg-gradient-to-br from-white via-brand-50 to-orange-50/60 p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-accent">Use Anywhere</p>
              <h3 className="mt-2 text-2xl font-black text-gray-950 md:text-3xl">যাদের জন্য একদম পারফেক্ট</h3>
              <p className="mt-2 text-sm font-semibold text-gray-600">Gym, walking, travel বা daily use — essentials সবসময় clean আর হাতের কাছে.</p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
              <CheckCircle2 size={16} />
              <span>100% Quality Checked</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {useCases.map((item) => (
              <div key={item.label} className="flex min-h-[86px] flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-200 hover:shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-accent">{item.icon}</span>
                <span className="mt-3 text-sm font-black text-gray-900">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
