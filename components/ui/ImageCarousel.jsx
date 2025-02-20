"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";
import Image from "next/image";

export default function ImageCarousel({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);
    const containerRef = useRef(null);

    const [loadingStates, setLoadingStates] = useState(
        new Array(images.length).fill(true)
      );

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getImageIndex = (offset) => {
        return (currentIndex + offset + images.length) % images.length;
    };

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

    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(() => {
                nextImage();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [autoPlay, currentIndex]);
    
    const handleLoadingComplete = (index) => {
        setLoadingStates((prev) => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });
      };
    
      return (
        <>
            <div className="relative w-full max-w-full h-max py-12 text-gray-800">
                <div
                    ref={containerRef}
                    className="flex justify-center items-center h-80 md:h-96 cursor-grab active:cursor-grabbing px-4"
                >
                    {[-2, -1, 0, 1, 2].map((offset) => {
                        const imageIndex = getImageIndex(offset);
                        const image = images[imageIndex];
                        if (!image) return null;

                        return (
                            <div
                                key={imageIndex}
                                className={`absolute transition-all duration-300 ease-in-out 
                                    ${
                                    offset === 0
                                        ? "w-80 md:w-96 z-30"
                                        : Math.abs(offset) === 1
                                        ? "w-64 md:w-80 z-20"
                                        : "w-48 md:w-64 z-10"
                                    }
                                `}
                                style={{
                                    transform: `translateX(${offset * 110}%) scale(${1 - Math.abs(offset) * 0.15})`,
                                    pointerEvents: offset === 0 ? "auto" : "none",
                                }}
                            >
                                <div className="relative rounded-lg shadow-lg overflow-hidden aspect-square bg-cover bg-center bg-no-repeat w-full h-full duration-300">
                                    {loadingStates[imageIndex] && 
                                        <LoaderCircle className="text-textColor1 size-5 animate-spin mx-auto mt-[50%] -translate-y-1/2"/>
                                    }
                                    <Image
                                        fill
                                        style={{
                                            objectFit: "contain",
                                        }}
                                        sizes="100vh"
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        onLoad={() => handleLoadingComplete(imageIndex)}
                                        className={`mx-auto mt-[50%] -translate-y-1/2 duration-300 z-20 ${loadingStates[imageIndex] ? "opacity-0" : "opacity-100"}`}
                                    />
                                    <Image
                                        fill
                                        style={{
                                            objectFit: "cover",

                                        }}
                                        sizes="100vh"
                                        src={image.src}
                                        alt={image.alt+'-thumbnail'}
                                        quality={10}
                                        className={`mx-auto mt-[50%] -translate-y-1/2 duration-300 z-10 blur-sm ${loadingStates[imageIndex] ? "opacity-0" : "opacity-100"}`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <button
                    onClick={prevImage}
                    className="mx-3 transform bg-mainColor text-textColor2 hover:text-textColor1 rounded-full p-2 shadow-lg z-40 border border-borderColor3"
                    aria-label="Previous image"
                >
                    <ArrowLeft className="size-6" />
                </button>
                <button
                    onClick={nextImage}
                    className="mx-3 transform bg-mainColor text-textColor2 hover:text-textColor1 rounded-full p-2 shadow-lg z-40 border border-borderColor3"
                    aria-label="Next image"
                >
                    <ArrowRight className="size-6" />
                </button>
                <button
                    className="mx-3 transform bg-mainColor text-textColor2 hover:text-textColor1 rounded-full p-2 shadow-lg z-40 active:ring active:ring-borderColor1 border border-borderColor3"
                    onClick={() => setAutoPlay((prev) => !prev)}
                    aria-label="Toggle autoplay"
                >
                    Autoplay: <span className="font-bold text-textColor1">{autoPlay ? "On" : "Off"}</span>
                </button>
            </div>
        </>
    );
}
