"use client";

import {
  CalendarIcon,
  ChevronRight,
  ExternalLink,
  MapPinIcon,
  TagIcon,
  UserPlusIcon,
} from "lucide-react";
import { imageURL } from "@/sanity/utils/common.utils";
import Link from "next/link";
import { formatTimestamp } from "@/utils/common.utils";
import Image from "next/image";
import Reveal from "../animations/Reveal";
import { cn } from "@/lib/utils";

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
    <Link
      href={`/events/${event.slug.current}`}
      onClick={(e) => {
        if (!openButton) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <Reveal className="group">
        <div
          className={cn(
            "max-w-md mx-auto bg-backgroundColor1 dark:bg-backgroundColor2 shadow-custom border border-backgroundColor1 dark:border-borderColor3 p-5 rounded-3xl mt-2 hover:scale-105",
            "shadow-custom hover:shadow-[0px_0px_100px_-20px] hover:shadow-logoColor",
            "transition-all duration-300"
          )}
        >
          {openButton && (
            <h1 className="text-textColor1 font-bold text-2xl pt-3 text-center">
              {event.name}
            </h1>
          )}

          <div className="rounded-lg w-full h-max mx-auto overflow-hidden pt-3">
            <Image
              src={imageURL(event.image).url()}
              alt={event.name}
              width={500}
              height={500}
              className="rounded-lg mx-auto max-h-full max-w-full object-cover"
            />
          </div>

          <div className="mt-2">
            <div className="text-lg font-bold text-textColor2 flex flex-row justify-between p-2">
              <span
                className={`h-max text-sm w-min border py-0.5 px-2 rounded-lg 
              ${status == "Registration Open" ? "animate-bounce" : ""}
            `}
                style={{
                  color: `var(--${color})`,
                  borderColor: `var(--${color})`,
                }}
              >
                {status}
              </span>
              {openButton ? (
                // <Link
                //   href={`/events/${event.slug.current}`}
                //   className="flex flex-row py-1 px-2 rounded-full text-sm justify-center items-center transition-all duration-200 border-2 border-borderColor1 text-textColor2 hover:text-textColor1 group hover:border-textColor1 font-bold"
                // >
                //   <span>More Details</span>
                //   <ChevronRight className="w-5 h-5 transition-all duration-200 ml-1 group-hover:ml-3" />
                // </Link>
                <span className="opacity-0 group-hover:opacity-100 text-textColor1 transition-all duration-300">
                  Click to see more details
                </span>
              ) : (
                <span>Event Details</span>
              )}
            </div>
          </div>

          <div className="grid gap-4">
            <p className="text-muted-foreground text-textColor3">
              {event.description}
            </p>

            <div className="flex items-center gap-2">
              <TagIcon className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-sm text-textColor2">
                {event.type}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-textColor2 text-sm">{event.location}</span>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <UserPlusIcon className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium text-textColor2 text-sm">
                  Registration Period
                </span>
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
                <span className="font-medium text-textColor2 text-sm">
                  Event Duration
                </span>
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
                target="_blank"
                className="border-2 border-buttonColor text-buttonColor w-full p-2 rounded-md font-bold flex flex-row justify-center items-center hover:text-[#fff] hover:bg-buttonColor"
              >
                <UserPlusIcon className="w-5 h-5 text-muted-foreground mr-3" />
                Register
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </Link>
  );
}
