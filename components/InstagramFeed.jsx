"use client";

import { InstagramEmbed } from 'react-social-media-embed';
import InstagramPostCard from './InstagramPostCard';

export default function InstagramFeed({clubInfo}) {
  
return (
    <section id='instagram-feed' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {clubInfo?.instagramUrls && clubInfo.instagramUrls.map((url, index) => (
            <div key={index} className='flex justify-center'>
                {/* <InstagramPostCard url={url} /> */}
                <InstagramEmbed url={url} />
            </div>
        ))}
    </section>
)
}
