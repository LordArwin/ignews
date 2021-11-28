import { SiginButton } from "../SinginButton";
import style from './styles.module.scss'
export function Header(){
    return (
        <header className={style.container}>
            <div>
                <nav>

                <img src="/images/logo.svg" alt="Logo ig.news" />

                <ul>
                    <li > 
                        <a className={style.active}>Home</a>
                    </li>
                    <li>
                        <a>Posts</a>
                    </li>
                </ul>
                </nav>
                <SiginButton></SiginButton>
            </div>
        </header>
    )
}