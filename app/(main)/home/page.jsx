import HeroSection from "@/components/Home/HeroSection";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import AboutUs from "@/components/Home/About";
import MainGallery from "@/components/Home/MainGallery";
import Join from "../join/page";
import { GetClubInfo, GetEvents } from "../actions";
import EventsTimeline from "@/components/Home/EventsTimeline";

export default async function HomePage() {
  const clubInfo = await GetClubInfo();
  const events = await GetEvents();

  return (
    <>
      <HeroSection clubInfo={clubInfo} />
      <EventsTimeline events={events} />
      <Join />
      <MainGallery clubInfo={clubInfo} />
      <AboutUs clubInfo={clubInfo} />
      <UpcomingEvents events={events} />
    </>
  );
}
