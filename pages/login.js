import Head from "next/head";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/form/LoginForm";

export default function Login() {
  return (
    <Layout>
      <Head />
        <div className="container">
          <h1>Login page</h1>
          <LoginForm />
        </div>
    </Layout>
 );
}