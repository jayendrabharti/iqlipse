"use client";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
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

  <dialog
    id="lightbox"
    className={`
      fixed w-screen h-screen inset-0 z-50 bg-black bg-opacity-75 
      flex items-center justify-center
      [&[open]]:scale-100 [&:not([open])]:scale-0 
      [&[open]]:translate-y-0 [&:not([open])]:translate-y-1/2 
      transition-all duration-300 ease-in-out
    `}
    open={(selectedImage != null)}
  >
    <div className="grid grid-rows-[auto,1fr,auto] w-full h-full">
      {/* Top Controls */}
      <div className="w-full flex justify-between p-2">
        <button
          className="text-white bg-black bg-opacity-50 rounded-full active:bg-opacity-100 active:ring-1 active:ring-white p-2"
          onClick={() => window.open(images[selectedImage]?.src, "_blank")}
        >
          <ExternalLink size={32} />
        </button>
        <button
          className="text-white bg-black bg-opacity-50 rounded-full active:bg-opacity-100 active:ring-1 active:ring-white p-2"
          onClick={() => setSelectedImage(null)}
        >
          <X size={32} />
        </button>
      </div>

      {/* Image Container */}
      <div className="flex justify-center items-center overflow-hidden">
        <img
          src={images[selectedImage]?.src}
          alt={images[selectedImage]?.alt}
          className="max-w-full max-h-full p-1"
        />
      </div>

      {/* Navigation Controls */}
      <div className="w-full flex justify-around p-2">
        <button
          className="text-white bg-black bg-opacity-50 rounded-full active:bg-opacity-100  active:ring-1 active:ring-white cursor-pointer p-2"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
          }}
        >
          <ChevronLeft size={48} />
        </button>

        <button
          className="text-white bg-black bg-opacity-50 rounded-full active:bg-opacity-100 active:ring-1 active:ring-white cursor-pointer p-2"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage((prev) => (prev + 1) % images.length);
          }}
        >
          <ChevronRight size={48} />
        </button>
      </div>
    </div>
  </dialog>


      </div>
    );
});

export default Gallery;