import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeFront } from '../../services/stripefront'
import styles from './styles.module.scss'
interface SubBtnProps{
    priceId:string
}
export function SubscribeButton ({priceId}:SubBtnProps){
    const [session] = useSession()

    async function handleSubscribe(){
        if(!session){
            signIn('github')
            return
        }

        try{
           
            const response = await api.post('/subscribe')
            console.log(response.data);
            
            const { sessionId } = response.data
            const stripe = await getStripeFront()

            await stripe.redirectToCheckout({sessionId})
        }catch (err){
            alert(err.message)
        }
    }

    return (<button className={styles.subscribeButton} onClick={handleSubscribe}> 
        Subscribe now
    </button>)
}