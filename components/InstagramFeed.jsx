"use client";

import { InstagramEmbed } from 'react-social-media-embed';
import InstagramPostCard from './InstagramPostCard';

export default function InstagramFeed({clubInfo}) {
  
return (
<section id='instagram-feed'>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
        {clubInfo?.instagramUrls?.map((url, index) => <InstagramPostCard key={index} url={url} />)}
    </div>
</section>
)
}

{/* <InstagramEmbed url={url} /> */}