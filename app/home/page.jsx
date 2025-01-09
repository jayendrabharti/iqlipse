"use client"

import useSWR from "swr";
import { LoaderCircle } from "lucide-react";
import HeroSection from "../_components/Home/HeroSection";
import UpcomingEvents from "../_components/Home/UpcomingEvents";
import AboutUs from "../_components/Home/About";
import MainGallery from "../_components/Home/MainGallery";



const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage(){


  const { data: clubInfo, error, isLoading } = useSWR(`/api/clubInfo`, fetcher);

  if (isLoading) return <LoaderCircle className='animate-spin text-textColor1 m-auto mt-12 w-12 h-12' />;

  if (error) return (
    <div className='mx-auto w-max max-w-80 text-center text-base font-bold mt-5 text-red border-red border p-2 rounded-md flex flex-col'>
      <u className='text-lg'>Error:</u>
      <p>{error.message}</p>
      <button 
        onClick={()=>location.reload()}   
        className='border-2 border-buttonColor text-buttonColor hover:bg-buttonColor hover:text-[#fff] text-base rounded-md py-1 px-2'
      >Reload</button>
    </div>
  );

  if (!clubInfo) return <PageNotFound />;



return (
<>

<HeroSection clubInfo={clubInfo}/>

<MainGallery clubInfo={clubInfo}/>

<AboutUs clubInfo={clubInfo}/>

<UpcomingEvents/>

</>

)}
