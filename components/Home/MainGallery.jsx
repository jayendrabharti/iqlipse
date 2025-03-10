"use client";

import { useMemo } from "react";
import { imageURL } from "@/sanity/utils/common.utils";
import ImageCarousel from "@/components/ui/ImageCarousel";

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
        <h1 className="text-4xl font-extrabold text-logoColor text-center">
            Gallery
        </h1>
      <ImageCarousel images={images}/>
    </section>
  )
}


