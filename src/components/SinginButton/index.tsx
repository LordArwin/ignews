import { useState } from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import style from './styles.module.scss'

export function SiginButton(){
    const [isLogged, setIsLogged] = useState<boolean>(false)

    return isLogged ? (
        <button className={style.buttonSigin}>
            <FaGithub/>
            <span>Sing in with Github</span>
        </button>
    ) : (
        <button className={style.buttonSigin}>
            <FaGithub className={style.logged}/>
            <span>LordArwin</span>
            <AiOutlineClose className={style.close}></AiOutlineClose>
        </button>
    ) 
}