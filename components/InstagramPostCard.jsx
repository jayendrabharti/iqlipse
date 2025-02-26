"use client";

import { Bookmark, ExternalLink, Heart, Instagram, LoaderCircle, MessageCircle, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function InstagramPostCard({url}){

    const dataURL = `/api/instagramPostData?postURL=${url}`;
    const { data : postData, error, isLoading } = useSWR(dataURL, fetcher);

    // if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading post data</div>

  return (

    <div className='bg-backgroundColor2 text-textColor1 mx-auto my-4 rounded-2xl w-full border-borderColor1 border overflow-hidden shadow-custom max-w-md'>

      {/* header */}
      <div className='flex flex-row items-center p-4'>
        {isLoading
        ?
          <div className='h-10 w-10 block animate-pulse rounded-full border border-borderColor3 bg-[rgba(0,0,0,.5)]'></div>
        :
          <Image
            src={`/api/proxy?url=${encodeURIComponent(postData.avatarSrc)}`}
            alt={`${postData.username}'s avatar`}
            width={50}
            height={50}
            loading='lazy'
            className='size-10 rounded-full border border-borderColor3'
            />
          }
        {isLoading
        ?
        <div className='font-semibold text-textColor1 hover:underline px-4 w-max'>Loading...</div>
        :
        <Link 
        href={'https://www.instagram.com/' + postData?.username}
        target='_blank'
        className='font-semibold text-textColor1 hover:underline px-4'
        >{postData.username}</Link>
      }

        <Link href={isLoading?'':postData?.redirectURL} target='_blank' className='w-full'>
          <Instagram className='size-6 ml-auto mr-2 hover:stroke-pink-600'/>
        </Link>
      </div>

      {/* main image */}
      <Link href={isLoading?"":postData?.redirectURL} target='_blank' className='w-full'>
      <div className='w-full backdrop-blur-md aspect-square relative'>
        {isLoading
        ?
        <LoaderCircle className='animate-spin text-textColor1 size-12 mx-auto'/>
        :
        <>
          <Image
            src={`/api/proxy?url=${encodeURIComponent(postData.imageSrc)}`}
            alt='Post content'
            width={300}
            height={300}
            loading='lazy'
            className='object-cover mx-auto max-w-full max-h-full w-full h-full'
            />
          <div 
            className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-80 p-4 text-white overflow-scroll opacity-0 hover:opacity-100 transition-all duration-100'
            dangerouslySetInnerHTML={{ __html: postData.caption }}
            ></div>
        </>
        }
      </div>
      </Link>

      {/* action buttons */}
        <div className='flex flex-row items-center pt-4 px-4'>
          <Heart className='size-6 hover:fill-red hover:stroke-red mr-2' />
          <MessageCircle className='size-6 hover:fill-buttonColor hover:stroke-buttonColor mx-2' />
          <Share2 className='size-6 hover:fill-green hover:stroke-green mx-2'/>
          <Bookmark className='size-6 hover:fill-purple hover:fill-textColor1 ml-auto'/>
        </div>

        {/* likes count */}
      <div className='p-4 font-bold'
      >{isLoading?"Loading...":postData.likes}</div>

    </div>

  )
}
