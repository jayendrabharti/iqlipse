import { imageURL } from '@/sanity/utils/common.utils';
import { formatTimestamp } from '@/utils/common.utils';
import { CalendarDays, ChevronRight, X, Camera, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import RevealHero from '../animations/RevealHero';
import Reveal from '../animations/Reveal';

export default function EventsTimeline({ events }){
  return (
    <>
  
      <RevealHero className="mx-auto mt-20 lg:mt-0">
        <h1 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-logoColor text-center">
          Our Events
        </h1>
      </RevealHero>

    <div className="relative p-4 pl-8 max-w-4xl mx-auto">


      {/* Timeline line */}
      <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-1 bg-logoColor transform md:translate-x-[5px]"></div>
      
      <div className="space-y-16">
        {events.map((event, index) => (
          <div key={event._id} className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:flex md:flex-row-reverse'}`}>
            {/* Date bubble */}
            <div className="absolute left-8 md:left-1/2 -translate-y-1 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-logoColor border-4 border-white shadow-lg flex items-center justify-center">
                <CalendarDays className="h-6 w-6 text-white" />
              </div>
              <div className="mt-2 bg-logoColor px-2 md:px-4 py-1 rounded-full shadow text-sm text-white font-extrabold whitespace-nowrap">
                {formatTimestamp(event.startTime,"dd MMM yyyy")}
              </div>
            </div>
            
            <Reveal
              className={`ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} bg-white dark:bg-zinc-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl md:w-[calc(50%-3rem)]`}
              type='fadeIn'
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={imageURL(event.gallery[0]).url()}
                  alt={event.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end">
                  <div className="p-4 py-2">
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-1">{event.name}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-2 md:p-5">
                <p className="text-sm md:text-base text-black dark:text-white">{event.description}</p>
                                
                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/events/${event.slug.current}`}
                    className="flex flex-1 flex-col text-center w-max md:flex-row items-center justify-center gap-2 px-0 md:px-4 py-2 bg-logoColor hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-all duration-150 active:scale-95"
                    >
                    <Calendar className="h-4 w-4" />
                    View Event
                  </Link>
                  <Link
                    href={`/events/${event.slug.current}/gallery`}
                    className="flex-1 flex flex-col text-center w-max md:flex-row items-center justify-center gap-2 px-0 md:px-4 py-2 bg-white border border-indigo-200 hover:bg-zinc-500 text-logoColor font-bold rounded-lg text-sm  transition-all duration-150 active:scale-95"
                  >
                    <Camera className="h-4 w-4" />
                    {`Gallery (${event.gallery.length})`}
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        ))}
      </div>

      
    </div>
    </>
  );
};