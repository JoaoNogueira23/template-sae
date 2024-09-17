import Image from "next/image"
import styles from './post.module.sass'
import FrameHorizontal from "../Frames"
import { objectPostType } from "@/types/postType"
interface PostComponentProps {
    objectPost: objectPostType
}
export default function PostComponent({objectPost} : PostComponentProps){
    return(
        <div className={styles.containerPost}>
            <div className={styles.postDescribeSection}>
                <h4 className={styles.postDate}>
                    {objectPost.postDate}
                </h4>

                <h2 className={styles.postTitle}>
                    {objectPost.postTitle}
                </h2>

            </div>
            

            <Image 
                width={600}
                height={470}
                src={'/post1.png'}
                alt="Image Post"
                className={styles.imgPostMain}
            />
            <div className={styles.contentParagraphs}>
                <div className={styles.postDescribeSection}>
                    <h4 className={styles.subTitle}>
                        {objectPost.subTitle}
                    </h4>
                </div>
                

                <p className={styles.firstParagraph}>
                    {objectPost.paragraphs[0]}
                </p>
                {objectPost.paragraphs.map((paragraph, index) => (
                    index != 0 ? (
                        <p key={`p-${index}`}>
                            {paragraph}
                         </p>
                    ) : ('')
                    )
                )}
            </div>

            <FrameHorizontal />
        </div>
    )
}