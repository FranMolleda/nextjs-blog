import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
/* import Script from "next/script";
 */

function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

        {/* Si quisiesemos agregar un Script (como font de google, por ejemplo), importariamos el Script de next/script y traeriamos el script aquí: 
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />*/}
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}

export default FirstPost;
