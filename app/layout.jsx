import './globals.css';

import { getClubInfo } from '@/sanity/fetching/clubInfo.fetch';
import { ThemeProvider } from '@/utils/ThemeProvider';
import Footer from "@/app/_components/Footer";
import NavBar from "@/app/_components/NavBar";
import HTMLHead from './_components/HtmlHead';

export default async function RootLayout({children}) {

    const clubInfo = await getClubInfo();

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
</body>
</html>
);
}
