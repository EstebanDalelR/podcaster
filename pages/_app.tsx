import React from 'react'
import App from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <style global jsx>{`
         @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
         @import url('https://fonts.googleapis.com/css?family=Copse&display=swap');
         html, body{
           margin: 0px;
        }
        h1, h2, h3, h4, h5, h6{
          color: #fafafa;
          font-family: 'Copse', sans-serif;
        }
        p, ul, ol, button{
          color: #fafafa;
          font-family: "Rubik";
        }
        `}</style>
        <Head>
          <title>Shockmount | Plan your podcasts</title>
          <link rel='manifest' href='/manifest.json'></link>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}