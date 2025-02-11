import { NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

export const GET = async (request,{ params }) => {
    const { mediaName } = await params;
    try {
        if (mediaName === 'logo') {
            var filePath = join(process.cwd(), 'public', 'bigLogoCropped.png');
        } 
        else if (mediaName == 'team') {
            var filePath = join(process.cwd(), 'public', 'team.webp');
        } 
        else if (mediaName == 'events') {
            var filePath = join(process.cwd(), 'public', 'events.png');
        }        
        else {
            return new NextResponse("Media not found", { status: 404 });
        }

        const imageData = await fs.readFile(filePath);

        return new NextResponse(imageData, {
            status: 200,
            headers: { 'Content-Type': 'image/png' },
        });
    } catch (error) {
        return new NextResponse("Failed to fetch media", { status: 500 });
    }
};
