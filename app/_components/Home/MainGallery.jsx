import { useState, useEffect } from "react";
import { Gallery } from "../Gallery";
import { imageURL } from "@/sanity/utils/common.utils";

export default function MainGallery({clubInfo}){

    const [images,setImages] = useState([]);

    useEffect(()=>{
        if(!clubInfo)return;
        if(!clubInfo.gallery)return;
        setImages(clubInfo.gallery.map((image,index)=>{
            return { src: imageURL(image), alt: `${clubInfo.name} (Image ${index+1})` };
        }))
    },[clubInfo])

    if(images.length == 0)return;

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


