import { getPosts } from "@/sanity/fetching/posts.fetch";


export const GET = async (request) => {
    try {
        const posts = await getPosts();

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch posts", { status: 500 })
    }
} 