import HeroSection from "@/components/Home/HeroSection";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import AboutUs from "@/components/Home/About";
import MainGallery from "@/components/Home/MainGallery";
import Join from "../join/page";
import InstagramFeed from "@/components/InstagramFeed";

import { GetClubInfo } from "../actions";

export default async function HomePage(){

  const clubInfo = await GetClubInfo();
  if (!clubInfo) return <PageNotFound />;

  return (
    <>
      <HeroSection clubInfo={clubInfo} />
      <Join/>
      <InstagramFeed clubInfo={clubInfo} />
      <MainGallery clubInfo={clubInfo} />
      <AboutUs clubInfo={clubInfo} />
      <UpcomingEvents clubInfo={clubInfo}/>
    </>
  )
}
