import React from 'react'
import App from 'next/app'
import Layout from '../components/layout'

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
        h1, h2, h3, h4, h5{
          color: #fbfbfb;
          font-family: 'Copse', sans-serif;
        }
        p, ul, button{
          color: #fbfbfb;
          font-family: "Rubik";
        }
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}