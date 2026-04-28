import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Frown, Magnet, SmilePlus, XCircle } from 'lucide-react';

const problems = [
  'ঘাম + ধুলা → ফোন নষ্ট হওয়ার ঝুঁকি',
  'workout এর সময় বারবার phone/wallet খুঁজতে হয়',
  'locker এ রাখলে হাতের কাছে থাকে না',
  'মেশিনের পাশে রাখলে হারিয়ে যাওয়ার tension',
  'এটা safe না, smart না',
];

const solutions = [
  'Ultra-strong magnetic grip',
  'Phone, wallet, keys — সব organised',
  'No dirty floor, no messy corner',
  'Crossbody + magnetic use in one product',
  'No tension, no mess — just focus on workout',
];

const ProblemSolution = () => {
  return (
    <section className="bg-brand-50 py-16 border-y border-brand-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Still Keeping Your Phone on Gym Floor?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Sweat, dust, crowd and heavy equipment make the gym floor the worst place for your essentials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-md font-bold text-gray-400 z-10 border border-gray-100">
            VS
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-red-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                <Frown size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">এখনকার Problem</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 font-medium">
                  <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-green-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                <SmilePlus size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Smart Gym Users Switched</h3>
            </div>
            <p className="mb-5 text-gray-700 font-semibold">
              Introducing the Magnetic Gym Crossbody Bag. এখন তুমি চাইলে ব্যাগটা সরাসরি জিমের মেশিনে লাগাতে পারো.
            </p>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-800 font-semibold">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-lg font-black text-gray-900 shadow-sm ring-1 ring-gray-100">
            <Magnet size={22} className="text-accent" />
            <span>Stick it anywhere, keep everything close.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
