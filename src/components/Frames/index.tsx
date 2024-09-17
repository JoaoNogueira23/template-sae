import Image from "next/image";
import styles from './frames.module.sass'

const images = [
    '/post1_1.png',
    '/post1_2.png',
    '/post1_3.png'
]

export default function FrameHorizontal() {
    return(
        <div className={styles.containerFrameHorizontal}>
            {images.map((imgPath) => (
                <Image 
                width={200}
                height={150}
                src={imgPath}
                alt="Image description post"
                className="imgPostFrame"
                key={`id-${Math.random()}`}
            />
            )
            )}
        </div>  
    )
}