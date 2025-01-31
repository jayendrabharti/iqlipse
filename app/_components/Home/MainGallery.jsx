"use client";
import {  useMemo } from "react";
import Gallery from "../Gallery";
import { imageURL } from "@/sanity/utils/common.utils";

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
    <section id="main-gallery" className="p-2 sm:p-4  md:pt-20">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-logoColor text-center">
            Gallery
        </h1>
        <br />
      <Gallery images={images}/>
    </section>
  )
}


