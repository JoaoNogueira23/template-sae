import styles from './news.module.sass'
import Carousel from './../../../components/Courosel/index';

export default function NewsPage(){

    return(
        <div className={styles.containerNews}>
            <h2 className={styles.titleSection}>Notícias</h2>

            <div className={styles.cardsNews}>
               <Carousel />
            </div>
        </div>
    )
}