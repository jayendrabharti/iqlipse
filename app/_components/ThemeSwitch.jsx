"use client"
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { setTheme } from '../actions/setTheme';

export default function ThemeSwitch(){

  const [localTheme, setLocalTheme] = useState('dark');

  useEffect(() => {
      const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
      setLocalTheme(currentTheme);
  },[])
 

  const toggleTheme = () => {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    const newTheme = localTheme == 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setLocalTheme(newTheme);
  }

  return (
    <button
      className='cursor-pointer bg-backgroundColor3 border-4 border-solid border-backgroundColor3 outline outline-5 outline-borderColor3 rounded-full flex items-center justify-between relative scale-75 z-20'
      onClick={()=>toggleTheme()}
    >

        <Moon className={`${localTheme == 'dark'?'text-textColor1':'text-textColor3'} w-8 h-8 p-1 z-10`}/>
      
        <Sun className={`${localTheme == 'light'?'text-textColor1':'text-textColor3'} w-8 h-8 ml-2 p-1 z-10`}/>

      <div
        className={`absolute bg-backgroundColor2 border-3 border-buttonColor outline outline-5 outline-borderColor3 rounded-full h-8 w-8 duration-500 z-0 ${localTheme == 'dark'?'left-0 translate-x-0':'left-full -translate-x-full'}`}
      ></div>

    </button>
  )
}

