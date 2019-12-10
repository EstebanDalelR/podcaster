import React from 'react'
import App from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'
import "../public/locales/en/translation.json"
import "../public/locales/es/translation.json"
import "../public/locales/en-US/translation.json"
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
      <Layout>
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
        <Head>
          <title>Podcaster🎤</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="manifest" href="./manifest.json"></link>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="blue" />
          <meta name="apple-mobile-web-app-title" content="Podcaster🎤" />
          <link rel="apple-touch-icon" href="/podacastermicsquarebig.png"></link>
          <meta name="description" content="A Podcast planner"></meta>
          <meta name="theme-color" content="#3549ff" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
          <link rel="prefetch" href="/icons/gh.svg" />
          <link rel="prefetch" href="/icons/tw.svg" />
          <link rel="prefetch" href="/icons/fb.svg" />
          <link rel="prefetch" href="/icons/li.svg" />
          <link rel="prefetch" href="/icons/public.png" />
          <link rel="prefetch" href="/icons/loyalty.png" />
          <link rel="prefetch" href="/icons/assignment.png" />
          <link rel="prefetch" href="/icons/account_circle.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
  }
}