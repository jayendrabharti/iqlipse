import { getAnnouncements } from "@/sanity/fetching/announcements.fetch";

export const GET = async (request) => {
    try {
        const announcements = await getAnnouncements();

        return new Response(JSON.stringify(announcements), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch announcements", { status: 500 })
    }
} 