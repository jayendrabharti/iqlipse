import Image from "next/image";
import CustomPortableText from "@/sanity/utils/customPortableText";
import { formatTimestamp } from "@/utils/common.utils";
import { imageURL } from "@/sanity/utils/common.utils";
import { X } from "lucide-react";
import Link from "next/link";
import getBaseURL from "@/utils/getBaseURL";
import { notFound } from "next/navigation";

export default async function PostPage({params}){
    
    const {postSlug} = await params;

    const data = await fetch(await getBaseURL()+`/api/posts/${postSlug}`,{
        cache: 'no-store'
    })
    const post = await data.json();

    
if(!post) return notFound();
return(
<>
<h1 className="mb-4 mt-4 tracking-tight font-extrabold text-logoColor text-4xl p-2 text-center w-full">Posts</h1>

<div className="w-full md:w-[700px] md:mx-auto border-2 border-borderColor3 my-2 rounded-xl">
    <div className="text-textColor2 rounded-t-xl text-base py-2 px-4 border-b-2 border-borderColor3 bg-backgroundColor2 flex flex-row justify-between items-center">
        {post.caption}
        <Link href={`/posts`}>
            <X className="w-10 h-10 ml-6 hover:bg-backgroundColor3 hover:ring-2 hover:ring-borderColor3 rounded-full"/>    
        </Link>
    </div>
    <Image 
        src={imageURL(post.image).url()} 
        alt={post.caption} 
        width={2000}
        height={2000}
        priority={true}
        className=""
        />
    <div className="text-center text-sm p-2 text-textColor2 border-y-2 border-y-borderColor3 bg-backgroundColor2">{formatTimestamp(post._createdAt)}</div>
    <div className="py-2 px-2 md:px-16">
        <CustomPortableText value={post.body}/>
    </div>
</div>
</>
)}
