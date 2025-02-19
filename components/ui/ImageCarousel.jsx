"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDrag } from "@use-gesture/react";

// const images = [
//     "https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089__340.jpg",
//     "https://cdn.pixabay.com/photo/2012/11/28/11/28/rocket-launch-67723__340.jpg",
//     "https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg",
//     "https://cdn.pixabay.com/photo/2020/06/17/09/28/wormhole-5308810__340.jpg",
//     "https://cdn.pixabay.com/photo/2016/11/18/22/58/stars-1837306__340.jpg",
//     "https://cdn.pixabay.com/photo/2017/02/09/09/11/starry-sky-2051448__340.jpg",
//     "https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188__340.jpg",
//     "https://cdn.pixabay.com/photo/2011/12/15/11/32/pismis-24-11186__340.jpg"
//   ];

export default function ImageCarousel({images=[]}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getImageIndex = (offset) => {
        return (currentIndex + offset + images.length) % images.length;
    };

    const bind = useDrag(
        ({ down, movement: [mx], direction: [xDir], velocity, cancel }) => {
            setIsDragging(down);
            if (down) {
                if (Math.abs(mx) > 50) {
                    if (xDir > 0) {
                        prevImage();
                    } else {
                        nextImage();
                    }
                    cancel();
                }
            } else {
                if (velocity[0] > 0.2) {
                    if (xDir > 0) {
                        prevImage();
                    } else {
                        nextImage();
                    }
                }
            }
        },
        { axis: "x", threshold: 10 }
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                prevImage();
            } else if (e.key === "ArrowRight") {
                nextImage();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

return (
<>
  <div className="relative w-full max-w-full h-max py-12 text-gray-800">
      <div
          ref={containerRef}
          className="flex justify-center items-center h-80 md:h-96 cursor-grab active:cursor-grabbing px-4"
          {...bind()}
          >
          {[-2, -1, 0, 1, 2].map((offset) => {
            const imageIndex = getImageIndex(offset);
            const image = images[imageIndex];
            if (!image) return null;
            
            return (
              <div
                key={imageIndex}
                className={`absolute transition-all duration-300 ease-in-out ${
                offset === 0
                ? "w-80 md:w-96 z-30"
                : Math.abs(offset) === 1
                ? "w-64 md:w-80 z-20"
                : "w-48 md:w-64 z-10"
                }`}
                style={{
                transform: `translateX(${offset * 110}%) scale(${1 - Math.abs(offset) * 0.15})`,
                pointerEvents: offset === 0 ? "auto" : "none",
                }}
              >
                  <div
                    className="rounded-lg shadow-lg overflow-hidden aspect-square bg-cover bg-center bg-no-repeat"  
                    // style={{
                    //   backgroundImage: `url(${image.src})`
                    // }}  
                    >
                    <img
                      src={image.src}
                      alt={"image"}
                      className="object-cover max-w-full max-h-full mx-auto mt-[50%] -translate-y-1/2"
                      // style={{ display: offset === 0 ? "block" : "none" }}
                      />
                  </div>
                </div>
              );
            })}
      </div>
  </div>
  <div className="text-center">
      <button
          onClick={prevImage}
          className="mx-3 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-40"
          aria-label="Previous image"
          >
          <ArrowLeft className="h-6 w-6" />
      </button>
      <button
          onClick={nextImage}
          className="mx-3 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-40"
          aria-label="Next image"
          >
          <ArrowRight className="h-6 w-6" />
      </button>
  </div>
</>
);
}