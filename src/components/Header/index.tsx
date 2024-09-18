import Link from 'next/link'
import styles from './header.module.sass'

export default function Header() {
    return(
        <header className={styles.header}>
            <div className="logo">
                SAE
            </div>

            <nav className={styles.navbar}>
                <ul className={styles.listNav}>
                    <li>
                        <Link href={'/'} className={styles.pageLink}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/permanencia'} className={styles.pageLink}>Permanencia</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}