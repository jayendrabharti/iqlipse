import { getAnnouncements } from "@/sanity/fetching/announcements.fetch"
import CustomPortableText from "@/sanity/utils/customPortableText";
import { formatTimestamp } from "@/utils/common.utils";
import { Span } from "next/dist/trace";

export default async function AnnouncementPage(){

  const announcements = await getAnnouncements();

  return (
  <>
  <h1 className="mb-4 mt-4 tracking-tight font-extrabold text-logoColor text-2xl md:text-4xl p-2 text-center w-full">Announcements</h1>
  {!announcements.length && <p className="text-xl font-xl text-center p-2">No Announcements Yet</p>}

  <div className="px-2">
  {announcements.map((announcement,index)=>(
    <div key={index} className="border border-borderColor3 rounded my-2 mx-auto max-w-xl">
      <div
        className="border-b border-borderColor3 bg-backgroundColor2 rounded-t p-2 flex flex-row justify-between items-center"
      >
        <p className="text-md text-textColor1">{announcement.title}</p>
        <p
          className="text-xs block text-textColor2"
        >{formatTimestamp(announcement._createdAt)}</p>
      </div>
      
      <div className="p-2 w-full">
        <CustomPortableText value={announcement.body}/>
      </div>

      
    </div>
  ))}
  </div>

  </>
  )
}

