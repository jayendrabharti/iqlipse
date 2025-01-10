"use client"

import  { Bell, MessageSquareHeart, Home, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import ThemeSwitch from './ThemeSwitch'
import NavButton from './NavButton';
import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import { imageURL } from '@/sanity/utils/common.utils';

export default function NavBar({clubInfo}){

  const [expanded,setExpanded] = useState(false);


return (
<div className={`${expanded?'h-96 border-b border-borderColor3':'h-16'} items-center overflow-hidden w-full p-2 sticky top-0 left-0 bg-backgroundColor1 z-100 md:grid md:grid-cols-[1fr_1fr_1fr] md:h-16 space-y-2 md:space-y-0 transition-all duration-300`}>

  <Link href={"/home"}>
  <Image
    src={imageURL(clubInfo.logoSmall)}
    alt='Iqlipse'
    width={100}
    height={100}
    priority={true}
    className='w-20 p-0 ml-0 sm:ml-2 md:ml-5'
    />
  </Link>


  <div 
    className='flex flex-col md:flex-row space-x-0 md:space-x-1 space-y-2 md:space-y-0 md:m-0 w-full justify-center items-start md:items-center pt-5 md:pt-0'
    onClick={()=>setExpanded(false)}
  >
    <NavButton name={'home'} icon={<Home/>} />
    <NavButton name={'team'} icon={<Users/>} />
    <NavButton name={'events'} icon={<Calendar/>} />
  </div>


  <div 
    className='flex flex-col md:flex-row space-x-0 md:space-x-1 space-y-2 md:space-y-0 w-full justify-end items-start md:items-center'
    onClick={()=>setExpanded(false)}
  >
    <NavButton name={'announcements'} icon={<Bell/>} />
    <NavButton name={'posts'} icon={<MessageSquareHeart/>} />

    <div 
      className='w-full md:w-min flex flex-row justify-end'
      onClick={e=>e.stopPropagation()}
    >
      <ThemeSwitch />    
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
