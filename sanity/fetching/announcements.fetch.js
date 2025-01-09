import { groq } from "next-sanity";
import client from "../utils/client";

export async function getAnnouncements(){
    const announcements = await client.fetch(
        groq`*[_type == "announcements"] | order(_createdAt desc)`
    );
    return announcements;
} 