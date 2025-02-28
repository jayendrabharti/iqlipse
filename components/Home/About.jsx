import Balancer from 'react-wrap-balancer';

export default function AboutUs({clubInfo}){
return(
<section 
  id="about-us"
  className="px-2 pt-16 sm:pt-0"
>
<div className="mx-auto p-4 sm:p-20 md:44 rounded-lg text-center text-textColor3">
    <h1 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-logoColor text-center">About Us</h1>
    <Balancer dangerouslySetInnerHTML={{__html: clubInfo.about}} className={'max-w-xl'} />
</div>

</section>
)}