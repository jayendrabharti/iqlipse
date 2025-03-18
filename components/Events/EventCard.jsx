import { CalendarIcon, ExternalLink, MapPinIcon, TagIcon, UserPlusIcon } from 'lucide-react';
import { imageURL } from "@/sanity/utils/common.utils";
import Link from "next/link";
import { formatTimestamp } from "@/utils/common.utils";

export default function EventCard({ event, openButton = true }) {
  const compareTimestamp = (a, b) => new Date(a) < new Date(b);

  let status = "";
  let color = "";

  const now = Date.now();

  if (compareTimestamp(now, event.registrationStarts)) {
    status = "Upcoming";
    color = "yellow";
  } else if (
    compareTimestamp(now, event.registrationEnds) &&
    compareTimestamp(event.registrationStarts, now)
  ) {
    status = "Registration Open";
    color = "buttonColor";
  } else if (
    compareTimestamp(now, event.startTime) &&
    compareTimestamp(event.registrationEnds, now)
  ) {
    status = "Registration Closed";
    color = "red";
  } else if (
    compareTimestamp(now, event.endTime) &&
    compareTimestamp(event.startTime, now)
  ) {
    status = "Ongoing";
    color = "green";
  } else if (compareTimestamp(event.endTime, now)) {
    status = "Ended";
    color = "red";
  }

  return (
    <div className="max-w-md mx-auto bg-backgroundColor1 shadow-custom border border-backgroundColor1 dark:border-borderColor3 px-5 pb-5 rounded-lg mt-2">
        
      {openButton && <h1 className='text-textColor1 font-bold text-2xl pt-3 text-center'>{event.name}</h1>}

      <div className="rounded-lg w-full h-max mx-auto overflow-hidden pt-3">
        <img
          src={imageURL(event.image).url()}
          alt={event.name}
          className='rounded-lg mx-auto max-h-full max-w-full object-cover'
        />
      </div>
      


      <div className='mt-2'>
        <div className="text-lg font-bold text-textColor2 flex flex-row justify-between p-2">
          <span
            className={`h-max text-sm border py-0.5 px-2 rounded-lg ${status == "Registration Open"?'animate-bounce':''}`}
            style={{ color: `var(--${color})`, borderColor: `var(--${color})`}}
          >
            {status}
          </span>
          {openButton ? (
            <Link 
              href={`/events/${event.slug.current}`} 
              scroll={false}
              className="flex flex-row p-1 border-2 border-buttonColor text-buttonColor justify-between items-center rounded-lg hover:bg-buttonColor hover:text-[#fff] group active:ring-2 active:ring-borderColor3"
            >
              <span>More details</span>
              <ExternalLink className="transition-all duration-300 ml-1 group-hover:ml-4" />
            </Link>
          ) : (
            <span>Event Details</span>
          )}
        </div>
      </div>


      <div className="grid gap-4">
        <p className="text-muted-foreground text-textColor3">{event.description}</p>

        <div className="flex items-center gap-2">
          <TagIcon className="w-5 h-5 text-muted-foreground" />
          <span className="font-medium text-sm text-textColor2">{event.type}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5 text-muted-foreground" />
          <span className="text-textColor2 text-sm">{event.location}</span>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <UserPlusIcon className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-textColor2 text-sm">Registration Period</span>
          </div>
          <p className="text-sm text-muted-foreground pl-7 text-textColor3">
            {formatTimestamp(event.registrationStarts)}
            &nbsp;&nbsp;&#x2192;&nbsp;&nbsp;
            {formatTimestamp(event.registrationEnds)}
          </p>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-textColor2 text-sm">Event Duration</span>
          </div>
          <p className="text-sm text-muted-foreground pl-7 text-textColor3">
            {formatTimestamp(event.startTime)}
            &nbsp;&nbsp;&#x2192;&nbsp;&nbsp;
            {formatTimestamp(event.endTime)}
          </p>
        </div>
        {status == "Registration Open" && event.registrationLink && (
          <Link
            href={event.registrationLink}
            target='_blank'
            className='border-2 border-buttonColor text-buttonColor w-full p-2 rounded-md font-bold flex flex-row justify-center items-center hover:text-[#fff] hover:bg-buttonColor'
          >
            <UserPlusIcon className="w-5 h-5 text-muted-foreground mr-3" />
            Register
          </Link>
        )}
      </div>
    </div>
  );
}