"use server";
import { cookies } from "next/headers";

export async function setTheme(theme) {
  const cookieStore = await cookies() 
  cookieStore.set('theme', theme)
}
