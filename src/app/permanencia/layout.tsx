import React from 'react'
import styles from './permanence.module.sass'
import Link from 'next/link'


interface PermanenceLayoutProps {
    children: React.ReactNode
}
export default function PermanenceLayout({children}: PermanenceLayoutProps){
    return(
        <div className={styles.containerPermanence}>
            
            <div className={styles.headerPermanence}>
                <h2 className={styles.pageTitle}>Serviço Social</h2>

                <nav className={styles.navBar}>
                    <ul>
                        <li >
                            <Link href='/permanencia/servico-social' className={styles.navItem}>
                                Serviço Social
                            </Link> 
                        </li>
                        <li >
                            <Link href='/permanencia/noticias' className={styles.navItem}>
                                Notícias
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
           

            {children}
        </div>

    )
}