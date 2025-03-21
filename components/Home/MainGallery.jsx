"use client";

import { useMemo } from "react";
import { imageURL } from "@/sanity/utils/common.utils";
import ImageCarousel from "@/components/ui/ImageCarousel";
import RevealHero from "../animations/RevealHero";

export default function MainGallery({clubInfo}){
 

    const images = useMemo(()=>{
        if(!clubInfo)return;

        if(clubInfo.gallery){
          return (clubInfo.gallery.map((image,index)=>{
            return { src: imageURL(image).url(), alt: `${clubInfo.name} (Image ${index+1})` };
          }))
        }else{
          return [];
        }

    },[])

  if(images.length == 0)return null;

  return (
    <section id="main-gallery" className="p-2 sm:p-4 md:pt-20">
        <RevealHero className='mx-auto'>
        <h1 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-logoColor text-center">
            Gallery
        </h1>
        </RevealHero>
      <ImageCarousel images={images}/>
    </section>
  )
}


