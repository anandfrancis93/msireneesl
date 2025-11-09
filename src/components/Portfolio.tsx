'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

// Placeholder images - replace with actual image paths later
const portfolioImages = [
  { id: 1, alt: 'Portfolio Image 1' },
  { id: 2, alt: 'Portfolio Image 2' },
  { id: 3, alt: 'Portfolio Image 3' },
  { id: 4, alt: 'Portfolio Image 4' },
  { id: 5, alt: 'Portfolio Image 5' },
  { id: 6, alt: 'Portfolio Image 6' },
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
    <section className="section-padding bg-dark-surface min-h-screen">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Welcome to my portfolio. Here you'll find a selection of my work. Explore my projects to learn more about what I do.
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
          <div className="relative bg-dark-bg border border-dark-border rounded-2xl overflow-hidden mb-6">
            <div className="aspect-video flex items-center justify-center bg-dark-elevated">
              {/* Placeholder for main image */}
              <div className="flex flex-col items-center gap-4">
                <ImageIcon className="w-24 h-24 text-text-tertiary" />
                <p className="text-text-tertiary text-sm">
                  Portfolio Image {currentImageIndex + 1}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-elevated/90 hover:bg-dark-hover border border-dark-border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-accent-primary" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-elevated/90 hover:bg-dark-hover border border-dark-border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-accent-primary" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-dark-elevated/90 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-border">
              <span className="text-text-primary text-sm font-medium">
                {currentImageIndex + 1} / {portfolioImages.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {portfolioImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => goToImage(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={`aspect-video bg-dark-elevated border-2 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center ${
                  currentImageIndex === index
                    ? 'border-accent-primary ring-2 ring-accent-primary/50'
                    : 'border-dark-border hover:border-accent-primary/50'
                }`}
              >
                {/* Placeholder for thumbnail */}
                <ImageIcon
                  className={`w-8 h-8 ${
                    currentImageIndex === index
                      ? 'text-accent-primary'
                      : 'text-text-tertiary'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
