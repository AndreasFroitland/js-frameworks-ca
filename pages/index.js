import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import Link from 'next/link'

export default function Home(props) {

  return (
    <Layout props={props}>
      <Head />
        {props.posts.map((post) => {
          return <div class="container"><div key={post.slug}>
            <Link href={`/details?id=${post.id}`}>
              {post.title.rendered}
            </Link>
              <p>{post.date}</p>
            </div>
          </div>;
      })}
    </Layout >
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