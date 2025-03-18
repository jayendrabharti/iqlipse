import { getPostBySlug } from "@/sanity/fetching/posts.fetch";

export const GET = async (request, { params }) => {
    const { postSlug } = await params;
    try {
        const post = await getPostBySlug(postSlug);
        return new Response(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch post", { status: 500 })
    }
} 