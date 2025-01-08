import {ILinks} from '@/interfaces/links';
import { Link } from '@mui/material';
import './navs.scss'

export default function ListWithLinks({links}: {links: Array<ILinks>}){
    return (
        <>
            {
                links.map(
                    (link: ILinks, index: number) => 
                    <Link 
                        href={link.link} 
                        underline="hover" 
                        target={link.outside ==  true ? "_blank" : "_self"} 
                        rel={link.outside ==  true ? "noopener" : ""} 
                        key={index}
                        className='navs'
                    >
                        {link.name}
                    </Link>
                )
            }
        </>
    )
}