import EventCard from "@/app/_components/Events/EventCard";
import getBaseURL from "@/utils/getBaseURL";

export default async function EventsPage(){
  
  const data = await fetch(await getBaseURL()+'/api/events',{
    cache: 'no-store'
  });
  const events = await data.json();

  return (
  <>
  <Head>
    <title>Events</title>
    <meta name="description" content={"Events by IQLIPSE"} />
    <meta property="og:title" content={"Events - IQLIPSE"} />
    <meta property="og:description" content={"Events organised by Iqlipse"} />
    <meta property="og:image" content={`https://www.iqlipse.space/api/media/events`} />
    <meta property="og:url" content={`https://www.iqlipse.space/events`} />
  </Head>
  <h1 className="mb-4 mt-4 tracking-tight font-extrabold text-logoColor text-2xl md:text-4xl p-2 text-center w-full">Events</h1>
    
  {!events.length && <p className="text-xl text-center p-2">No Events Yet</p>}

  <div id="events" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    {events.map((event)=> <EventCard key={event._id} event={event} />)}
  </div>
  </>
  )
}

