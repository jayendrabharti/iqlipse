import './globals.css';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from '@/utils/ThemeProvider';
import Footer from "@/app/_components/Footer";
import NavBar from "@/app/_components/NavBar";
import getBaseURL from '@/utils/getBaseURL';
import Background from './_components/Background';

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
    viewport: 'width=device-width, initial-scale=1',
};

export default async function RootLayout({children}) {

    const res = await fetch(await getBaseURL()+'/api/clubInfo',{
        cache: 'no-store'
    });
    const clubInfo = await res.json();

return (
<html lang="en">
{/* <HTMLHead/> */}
{/* <Head>
    <title>Iqlipse Club LPU</title>
    <meta name="description" content="Website for Iqlipse Club of Lovely Professional University." />
    <meta name="keywords" content="Iqlipse, Iqlipse Club, LPU, Lovely Professional University, DSO Club" />
    <meta name="author" content="Iqlipse Tech Lead" />

    <meta property="og:title" content="Iqlipse Club LPU" />
    <meta property="og:description" content="Join the Iqlipse Club at Lovely Professional University and discover a thriving community of driven students united by a passion for teamwork and leadership." />
    <meta property="og:image" content="https://iqlipse.space/api/media/titleLogo" />
    <meta property="og:url" content="https://iqlipse.space" />
  </Head> */}
<body>
<ThemeProvider>
    <Background/>
    <div className={`main grid grid-rows-[auto_1fr_auto] h-screen w-full overflow-y-auto text-textColor2 overflow-hidden`}>
        <div id='top-scroll-div'/>
        <NavBar clubInfo={clubInfo}/>
        <div>{children}</div>
        <Footer clubInfo={clubInfo}/>
    </div>
</ThemeProvider>
<SpeedInsights />
<Analytics />
</body>
</html>
);
}
