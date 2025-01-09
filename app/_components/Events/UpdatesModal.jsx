import { formatTimestamp } from "@/utils/common.utils"
import CustomPortableText from "@/sanity/utils/customPortableText"
import { ArrowBigDown, ChevronDown, CircleHelp, X } from "lucide-react"

export default function UpdatesModal({updates,updatesRef}){

return (
<dialog
  ref={updatesRef}
  className=" text-textColor1 p-3 rounded-lg border border-borderColor1 bg-backgroundColor2 w-[600px] max-w-full space-y-3 backdrop:backdrop-blur-sm">

  <div className="text-textColor1 font-bold flex flex-row justify-between px-3">
    <h2 className="text-3xl ">Updates</h2>
    <X
      onClick={()=>updatesRef.current.close()} 
      className="h-10 w-10 hover:bg-backgroundColor3 rounded-full hover:border-2 hover:border-borderColor3"
    />
  </div>
  
{!updates && <><hr /><span className="flex flex-row justify-center text-center text-textColor3">No Updates Yet</span></>}

{updates && updates.map(update=>{return(

<div key={update._key} className="border-2 border-borderColor3 rounded-md">
    <div className="p-2 border-b-2 border-borderColor3 flex flex-row justify-between bg-backgroundColor3 rounded-t-md">
        <span className="font-bold text-lg">{update.title}</span>
        <span>{formatTimestamp(update.updateTime)}</span>
    </div>

    <div className="p-2 text-textColor2">
        <CustomPortableText value={update.content}/>
    </div>

</div>

)})}


</dialog> 
)}
