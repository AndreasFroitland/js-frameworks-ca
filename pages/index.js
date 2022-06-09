import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Index(props) {
  // the log here will happen in the browser console
  console.log(props);

  return (
    <Layout>
      <Head title="Next Intro" />

      {props.posts.map((post) => {
        return <h3 key={post.slug}>{post.title}</h3>;
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  let posts = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    posts = response.data.results;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
        posts: posts,
    },
  };
}