import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout';



const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => {
            try {
              console.log(`script loaded correctly, window.FB has been populated`)

            } catch (error) {
              console.log(error);
            }
          }
          }
      />

      <div>FirstPost</div>
      <p>
        <Link href='/'>home</Link>
      </p>
    </Layout>
  )
}

export default FirstPost