import styles from './header.module.sass'

export default function Header() {
    return(
        <header className={styles.header}>
            <div className="logo">
                SAE
            </div>

            <nav className={styles.navbar}>
                <ul className={styles.listNav}>
                    <li>Opção 1</li>
                    <li>Opção 2</li>
                    <li>Opção 3</li>
                </ul>
            </nav>
        </header>
    )
}