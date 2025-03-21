"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";
import Image from "next/image";4
import useIsMobile from "@/hooks/useIsMobile";
import Reveal from "../animations/Reveal";

export default function ImageCarousel({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    const isMobile = useIsMobile();

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
            if (e.key === "ArrowLeft") prevImage();
            else if (e.key === "ArrowRight") nextImage();
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
    }, [autoPlay]);
    
      return (
        <>
            <div className="relative w-full max-w-full h-max my-4 py-12 text-gray-800">
                {/* {isMobile
                ?
                <div 
                    className="flex justify-center items-center h-80 md:h-96 cursor-grab active:cursor-grabbing px-4"
                >
                    <Image
                        fill
                        style={{objectFit: "contain"}}
                        sizes="100vh"
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        loading="lazy"
                    />
                </div>
                : */}
                <Reveal type="bottomUp" delay={0.2}>
                    
                <div
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
                                <div className="relative overflow-hidden aspect-square bg-cover bg-center bg-no-repeat w-full h-full duration-300">
                                    <Image
                                        fill
                                        style={{objectFit: "contain"}}
                                        sizes="100vh"
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        className={`mx-auto mt-[50%] -translate-y-1/2 duration-300 z-20`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                </Reveal>

                {/* } */}
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center">
                <div className="flex space-x-2">
                <button
                    onClick={prevImage}
                    className="transform bg-mainColor text-textColor2 hover:text-textColor1 rounded-full p-2 shadow-lg z-40 border border-borderColor3"
                    aria-label="Previous image"
                    >
                    <ArrowLeft className="size-6" />
                </button>
                <div className="p-2">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`size-3 mx-1 rounded-full inline-block border border-textColor1 ${
                                index === currentIndex ? "bg-textColor1" : ""
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                <button
                    onClick={nextImage}
                    className="transform bg-mainColor text-textColor2 hover:text-textColor1 rounded-full p-2 shadow-lg z-40 border border-borderColor3"
                    aria-label="Next image"
                    >
                    <ArrowRight className="size-6" />
                </button>
                </div>
                <div className="flex space-x-2"> 
                    <button
                        className="transform bg-mainColor text-textColor2 hover:text-textColor1 rounded-full p-2 shadow-lg z-40 active:ring active:ring-borderColor1 border border-borderColor3"
                        onClick={() => setAutoPlay((prev) => !prev)}
                        aria-label="Toggle autoplay"
                        >
                        Autoplay: <span className="font-bold text-textColor1">{autoPlay ? "On" : "Off"}</span>
                    </button>
                </div>
            </div>
        </>
    );
}
