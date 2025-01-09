"use client"
import { usePathname } from "next/navigation"

export default function HTMLHead(){

    const pathname = usePathname().split('/')[1];
    const pageName = pathname.slice(0,1).toUpperCase() + pathname.slice(1)

return(
    <head>
        <title>{`Iqlipse | ${pageName}`}</title>
        <link rel="favicon" href="../public/favicon.ico" type="image/x-icon" />
    </head>
)
}