import Link from "next/link";
import Head from "next/head";
import Paypal from "../../components/Paypal";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Paypal />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
