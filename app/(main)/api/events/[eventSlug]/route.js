import { getEventBySlug } from "@/sanity/fetching/events.fetch";

export const GET = async (request, { params }) => {
    const { eventSlug } = await params;
    try {
        const event = await getEventBySlug(eventSlug);
        return new Response(JSON.stringify(event), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch events", { status: 500 })
    }
} 