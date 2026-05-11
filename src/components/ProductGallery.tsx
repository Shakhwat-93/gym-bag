import React from 'react';
import { motion } from 'framer-motion';
import blackImg from '../../assets/black.webp';
import oliveImg from '../../assets/olive.webp';
import pinkImg from '../../assets/pink.webp';
import whiteImg from '../../assets/white.webp';
import SectionOrderCta from './SectionOrderCta';

const images = [
  { src: blackImg, label: 'Premium Black' },
  { src: oliveImg, label: 'Military Olive' },
  { src: pinkImg, label: 'Blush Pink' },
  { src: whiteImg, label: 'Classic White' },
];

const ProductGallery = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Available Colors</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 font-medium">
            Choose the perfect style that matches your gym outfit. Available in 4 premium colors.
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
              <img src={item.src} alt={item.label} loading="lazy" className="aspect-square w-full object-cover" />
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
