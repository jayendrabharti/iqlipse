"use client";

import { Heart, MessageCircle, Share2 } from 'lucide-react';
import Image from 'next/image';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function InstagramPostCard({url}){

    const dataURL = `/api/instagramPostData?postURL=${url}`;
    const { data : postData, error, isLoading } = useSWR(dataURL, fetcher);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading post data</div>

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto my-4">
      {/* Header with avatar and username */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <img
          src={`/api/proxy?url=${encodeURIComponent(postData.avatarSrc)}`}
          alt={`${postData.username}'s avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="ml-3 font-semibold text-gray-900">{postData.username}</span>
      </div>

      {/* Main image */}
      <div className="aspect-square bg-gray-100">
        <img
          src={`/api/proxy?url=${encodeURIComponent(postData.imageSrc)}`}
          alt="Post content"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Action buttons */}
      <div className="p-4">
        <div className="flex gap-6 mb-2">
          <button className="hover:text-red-500 transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          <button className="hover:text-blue-500 transition-colors">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="hover:text-green-500 transition-colors">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
        
        {/* Likes count */}
        <div className="font-medium text-gray-900">
          {postData.likes.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="mt-2 text-gray-800">
          <span className="font-semibold">{postData.username}</span>{' '}
          <p className="inline" dangerouslySetInnerHTML={{__html:postData.caption}}></p>
        </div>
      </div>
    </div>
  )
}
