import { ChevronRight, ExternalLink, LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import useSWR from 'swr';
import EventCard from '../Events/EventCard';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function UpcomingEvents(){

    const { data, error, isLoading } = useSWR(`/api/events`, fetcher, {
        revalidateOnFocus: false,  // Don't refetch on tab switch
        revalidateOnReconnect: false,  // Don't refetch on reconnect
      });
    const events = data ? data.filter(event => new Date(event.startTime) > new Date()) : [];

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


return (
<section id="upcoming-events" className="pt-16 sm:pt-0">
    <div 
        className="text-center mx-auto flex flex-row justify-center items-center"
    >
        <span className='text-2xl md:text-4xl tracking-tight font-extrabold text-logoColor'>Upcoming Events</span>
        
        <Link
            href={`/events`} 
            className="flex flex-row py-1 px-2 rounded-full text-sm justify-center items-center m-2 hover:bg-backgroundColor3 transition-all duration-200 font-light border-2 border-borderColor1 text-textColor3 hover:text-textColor1 group hover:border-textColor1"
        >
            View all events 
            <ExternalLink className='w-5 h-5 transition-all duration-200 ml-1 group-hover:ml-3'/>
        </Link>

    </div>

    {events.length 
    ? 
    <div id="events" className={`grid ${events.length == 1 ? 'justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4 p-4`}>
    {events.map((event,index)=>{
        return <EventCard key={index} event={event}/>
    })}
    </div>
    :
    <p className='text-center m-4 text-textColor3'>No Upcoming Events</p>
    }


</section>
)}
