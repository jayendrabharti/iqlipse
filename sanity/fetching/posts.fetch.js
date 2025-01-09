import { groq } from "next-sanity";
import client from "../utils/client";

export async function getPosts() {
    const posts = await client.fetch(
        groq`*[_type == "posts"] | order(_createdAt desc)`
    );
    return posts;
}

export async function getPostBySlug(slug) {
    const post = await client.fetch(
        groq`*[_type == "posts" && slug.current == $slug][0]`,
        { slug }
    );
    return post;
} 