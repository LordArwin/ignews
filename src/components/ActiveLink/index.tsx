import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import style from '../Header/styles.module.scss'
interface LinkProps{
    href?: string;
    linkName: string;
}

export function ActiveLink({href, linkName} : LinkProps){
    const {asPath} = useRouter()    
    return (
        <Link href={href}>
                <a className={`${href === asPath ? style.active : ''}`}>{linkName}</a>
        </Link>
    )
}