import { NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

export const GET = async (request,{ params }) => {
    const { mediaName } = await params;
    try {
        if (mediaName === 'titleLogo') {
            const filePath = join(process.cwd(), 'public', 'titleOnly.png');
            const imageData = await fs.readFile(filePath);

            return new NextResponse(imageData, {
                status: 200,
                headers: { 'Content-Type': 'image/png' },
            });
        } else {
            return new NextResponse("Media not found", { status: 404 });
        }
    } catch (error) {
        return new NextResponse("Failed to fetch media", { status: 500 });
    }
};
