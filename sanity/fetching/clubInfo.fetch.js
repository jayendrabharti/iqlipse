import { groq } from "next-sanity";
import client from "../utils/client";

export async function getClubInfo(){
    const contactInfo = await client.fetch(
        groq`*[_type == "clubInfo"]`
    );
    return contactInfo[0];
}