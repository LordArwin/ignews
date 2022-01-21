import { SiginButton } from "../SinginButton";
import style from './styles.module.scss'
import Link from 'next/link'
import { ActiveLink } from "../ActiveLink";
export function Header(){
    return (
        <header className={style.container}>
            <div>
                <nav>

                <img src="/images/logo.svg" alt="Logo ig.news" />

                <ul>
                    <li > 
                        <ActiveLink  href='/' linkName = 'Home'/>
                    </li>
                    <li>
                        <ActiveLink href='/posts' linkName = 'Posts'/>
                    </li>
                </ul>
                </nav>
                <SiginButton></SiginButton>
            </div>
        </header>
    )
}