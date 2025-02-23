"use client";

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import EventCard from '../Events/EventCard';

export default function UpcomingEvents({clubInfo}) {

      const data = clubInfo.events;
      const events = data ? data.filter(event => new Date(event.startTime) > new Date()) : [];

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
