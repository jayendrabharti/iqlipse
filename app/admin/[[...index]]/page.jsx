"use client"

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export default function AdminPage(){
    
    return (
        <dialog open className='w-full h-full fixed top-0 z-50'>  
            <NextStudio config={config} />
        </dialog>
    )

}
