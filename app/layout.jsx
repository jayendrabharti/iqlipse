import './globals.css';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from '@/utils/ThemeProvider';
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Background from '@/components/Background';
import { GetClubInfo } from './actions';


export const metadata = {
    title: 'IQLIPSE - Lovely Professional University',
    description: 'Iqlipse - A dynamic community fostering talent, creativity, and innovation through events, competitions, and collaborations.',
    keywords: 'Iqlipse, Iqlipse LPU, Iqlipse Club, LPU, Lovely Professional University, DSO Club',
    author: 'Iqlipse Tech Lead',
    openGraph: {
        title: 'IQLIPSE - Lovely Professional University',
        description: 'Iqlipse - A dynamic community fostering talent, creativity, and innovation through events, competitions, and collaborations.',
        images: [
            {
                url: 'https://iqlipse.space/api/media/logo',
                alt: 'Iqlipse Club Logo',
            },
        ],
        url: 'https://iqlipse.space',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@iqlipse_lpu',
        title: 'IQLIPSE - Lovely Professional University',
        description: 'Iqlipse - A dynamic community fostering talent, creativity, and innovation through events, competitions, and collaborations.',
        image: 'https://iqlipse.space/api/media/logo',
    },
    robots: 'index, follow',
};

export const viewport = {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

export const dynamic = 'force-dynamic';


export default async function RootLayout({children}) {

    const clubInfo = await GetClubInfo();

return (
<html lang="en" suppressHydrationWarning>
<body className='w-full'>
<ThemeProvider>
    <Background/>
    <div className={`main grid grid-rows-[auto_1fr_auto] h-screen w-full overflow-y-auto text-textColor2 overflow-hidden`}>
        <div id='top-scroll-div'/>
        <NavBar clubInfo={clubInfo}/>
        <div>{children}</div>
        <Footer clubInfo={clubInfo}/>
    </div>
<SpeedInsights />
<Analytics />
</ThemeProvider>
</body>
</html>
);
}