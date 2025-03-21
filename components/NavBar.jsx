"use client";

import { Bell, MessageSquareHeart, Home, Calendar, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import NavButton from "./NavButton";
import { useState, useMemo, useCallback, useEffect } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { imageURL } from "@/sanity/utils/common.utils";
import useIsMobile from "@/hooks/useIsMobile";
import Reveal from "./animations/Reveal";

export default function NavBar({ clubInfo }) {

  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(()=>{
    setExpanded(false);
  },[isMobile]);

  const scrollToTop = () => {
    const main = document.getElementById('main');
    main.scrollTo({top: 0});
  };

  const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);

  const logoSrc = useMemo(() => imageURL(clubInfo.logoSmall).url(), [clubInfo.logoSmall]);

  return (
    <div
      className={`${
        expanded ? "h-96 border-b border-borderColor3 bg-backgroundColor1" : "bg-transparent h-16"
      } items-center overflow-hidden w-full p-2 sticky top-0 left-0 z-[100] md:grid md:grid-cols-[1fr_1fr_1fr] md:h-16 transition-all duration-300 backdrop-blur-lg`}
    >
      {/* Logo */}
      <Reveal type="leftRight">
      <Link href="/home" className="block max-w-max">
        <Image 
          src={logoSrc} 
          alt="Iqlipse" 
          width={80} 
          height={80} 
          priority 
          className="w-20 p-0 ml-0 sm:ml-2 md:ml-5" 
        />
      </Link>
      </Reveal>

      {/* Navigation Buttons - Center */}
      <div
        className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 w-full justify-center items-start md:items-center pt-5 md:pt-0"
        onClick={() => {
          if (expanded) setExpanded(false);
          scrollToTop();
        }}
      >
        <Reveal className="w-full md:w-max">
          <NavButton name="home" icon={<Home />} />
        </Reveal>
        
        <Reveal className="w-full md:w-max">
          <NavButton name="team" icon={<Users />} />
        </Reveal>
        
        <Reveal className="w-full md:w-max">
          <NavButton name="events" icon={<Calendar />} />
        </Reveal>
      </div>

      {/* Navigation Buttons - Right */}
      <div
        className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 w-full justify-end items-start md:items-center pt-2 md:pt-0"
        onClick={() => {
          setExpanded(false);
          scrollToTop();
        }}
      >
        <Reveal className="w-full md:w-max">
          <NavButton name="announcements" icon={<Bell />} />
        </Reveal>

        <Reveal className="w-full md:w-max">
          <NavButton name="posts" icon={<MessageSquareHeart />} />
        </Reveal>

        <div className="w-full md:w-min flex flex-row justify-end">
          <Reveal type="rightLeft">
            <ThemeSwitch />
          </Reveal>  
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button className="absolute top-0 h-16 aspect-square right-0 md:hidden" onClick={toggleExpanded}>
        <HamburgerIcon opened={expanded} />
      </button>
    </div>
  );
}
