import { NextResponse } from 'next/server';
import { GetInstagramPostData } from '@/app/(main)/actions';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const postURL = searchParams.get('postURL');

        if (!postURL) {
            return NextResponse.json({ success: false, message: 'URL parameter is missing' }, { status: 400 });
        }
        
        const data = await GetInstagramPostData(postURL);

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
