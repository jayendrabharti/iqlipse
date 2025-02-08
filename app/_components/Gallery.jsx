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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
      {images.map((img, idx) => (
        <div 
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg flex relative aspect-square hover:scale-105 transition-all duration-200 items-center justify-center"
            onClick={() => openLightbox(img, idx)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-sm" 
              style={{ backgroundImage: `url(${img.src})` }}
            />
            <motion.img
              src={img.src}
              alt={img.alt}
              className="max-w-full max-h-full m-auto relative z-10"
              whileHover={{ scale: 1.05 }}
            />
          </div>
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[110]"
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
              <img src={selectedImage?.src} alt={selectedImage?.alt} className="rounded-lg max-h-[80vh] w-auto" />
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
    </div>
  );
});

export default Gallery;
