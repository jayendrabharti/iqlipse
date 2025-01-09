import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavButton = ({name, icon}) => {

    const pathname = usePathname();
    const currentPage = pathname.split('/')[1];
   
return(
<Link
    href={`/${name}`} 
    className={`${(name == currentPage)?'bg-logoColor text-[#fff]':'text-textColor3 hover:bg-backgroundColor3 hover:text-textColor1'} p-2 rounded-full active:ring-2 active:ring-textColor3 flex flex-row space-x-2 w-full md:w-max pl-6 md:pl-2`}
>

    {icon}

    <span className={``}>
        {name.slice(0,1).toUpperCase()+name.slice(1)}
    </span>

</Link>


)}
export default NavButton;
