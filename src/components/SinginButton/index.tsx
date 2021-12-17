import { useState } from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import style from './styles.module.scss'
import { signin, signOut, useSession} from 'next-auth/client'
export function SiginButton(){
    const [session] = useSession()
    return !session ? (
        <button onClick={()=>signin('github')} className={style.buttonSigin}>
            <FaGithub className={style.offline}/>
            <span>Sing in with Github</span>
        </button>
    ) : (
        <button onClick={()=> signOut()} className={style.buttonSigin}>
            <FaGithub className={style.logged}/>
            <span>{session?.user.name}</span>
            <AiOutlineClose className={style.close}></AiOutlineClose>
        </button>
    ) 
}