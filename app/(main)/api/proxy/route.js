export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const imageUrl = searchParams.get("url");

        if (!imageUrl) {
            return new Response(JSON.stringify({ error: "No URL provided" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const response = await fetch(imageUrl);

        if (!response.ok) {
            return new Response(JSON.stringify({ error: "Failed to fetch image" }), {
                status: response.status,
                headers: { "Content-Type": "application/json" },
            });
        }

        const contentType = response.headers.get("Content-Type");
        const imageBuffer = await response.arrayBuffer();

        return new Response(imageBuffer, {
            status: 200,
            headers: { "Content-Type": contentType },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Something went wrong" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
