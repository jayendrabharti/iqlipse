
import { imageURL } from '@/sanity/utils/common.utils';
import { AtSign, Phone } from 'lucide-react';
import Image from 'next/image';
export default async function Footer({clubInfo}) {

    return (
        <footer className="p-4 bg-backgroundColor2 sm:p-6">
            <div className="mx-auto max-w-screen-xl">
                
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <Image 
                                src={imageURL(clubInfo.logoSmall).url()} 
                                className="mr-3 h-16" 
                                alt="iqlipse" 
                                height={100}
                                width={100}
                                quality={50}
                            />
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
                                <li className="mb-2">
                                    <a href={"/os.pdf"}  className="hover:underline">OS ppt</a>
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
                
                <div className='flex flex-row space-x-1.5 items-center justify-center'>
                    <span>Developed by</span>
                    <a 
                        href='https://github.com/jayendrabharti'
                        target='_blank'
                        className='flex flex-row space-x-1.5 font-bold p-1 px-2 bg-borderColor1 rounded-sm hover:text-textColor1 hover:ring-2 hover:ring-textColor1 transition-all duration-200'
                    >
                        <span>Jayendra Bharti</span>
                        <svg
                            className="w-6 h-6 hover:scale-150 transition-all duration-200"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <hr className="my-6 border-textColor3 sm:mx-auto lg:my-8" />
                
                
                <div className="sm:flex sm:items-center sm:justify-between ">
                    
                    <span className="text-sm text-textColor2 sm:text-center">© 2025 Iqlipse LPU. All Rights Reserved.</span>

                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        
                        
                        <a href={clubInfo?.socials?.instagram || "#"} target='_blank'>
                            <svg className="w-5 h-5 hover:scale-150 scale-125 transition-all duration-200" fill="#dd2a7b" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </a>

                        <a href={clubInfo?.socials?.x || "#"} target='_blank'>
                            {/* <img src={'../public/linkedin.png'} className="w-5 h-5 hover:scale-150 scale-125 transition-all duration-200" alt="linkedin" /> */}
                            <svg className="w-5 h-5 hover:scale-150 scale-125 transition-all duration-200  dark:bg-white rounded" viewBox="0 0 50 50">
                                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                            </svg>
                        </a>

                        <a href={clubInfo?.socials?.linkedin || "#"} target='_blank'>
                            <img className="w-5 h-5 hover:scale-150 scale-125 transition-all duration-200  dark:fill-white" src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="linkedin" />
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
