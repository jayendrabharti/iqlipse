"use client";

import useSWR from 'swr'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';


import { LoaderCircle } from 'lucide-react';
import PageNotFound from '@/app/not-found';
import { imageURL } from '@/sanity/utils/common.utils';
import Gallery from '@/app/_components/Gallery';

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function EventGallery() {
  
    const { eventSlug } = useParams();
    const { data: event, error, isLoading } = useSWR(`/api/events/${eventSlug}`, fetcher, {
      revalidateOnFocus: false,  // Don't refetch on tab switch
      revalidateOnReconnect: false,  // Don't refetch on reconnect
    });

    const images = useMemo(()=>{
        
      if(!event)return;

      if(event.gallery){
        return (event.gallery.map((image,index)=>{
          return { src: imageURL(image).url(), alt: `${event.name} (Image ${index+1})` };
        }))
      }else{
        return [];
      }
    },[event])

  if (isLoading) return <LoaderCircle className='animate-spin text-textColor1 m-auto mt-12 w-12 h-12'/>

  if (error) return(
    <div className='mx-auto w-max max-w-80 text-center text-base font-bold mt-5 text-red border-red border p-2 rounded-md flex flex-col'>
      <u className='text-lg'>Error:</u>
      <p>{error.message}</p>
      <Link href={'/events'} className='border-2 border-buttonColor text-buttonColor hover:bg-buttonColor hover:text-[#fff] text-base rounded-md py-1 px-2'>Go Back</Link>
    </div>
  )

  if(!event) return <PageNotFound/>

  return (
    <>
    
    <h1
        className='text-logoColor font-bold text-2xl md:text-4xl text-center p-2'>Gallery - {event.name}</h1>
    {(images && images.length == 0 ) 
    ? 
      <p className='text-2xl font-bold text-textColor3 mt-12 text-center'>No Images Yet</p>
    :
      <div className='p-4'>
          <Gallery images={images}/>
      </div>
    }
    
    </>
  );
}
