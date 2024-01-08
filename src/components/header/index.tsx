import {useSession, signIn, signOut} from 'next-auth/react'
import Link from 'next/link'
import styles from './style.module.css'

export function Header(){
    const {data: session, status} = useSession();

    return(
        <header className={styles.header}>
            <section className={styles.container}>
                <nav className={styles.nav}>
                    <Link href={'/'}>
                    <h1 className={styles.logo}>Tarefas <span>+</span></h1>
                    </Link>
                    </nav>

                    <Link href={'/dashboard'} className={styles.link}>
                    Meu painel
                    </Link>
                    {status === 'loading' ? (
                        <></>
                    ): session ? <button className={styles.loginBtn} onClick={()=> signOut()}>olá {session?.user?.name}</button> : 
                    <button className={styles.loginBtn} onClick={()=> signIn('google')}>Login</button>

                    }
            </section>
        </header>
    )
}