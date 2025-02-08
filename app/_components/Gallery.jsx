"use client";

import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = memo(({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(0);

  const openLightbox = (img, idx) => {
    setSelectedImage(img);
    setIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(index + 1) % images.length]);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setSelectedImage(images[(index - 1 + images.length) % images.length]);
  };

  return (
    <>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={img.src}
              alt={img.alt || "Gallery image"}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              onClick={() => openLightbox(img, idx)}
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-3xl w-full flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage?.src} 
                alt={selectedImage?.alt} 
                className="rounded-lg max-h-[80vh] w-auto" 
              />
              <button
                className="absolute top-4 right-4 bg-gray-900 text-white p-2 rounded-full"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
              <button
                className="absolute left-4 bg-gray-900 text-white p-2 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 bg-gray-900 text-white p-2 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Gallery;
