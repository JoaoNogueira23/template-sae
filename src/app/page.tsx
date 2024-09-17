import Image from "next/image";
import styles from "./page.module.sass";
import FrameHorizontal from "@/components/Frames";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.postDescribeSection}>
        <h4 className={styles.postDate}>
            06 Set 2024 |
        </h4>

        <h2 className={styles.postTitle}>
          Unicamp promove ação exclusiva na Aldeia Tapirema
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
            Assistentes sociais e estudantes indígenas fortalecem laços e compartilham experiências nos II Jogos Indígenas da Aldeia Tapirema
          </h4>
        </div>
        

        <p className={styles.firstParagraph}>
          Durante os II Jogos Indígenas na Aldeia Tapirema, em Peruíbe (SP), atividades tradicionais como arco e flecha, corrida de tronco e zarabatana foram acompanhadas de cantos, danças e rezas, proporcionando uma imersão cultural e ancestral.
        </p>

        <p>
        A Unicamp esteve representada por uma comitiva de estudantes de graduação, assistentes sociais da Diretoria Executiva de Apoio e Permanência Estudantil, Cibele Papa Palmeira, Érica Maria Cazetta, Vani Santos e Fernanda Ayres da Silva representante da Diretoria Executiva de Direitos Humanos participaram da ação para divulgar o Vestibular Indígena e as Políticas de Permanência Estudantil.
        </p>

        <p>
        As assistentes sociais e os estudantes da Unicamp conduziram rodas de conversa, compartilhando suas experiências sobre a importância da educação superior para as comunidades indígenas. Os estudantes indígenas da Unicamp também contribuíram significativamente, relatando suas vivências pessoais e acadêmicas, inspirando outros jovens a considerarem o ingresso na universidade.
        </p>

        <p>
        Apesar da proximidade geográfica, a participação de indígenas no Vestibular da Unicamp ainda é modesta, tornando essa ação essencial para fortalecer o vínculo entre a universidade e as comunidades. Desde a criação do Vestibular Indígena em 2019, o número de estudantes indígenas vem crescendo, e conhecer de perto a realidade dessas populações, como na Aldeia Tapirema, permite o desenvolvimento de políticas mais eficazes para garantir a inclusão e permanência desses alunos.
        </p>

        <p>
        Aldeia Tapirema está localizada na Terra Indígena de Piaçaguera, a Aldeia Tapirema é um polo cultural que promove cursos e eventos, como os Jogos Indígenas, em colaboração com diversas instituições.
        </p>
      </div>

      <FrameHorizontal />

    </div>
  );
}
