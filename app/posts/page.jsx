import { getPosts } from "@/sanity/fetching/posts.fetch"
import { imageURL } from "@/sanity/utils/common.utils";
import Link from "next/link";
import Image from "next/image";
import { formatTimestamp } from "@/utils/common.utils";

export default async function PostsPage(){

  const posts = await getPosts();

  return (
    <>
      <h1 className="mb-4 mt-4 tracking-tight font-extrabold text-logoColor text-4xl p-2 text-center w-full">Posts</h1>
      
      {!posts.length && <p className="text-xl font-xl text-center p-2">No Posts Yet</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/posts/${post.slug.current}`}
            className="block border-2 border-borderColor3 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Image
              src={imageURL(post.image)}
              width={200}
              height={200}
              alt={post.slug.current}
              className="w-full h-48 object-cover border-b-2 border-borderColor3"
            />
            <div className="p-2">
              <p className="text-base truncate text-center mb-2">{post.caption}</p>
              <p className="text-xs text-right text-gray-500">{formatTimestamp(post._createdAt)}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

