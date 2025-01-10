
import { imageURL } from '@/sanity/utils/common.utils';
import { AtSign, Phone } from 'lucide-react';


export default async function Footer({clubInfo}) {

    return (
        <footer className="p-4 bg-backgroundColor2 sm:p-6">
            <div className="mx-auto max-w-screen-xl">
                
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src={imageURL(clubInfo.logoSmall).url()} className="mr-3 h-16" alt="iqlipse" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-textColor2 uppercase">Quick Links</h2>
                            <ul className="text-textColor3">
                                <li className="mb-2">
                                    <a href="/home" className="hover:underline">Home</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/team" className="hover:underline">Team</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/events" className="hover:underline">Events</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="/announcements" className="hover:underline">Announcements</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/posts" className="hover:underline">Posts</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/contact" className="hover:underline">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-textColor2 uppercase">Reach us</h2>
                            <ul className="text-textColor3">
                                {clubInfo.address.map((line,index)=><li key={index} className="text-textColor3 mb-1">{line}</li>)}
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-textColor2 uppercase">Contact us</h2>
                            <ul className="text-textColor3">
                                <li className="mb-4">
                                    <a href={`mailto:${clubInfo.email}`} className="text-textColor3 hover:underline flex flex-row min-w-max">
                                        <AtSign className='mr-2'/>
                                        {clubInfo.email}
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${clubInfo.phone}`} className="text-textColor3 hover:underline flex flex-row min-w-max">
                                        <Phone className='mr-2'/>
                                        {clubInfo.phone}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    
                    </div>
                </div>


                <hr className="my-6 border-textColor3 sm:mx-auto lg:my-8" />
                
                
                <div className="sm:flex sm:items-center sm:justify-between ">
                    
                    <span className="text-sm text-textColor2 sm:text-center">© 2025 Iqlipse LPU. All Rights Reserved.</span>

                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        
                        
                        <a href={clubInfo?.socials?.instagram || "#"} target='_blank'>
                            <svg className="w-5 h-5 hover:scale-150 scale-125 transition-all duration-200" fill="#dd2a7b" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </a>
                        
                        <a href={clubInfo?.socials?.youtube || "#"} target='_blank'>
                            <svg className='w-5 h-5 hover:scale-150 scale-125 transition-all duration-200' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"/><path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"/>
                            </svg>
                        </a>

                        <a href={clubInfo?.socials?.facebook || "#"} target='_blank'>
                            <svg className="w-5 h-5 hover:scale-150 scale-125 transition-all duration-200" fill="#39569c" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                    
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </footer>
    )
};
