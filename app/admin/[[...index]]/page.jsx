"use client"

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export default function AdminPage(){
    
    return (
        <dialog open={true} className='w-full h-full fixed top-0 z-[110]'>  
            <NextStudio config={config} />
        </dialog>
    )

}
