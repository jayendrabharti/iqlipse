import { ArrowBigDown, ChevronDown, CircleHelp, X } from "lucide-react"

export default function FAQsModal({faqs,faqsRef}){
 
return (
<dialog
  ref={faqsRef}
  className="text-textColor1 p-3 rounded-lg border border-borderColor1 bg-backgroundColor2 w-[600px] max-w-full space-y-3 backdrop:backdrop-blur-sm">

  <div className="text-textColor1 font-bold flex flex-row justify-between px-3">
    <h2 className="text-3xl ">
      F<span className="text-base">requently</span>&nbsp;
      A<span className="text-base">sked</span>&nbsp;
      Q<span className="text-base">uestions</span>
    </h2>
    <X
      onClick={()=>faqsRef.current.close()} 
      className="h-10 w-10 hover:bg-backgroundColor3 rounded-full hover:border-2 hover:border-borderColor3"
    />
  </div>  


{!faqs && <><hr /><span className="text-textColor3 flex flex-row justify-center text-center">No FAQs Yet</span></>}


{faqs && faqs.map(faq=>{return(

<details key={faq._key}
  className="border-2 border-borderColor3 rounded-lg group"  
>
  <summary className="group-[&[open]]:border-b-2 border-borderColor3 p-2 text-textColor1 bg-backgroundColor3 group-[&:not([open])]:rounded-lg group-[&[open]]:rounded-t-lg grid grid-cols-[auto_1fr_auto]">
    <CircleHelp className="mr-3"/>
    {faq.question}
    <ChevronDown className="group-[&:not([open])]:rotate-0 group-[&[open]]:rotate-180 ml-auto transition-all duration-300"/>
  </summary>

  <div 
    className="text-textColor2 overflow-scroll p-2">
    {faq.answer}
  </div>

</details>
)})}


</dialog> 
)}
