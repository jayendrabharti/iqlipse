import { groq } from "next-sanity";
import client from "../utils/client";

export async function getEvents(){
    const events = await client.fetch(
        groq`*[_type == "events"] | order(startTime desc)`
    );
    return events;
}

export async function getEventBySlug(slug){
    const event = await client.fetch(
        groq`*[_type == "events" && slug.current == $slug][0]`,
        { slug }
    );
    return event;
}