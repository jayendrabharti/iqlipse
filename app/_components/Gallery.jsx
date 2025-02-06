"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, memo } from "react";


const Gallery = memo(({ images })=> {
  const [selectedImage, setSelectedImage] = useState(null);

    return(
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
        {selectedImage !== null && (
          <dialog
            id='lightbox'
            className='fixed w-screen h-screen inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center transition-all duration-300 ease-in-out'
            open
          > 
            <button 
              className='absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-100 p-2'
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <button 
              className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-100'
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage - 1 + images.length) % images.length);
              }}
            >
              <ChevronLeft size={48} />
            </button>
            <img 
              src={images[selectedImage]?.src} 
              alt={images[selectedImage]?.alt} 
              className='max-w-full max-h-full p-3'
            />
            <button 
              className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-100'
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % images.length);
              }}
            >
              <ChevronRight size={48} />
            </button>
          </dialog>
        )}
      </div>
    );
});

export default Gallery;