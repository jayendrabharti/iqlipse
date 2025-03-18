import { getEvents } from "@/sanity/fetching/events.fetch"

export const GET = async (request) => {
    try {
        const events = await getEvents();

        return new Response(JSON.stringify(events), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch events", { status: 500 })
    }
} 