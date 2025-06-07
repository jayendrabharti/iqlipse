import { revalidatePath } from "next/cache"

export async function GET() {

    revalidatePath('/', 'layout');
    console.log("Revalidated full app!!")
    return Response.json("Revalidated full app!!")
}