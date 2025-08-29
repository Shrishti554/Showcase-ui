import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { features } from "../data/featuresData";
import { FeatureShowcaseProps } from "../types/feature";

const fadeIn: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const nextFeature = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScrollable = rect.height + viewportHeight;

      const scrollProgress = Math.min(
        Math.max((viewportHeight - rect.top) / totalScrollable, 0),
        1
      );

      const newIndex = Math.min(
        features.length - 1,
        Math.floor(scrollProgress * features.length)
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className={`feature-showcase relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side with iPhone and info */}
          <div className="relative">
            <div className="mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`feature-no-${activeIndex}`}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="text-blue-500 text-lg font-medium mb-2"
                >
                  Feature No.{activeIndex + 1}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeIndex}`}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                >
                  {features[activeIndex].title}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${activeIndex}`}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="text-lg text-gray-600"
                >
                  {features[activeIndex].description}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Phone Display */}
            <div className="relative w-[300px] mx-auto mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`phone-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full aspect-[9/19.5] rounded-[3rem] overflow-hidden shadow-2xl"
                  style={{
                    background: features[activeIndex].gradient,
                  }}
                ></motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevFeature}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Previous feature"
                title="Previous feature"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                onClick={nextFeature}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Next feature"
                title="Next feature"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Right side - Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Select ${feature.title}`}
                aria-pressed={activeIndex === index}
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  activeIndex === index
                    ? "bg-white shadow-lg transform scale-105"
                    : "bg-transparent hover:bg-white/50"
                }`}
                title={feature.title}
              >
                <div className="flex items-start">
                  <div className="mr-4 pt-1">
                    <div
                      className={`w-1 h-16 rounded-full transition-all ${
                        activeIndex === index ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Feature {index + 1}
                    </h3>
                    <p className="text-gray-500">{feature.shortDescription}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
