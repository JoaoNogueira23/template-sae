import React from 'react'
import styles from './permanence.module.sass'


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
                        <li className={styles.navItem}>Serviço Social</li>
                        <li className={styles.navItem}>Bolsas Auxílio</li>
                        <li className={styles.navItem}>Orientações de Projetos</li>
                        <li className={styles.navItem}>Notícias</li>
                        <li className={styles.navItem}>Agenda</li>
                        <li className={styles.navItem}>Conta</li>  
                    </ul>
                </nav>
            </div>
           

            {children}
        </div>

    )
}