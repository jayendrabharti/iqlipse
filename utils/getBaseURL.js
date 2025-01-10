import { headers } from "next/headers";

export default async function getBaseURL(){

    const headerList = await headers();
    const proto = headerList.get('x-forwarded-proto');
    const host = headerList.get('x-forwarded-host');
    const baseURL = `${proto}://${host}`;
    return baseURL;
}