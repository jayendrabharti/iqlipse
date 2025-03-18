import { getClubInfo } from "@/sanity/fetching/clubInfo.fetch"

export const GET = async (request) => {
    try {
        const clubInfo = await getClubInfo();

        return new Response(JSON.stringify(clubInfo), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch clubInfo", { status: 500 })
    }
} 