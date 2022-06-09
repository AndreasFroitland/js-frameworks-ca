import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useRouter } from 'next/router'
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Details(props) {

    const id = parseInt(useRouter().query.id);

    let post = props.posts.find(post => post.id === id)
    post = post ? [post] : null;

    return (
        <Layout>
            <Head />

            <div className="container">
                {post ? post.map((post) => {
                    return <div key={post.id}>
                        <h1>{post.title.rendered}</h1>
                        <p>{post.date}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>;
                }) : null}
            </div>

        </Layout>
    );
}

export async function getStaticProps() {
    let posts = [];

    try {
        const response = await axios.get(BASE_URL);
        posts = response.data

        return {
            props: {
                posts: posts,
            },
        };
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            posts: []
        }
    }

}
