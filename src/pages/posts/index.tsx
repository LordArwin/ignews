import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from '@prismicio/client';
import styles from './styles.module.scss'
import { Client } from "../../services/prismicClient";
import { RichText } from "prismic-reactjs";

type Post = {
    slug: string,
    title: string,
    excerpt: string,
    updatedAt: string,
}

interface PostProps{
    posts:Post[]
}

export default function Posts({posts} : PostProps){
    return (
        <>
        <Head>
            <title>Posts | ig.news</title>
        </Head>
                
                <main className={styles.container}>
                    <div className={styles.posts}>
                        {posts.map((post)=>
                            <a key={post.slug} href={`/posts/${post.slug}`}>
                              <time>{post.updatedAt}</time>
                              <strong>{post.title}</strong>
                              <p>{post.excerpt}</p>
                            </a>
                        )}

                    </div>
                </main>
        </>

    )
}

export const getStaticProps: GetStaticProps = async () =>{
    const prismic = Client()
    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'posts')
    ]
    )
    const posts = response.results.map((post:any)=>{
        return{
            slug: post.uid,
            title: RichText.asText(post.data.titulo),
            excerpt: post.data.texto.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',
            {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return {
        props:{
            posts

    }
}
}