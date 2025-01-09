import { groq } from "next-sanity";
import client from "../utils/client";

export async function getMembers(){
    const members = await client.fetch(
        groq`*[_type == "members"] | order(orderRank)`
    );
    return members;
}