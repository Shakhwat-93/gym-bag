import React from 'react';
import { motion } from 'framer-motion';
import productSideImg from '../../assets/4569.webp';
import productFrontImg from '../../assets/789789789dfsdf.webp';
import gymUseImg from '../../assets/894897897.webp';
import productOpenImg from '../../assets/WhatsApp Image 2026-04-28 at 12.25.03 PM.webp';
import SectionOrderCta from './SectionOrderCta';

const images = [
  { src: gymUseImg, label: 'Strong magnetic hold on gym machine' },
  { src: productFrontImg, label: 'Room for bottle and essentials' },
  { src: productSideImg, label: 'Crossbody strap included' },
  { src: productOpenImg, label: 'Smart storage compartments' },
];

const ProductGallery = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">See It In Action</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 font-medium">
            Real gym-friendly design with magnetic hold, bottle space and clean carry options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          {images.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={item.src} alt={item.label} className="aspect-square w-full object-cover" />
              <div className="bg-white p-4 text-sm font-bold text-gray-800">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <SectionOrderCta />
      </div>
    </section>
  );
};

export default ProductGallery;
