import Head from 'next/head'
import {GetStaticProps} from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from '../styles/home.module.scss'
import { stripe } from '../services/stripe'
interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}
export default function Home({product}: HomeProps) {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>
    <main className={styles.container}>
      <section className={styles.title}>
        <span className={styles.welcome}>👏 Hey, Welcome</span>
        <h1>News About the <span>React</span> world</h1>
        <p>Get acess to all the publications <br/><span>for {product.amount} month</span></p>
        <SubscribeButton priceId={product.priceId}></SubscribeButton>
      </section>
      <img src="/images/avatar.svg" alt="Girl Coding" />
    </main>
    </>
    )
}

export const getStaticProps:GetStaticProps = async() =>{
  const price = await stripe.prices.retrieve('price_1K0olPFJOn2OEeqHJt3L9rhh', {expand:['product']})
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-Us',{currency:'USD', style:'currency'}).format(price.unit_amount/100)
  }
  return{
    props:{
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
