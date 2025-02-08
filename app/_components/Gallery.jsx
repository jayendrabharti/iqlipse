"use client";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useState, memo } from "react";


const Gallery = memo(({ images })=> {
  const [selectedImage, setSelectedImage] = useState(null);

    const closeLightbox = () => setSelectedImage(null);
    const navigateImage = (direction) => {
      if (direction === 'prev') {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
      } else if (direction === 'next') {
        setSelectedImage((prev) => (prev + 1) % images.length);
      }
    };

    return (
      <div 
        id='gallery'
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2'
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="rounded-lg overflow-hidden shadow-lg flex relative aspect-square hover:scale-105 transition-all duration-200 items-center justify-center"
            onClick={() => setSelectedImage(index)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-sm" 
              style={{ backgroundImage: `url(${image.src})` }}
            />
            <img 
              src={image.src} 
              alt={image.alt} 
              className='max-w-full max-h-full m-auto relative z-10'
            />
          </div>
        ))}

        <dialog
          id="lightbox"
          className={`
            fixed w-screen h-screen inset-0 z-[110] bg-black bg-opacity-75 
            [&[open]]:scale-100 [&:not([open])]:scale-0 
            [&[open]]:translate-y-0 [&:not([open])]:translate-y-1/2 
            transition-all duration-300 ease-in-out
          `}
          open={selectedImage != null}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 bg-opacity-25 hover:bg-opacity-100 bg-black active:ring active:ring-white rounded-full transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 bg-opacity-25 hover:bg-opacity-100 bg-black active:ring active:ring-white rounded-full transition-colors"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={images[selectedImage]?.src}
            alt={images[selectedImage]?.alt}
            className="max-h-full max-w-full object-contain m-auto p-4"
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 bg-opacity-25 hover:bg-opacity-100 bg-black active:ring active:ring-white rounded-full transition-colors"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight size={24} />
          </button>

        </dialog>
      </div>
    );
});

export default Gallery;