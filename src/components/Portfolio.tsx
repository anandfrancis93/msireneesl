'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioImages = [
  { id: 1, src: '/BA.avif', alt: 'BA Portfolio Image' },
  { id: 2, src: '/Workshop.avif', alt: 'Workshop Portfolio Image' },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? portfolioImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="section-padding bg-editorial-bg min-h-screen">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
            My <span className="italic text-editorial-accent">Portfolio</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed">
            A curated selection of my work and professional engagements. Explore the gallery to see my journey in action.
          </p>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Image Display */}
          <div className="relative bg-white p-4 border border-editorial-border shadow-lg mb-8">
            <div className="aspect-video relative bg-editorial-bg overflow-hidden">
              <Image
                src={portfolioImages[currentImageIndex].src}
                alt={portfolioImages[currentImageIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-editorial-border shadow-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-editorial-navy hover:text-editorial-accent"
              aria-label="View previous portfolio image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-editorial-border shadow-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-editorial-navy hover:text-editorial-accent"
              aria-label="View next portfolio image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-editorial-border shadow-sm">
              <span className="text-editorial-navy text-sm font-serif font-medium">
                {currentImageIndex + 1} / {portfolioImages.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-4 gap-4">
            {portfolioImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => goToImage(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={`aspect-video bg-white p-1 border transition-all duration-300 hover:scale-105 relative ${currentImageIndex === index
                    ? 'border-editorial-accent shadow-md'
                    : 'border-editorial-border hover:border-editorial-accent/50'
                  }`}
                aria-label={`View portfolio image ${index + 1}`}
                aria-current={currentImageIndex === index ? 'true' : 'false'}
              >
                <div className="relative w-full h-full bg-editorial-bg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
