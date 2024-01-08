import  Head from 'next/head'
import Image from 'next/image'
import scheduleImage from '../../public/assets/home.svg'
import styles from '../styles/home.module.css'
export default function Home() {
  return (
   <div className={styles.container}>
   <Head>
    <title>Tarefas</title>
   </Head>

   <main>
    <div className={styles.logoContent}>
      <Image className={styles.logo} src={scheduleImage} alt='logo' priority/>
    </div>


    <div>
      <h1 className={styles.title}>Sistema para voce organizar seus estudos e tarefas</h1>
    </div>

    <div className={styles.infoContent}>
      <section className={styles.box}>
        <span>+12 posts</span>
      </section>

      <section className={styles.box}>
        <span>+12 posts</span>
      </section>
    </div>
   </main>
   </div>
  )
}
