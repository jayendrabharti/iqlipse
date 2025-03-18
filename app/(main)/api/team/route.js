import { getMembers } from "@/sanity/fetching/members.fetch";

export const GET = async (request) => {
    try {
        const members = await getMembers();

        return new Response(JSON.stringify(members), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch members", { status: 500 })
    }
} 