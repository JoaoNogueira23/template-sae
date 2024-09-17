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
        postTitle: 'Introduction to TypeScript',
        subTitle: 'Getting started with TypeScript for better JavaScript development',
        imgPath: '/post1.png',
        paragraphs: [
            'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
            'It provides optional static typing, classes, and interfaces.',
            'In this post, we will explore how to get started with TypeScript.'
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