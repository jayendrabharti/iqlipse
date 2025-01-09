import CustomPortableText from "@/sanity/utils/customPortableText";


export default function AboutUs({clubInfo}){
return(
<section 
  id="about-us"
  className="px-2"
>
<div className="mx-auto p-4 sm:p-20 md:44 rounded-lg text-textColor3">
    <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-logoColor text-center">About Us</h1>
    <br />
    <CustomPortableText value={clubInfo.about}/>
</div>

</section>
)}