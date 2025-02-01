"use client"

import useSWR from "swr";
import { LoaderCircle, SquareArrowOutUpRight } from "lucide-react";
import HeroSection from "../_components/Home/HeroSection";
import UpcomingEvents from "../_components/Home/UpcomingEvents";
import AboutUs from "../_components/Home/About";
import MainGallery from "../_components/Home/MainGallery";
import { useCountdown } from "@/hooks/useCountdowns";
import Link from "next/link";
import Join from "../join/page";
import { useMemo } from "react";

const compareTimestamp = (a, b) => new Date(a) < new Date(b);
const fetcher = (url) => fetch(url).then((r) => r.json());

const CountdownTimer = ({ endTime }) => {
  const timeLeft = useCountdown(endTime);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-2">
      <span className="mr-3 my-2 text-base sm:text-2xl text-textColor3">Registration ends in</span>
      <div className="border border-backgroundColor1 dark:border-borderColor3 shadow-custom text-textColor2 p-2 rounded-md  flex flex-row gap-3">
        <div className="flex flex-col items-center">
          <span className="text-lg sm:text-3xl font-bold">{timeLeft.days}</span>
          <span className="text-textColor3 text-xs sm:text-base">Days</span>
        </div>
        <span className="text-lg sm:text-3xl text-textColor3">:</span>
        <div className="flex flex-col items-center">
          <span className="text-lg sm:text-3xl font-bold">{timeLeft.hours}</span>
          <span className="text-textColor3 text-xs sm:text-base">Hours</span>
        </div>
        <span className="text-lg sm:text-3xl text-textColor3">:</span>
        <div className="flex flex-col items-center">
          <span className="text-lg sm:text-3xl font-bold">{timeLeft.minutes}</span>
          <span className="text-textColor3 text-xs sm:text-base">Minutes</span>
        </div>
        <span className="text-lg sm:text-3xl text-textColor3">:</span>
        <div className="flex flex-col items-center">
          <span className="text-lg sm:text-3xl font-bold">{timeLeft.seconds}</span>
          <span className="text-textColor3 text-xs sm:text-base">Seconds</span>
        </div>
      </div>
      <span className="ml-3 my-2 text-base sm:text-2xl text-textColor3">Don't miss out !</span>
    </div>
  );
};

export default function HomePage(){

  const { data: clubInfo, error, isLoading } = useSWR(`/api/clubInfo`, fetcher);
  const { data: eventsData, isLoading: isLoadingEvents } = useSWR(`/api/events`, fetcher);
  const upcomingEvents = eventsData ? eventsData.filter(event => new Date(event.startTime) > new Date()) : [];

  const now = Date.now();

  const upcomingEventTimeLeft = useMemo(() => new Date(upcomingEvents[0]?.registrationEnds).getTime(), [upcomingEvents]);
  
  if (isLoading || isLoadingEvents) return <LoaderCircle className='animate-spin text-textColor1 mx-auto my-12 w-12 h-12' />;

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
      <HeroSection clubInfo={clubInfo} />
      
      <Join />
      
      {upcomingEvents.length > 0 && compareTimestamp(now, upcomingEvents[0].registrationEnds) && (
        <div className="text-center gap-2 flex flex-col">
          <hr className="bg-textColor3 border-textColor3 w-4/5 mx-auto my-2" />
          <Link href={`/events/${upcomingEvents[0].slug.current}`} className="text-base md:text-2xl text-buttonColor cursor-alias flex flex-row mx-auto">
            {upcomingEvents[0].name} &nbsp;<SquareArrowOutUpRight />
          </Link>
          <CountdownTimer endTime={upcomingEventTimeLeft} />
          <hr className="bg-textColor3 border-textColor3 w-4/5 mx-auto my-2" />
        </div>
      )}

      <MainGallery clubInfo={clubInfo} />
      
      <AboutUs clubInfo={clubInfo} />
      
      <UpcomingEvents />
    </>
  )
}
