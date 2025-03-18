"use client";

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import EventCard from '../Events/EventCard';
import { useMemo } from 'react';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((r) => r.json());


export default function UpcomingEvents() {
  
  const { data: events, error, isLoading } = useSWR(`/api/events`, fetcher);

  const upcomingEvents = useMemo(() => 
    events?.filter(event => new Date(event.startTime) > new Date()) || [], 
    [events]
  );

  return (
    <section id="upcoming-events" className="pt-16 sm:pt-0 min-h-60">
      <div className="text-center mx-auto flex flex-row justify-center items-center">
        <span className="text-2xl md:text-4xl tracking-tight font-extrabold text-logoColor">
          Upcoming Events
        </span>

        <Link
          href="/events"
          scroll={false}
          className="flex flex-row py-1 px-2 rounded-full text-sm justify-center items-center m-2 hover:bg-backgroundColor3 transition-all duration-200 font-light border-2 border-borderColor1 text-textColor3 hover:text-textColor1 group hover:border-textColor1"
        >
          View all events
          <ExternalLink className="w-5 h-5 transition-transform duration-200 ml-1 group-hover:translate-x-2" />
        </Link>
      </div>

      {upcomingEvents.length > 0 ? (
        <div
          id="events"
          className={`grid ${upcomingEvents.length === 1 ? 'justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4 p-4`}
        >
          {upcomingEvents.map((event) => (
            <EventCard key={event.id || event.startTime} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center m-4 text-textColor3">No Upcoming Events</p>
      )}
    </section>
  );
}
