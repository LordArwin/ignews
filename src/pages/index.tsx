import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>
    <main className={styles.container}>
      <section className={styles.title}>
        <span className={styles.welcome}>👏 Hey, Welcome</span>
        <h1>News About the <span>React</span> world</h1>
        <p>Get acess to all the publications <br/><span>for $9,90 month</span></p>
        <SubscribeButton></SubscribeButton>
      </section>
      <img src="/images/avatar.svg" alt="Girl Coding" />
    </main>
    </>
    )
}
