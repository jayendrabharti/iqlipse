"use client"
import  { Bell, MessageSquareHeart, Home, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitch from './ThemeSwitch'
import NavButton from './NavButton';
import { useState, useMemo} from 'react';
import HamburgerIcon from './HamburgerIcon';
import { imageURL } from '@/sanity/utils/common.utils';

export default function NavBar({clubInfo}){

  const [expanded,setExpanded] = useState(false);

  const goToSection = (sectionId)=>{
    // if(!window)return;
    document?.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth'});
  }

  const logoSrc = useMemo(() => imageURL(clubInfo.logoSmall).url(), [clubInfo.logoSmall]);
return (
<div className={`${expanded?'h-96 border-b border-borderColor3 bg-backgroundColor1':'bg-transparent h-16'} items-center overflow-hidden w-full p-2 sticky top-0 left-0 z-[100] md:grid md:grid-cols-[1fr_1fr_1fr] md:h-16 space-y-2 md:space-y-0 transition-all duration-300 backdrop-blur-lg`}>

  <Link href={"/home"} scroll={true} className='block max-w-max'>
  <Image
    src={logoSrc}
    alt='Iqlipse'
    width={80}
    height={80}
    priority={true}
    className='w-20 p-0 ml-0 sm:ml-2 md:ml-5'
    />
  </Link>


  <div 
    className='flex flex-col md:flex-row space-x-0 md:space-x-1 space-y-2 md:space-y-0 md:m-0 w-full justify-center items-start md:items-center pt-5 md:pt-0'
    onClick={()=>{
      if(expanded) setExpanded(false);
      goToSection('top-scroll-div');
    }}
    >
    <NavButton name={'home'} icon={<Home/>} />
    <NavButton name={'team'} icon={<Users/>} />
    <NavButton name={'events'} icon={<Calendar/>} />
  </div>


  <div 
    className='flex flex-col md:flex-row space-x-0 md:space-x-1 space-y-2 md:space-y-0 w-full justify-end items-start md:items-center'
    onClick={()=>{
      setExpanded(false);
      goToSection('top-scroll-div');
    }}
  >
    <NavButton name={'announcements'} icon={<Bell/>} />
    <NavButton name={'posts'} icon={<MessageSquareHeart/>} />

    <div 
      className='w-full md:w-min flex flex-row justify-end'
      onClick={e=>e.stopPropagation()}
    >
      <ThemeSwitch/>    
    </div>
  
  </div>

  <button
    className='absolute top-0 h-12 aspect-square right-2 md:hidden'
    onClick={()=>setExpanded(prev=>!prev)}
  >
    <HamburgerIcon opened={expanded}/>
  </button>

</div>
)}