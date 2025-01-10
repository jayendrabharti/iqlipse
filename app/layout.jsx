import './globals.css';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from '@/utils/ThemeProvider';
import Footer from "@/app/_components/Footer";
import NavBar from "@/app/_components/NavBar";
import HTMLHead from './_components/HtmlHead';
import getBaseURL from '@/utils/getBaseURL';

export default async function RootLayout({children}) {

    const res = await fetch(await getBaseURL()+'/api/clubInfo',{
        cache: 'no-store'
    });
    const clubInfo = await res.json();

return (
<html lang="en">
<HTMLHead/>
<body>
<ThemeProvider>
    <div className={`main grid grid-rows-[auto_1fr_auto] h-full w-full overflow-y-auto text-textColor2 overflow-hidden`}>
        <NavBar clubInfo={clubInfo}/>
        <div>{children}</div>
        <Footer clubInfo={clubInfo}/>
    </div>
</ThemeProvider>
<SpeedInsights />
</body>
</html>
);
}
