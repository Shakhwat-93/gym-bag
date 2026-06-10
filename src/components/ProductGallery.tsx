import React from 'react';
import { motion } from 'framer-motion';
import new1Img from '../../assets/new.png';
import new2Img from '../../assets/new2.png';
import new3Img from '../../assets/new3.png';
import SectionOrderCta from './SectionOrderCta';

const images = [
  { src: new1Img },
  { src: new2Img },
  { src: new3Img },
];

const ProductGallery = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-full">
                <img
                  src={item.src}
                  alt={`Product view ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <SectionOrderCta />
      </div>
    </section>
  );
};

export default ProductGallery;
