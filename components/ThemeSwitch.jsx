"use client"
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitch = () => {
  
  const {theme,setTheme} = useTheme();

  return (
  <button
    className='cursor-pointer bg-backgroundColor3 border-4 border-solid border-backgroundColor3 outline outline-5 outline-borderColor3 rounded-full flex items-center justify-between relative scale-75 z-20 transition-all duration-300'
    onClick={(e)=>{
      setTheme(theme=='dark'?'light':'dark')
      e.stopPropagation();
    }}
  >
    <Moon className={`dark:text-textColor1 text-textColor3 w-8 h-8 p-1 z-10`}/>

    <Sun className={`text-textColor1 dark:text-textColor3 w-8 h-8 ml-2 p-1 z-10`}/>

    <div
    className={`absolute bg-backgroundColor2 border-3 border-buttonColor outline outline-5 outline-borderColor3 rounded-full h-8 w-8 duration-500 z-0 dark:left-0 dark:translate-x-0 left-full -translate-x-full transition-all`}
    ></div>

  </button>
  )
}

export default ThemeSwitch;
