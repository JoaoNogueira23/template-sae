import PostComponent from "@/components/Post"
import { objectPostType } from "@/types/postType"

interface PostProps {
    params: {
        postId: string
    }
}

const posts: objectPostType[] = [
    {
        postDate: '2024-09-01',
        postTitle: 'Unicamp promove ação inclusiva na Aldeia Tapirema',
        subTitle: 'Assistentes sociais e estudantes indígenas fortalecem laços e compartilham experiências nos II Jogos Indígenas da Aldeia Tapirema',
        imgPath: '/post1.png',
        paragraphs: [
            'A Unicamp esteve representada por uma comitiva de estudantes de graduação, assistentes sociais da Diretoria Executiva de Apoio e Permanência Estudantil, Cibele Papa Palmeira, Érica Maria Cazetta, Vani Santos e Fernanda Ayres da Silva representante da Diretoria Executiva de Direitos Humanos participaram da ação para divulgar o Vestibular Indígena e as Políticas de Permanência Estudantil.',
            'As assistentes sociais e os estudantes da Unicamp conduziram rodas de conversa, compartilhando suas experiências sobre a importância da educação superior para as comunidades indígenas. Os estudantes indígenas da Unicamp também contribuíram significativamente, relatando suas vivências pessoais e acadêmicas, inspirando outros jovens a considerarem o ingresso na universidade.',
            'Apesar da proximidade geográfica, a participação de indígenas no Vestibular da Unicamp ainda é modesta, tornando essa ação essencial para fortalecer o vínculo entre a universidade e as comunidades. Desde a criação do Vestibular Indígena em 2019, o número de estudantes indígenas vem crescendo, e conhecer de perto a realidade dessas populações, como na Aldeia Tapirema, permite o desenvolvimento de políticas mais eficazes para garantir a inclusão e permanência desses alunos.',
            'Aldeia Tapirema está localizada na Terra Indígena de Piaçaguera, a Aldeia Tapirema é um polo cultural que promove cursos e eventos, como os Jogos Indígenas, em colaboração com diversas instituições.'
        ]
    },
    {
        postDate: '2024-09-05',
        postTitle: 'Understanding React Hooks',
        subTitle: 'Learn how React Hooks work and how to use them in functional components',
        imgPath: '/post1_1.png',
        paragraphs: [
            'React Hooks allow you to use state and other React features without writing a class.',
            'The most common hooks are useState and useEffect.',
            'Let’s dive deeper into hooks and how to manage component lifecycle with them.'
        ]
    },
    {
        postDate: '2024-09-10',
        postTitle: 'Next.js: The Framework for Production',
        subTitle: 'Why Next.js is a great choice for building production-ready apps',
        imgPath: '/post1_2.png',
        paragraphs: [
            'Next.js is a React framework that enables server-side rendering and static site generation.',
            'It provides excellent features like dynamic routing, API routes, and image optimization.',
            'Let’s explore how Next.js can make your development workflow more efficient.'
        ]
    },
    {
        postDate: '2024-09-15',
        postTitle: 'CSS Grid vs Flexbox',
        subTitle: 'A detailed comparison between CSS Grid and Flexbox for web layout',
        imgPath: '/post1_3.png',
        paragraphs: [
            'CSS Grid is a powerful 2D layout system, while Flexbox is designed for 1D layouts.',
            'In this post, we’ll compare their strengths and use cases.',
            'Both CSS Grid and Flexbox are essential tools for modern web design.'
        ]
    },
    {
        postDate: '2024-09-20',
        postTitle: 'Building APIs with Node.js',
        subTitle: 'How to build scalable APIs using Node.js and Express',
        imgPath: '/post1.png',
        paragraphs: [
            'Node.js is a JavaScript runtime built on Chrome’s V8 engine, ideal for building APIs.',
            'Express.js is a lightweight web framework for Node.js, perfect for creating REST APIs.',
            'In this post, we’ll cover how to structure and build APIs with Node.js and Express.'
        ]
    }
];
export default function Post({params}: PostProps){

    return(
       <PostComponent 
            objectPost={posts[Number(params.postId)]}
        /> 
    )
}