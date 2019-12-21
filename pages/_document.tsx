import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <html lang="en-US" />
        <title>Podcaster🎤</title>
        <meta name="author" content="Esteban Dalel R"></meta>
        <meta name="description" content="A Podcast planner"></meta>
        <meta charSet='utf-8' />
        <meta name="theme-color" content="#3549ff" />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="blue" />
        <meta name="apple-mobile-web-app-title" content="Podcaster🎤" />
        <link rel="shortcut icon" href="Podcaster.ico" type="image/x-icon"></link>
        <link rel="apple-touch-icon" href="/podacastermicsquarebig.png"></link>
        <link rel="manifest" href="./manifest.json"></link>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
        <link rel="prefetch" href="/icons/gh.svg" />
        <link rel="prefetch" href="/icons/tw.svg" />
        <link rel="prefetch" href="/icons/fb.svg" />
        <link rel="prefetch" href="/icons/li.svg" />
        <link rel="prefetch" href="/icons/public.png" />
        <link rel="prefetch" href="/icons/loyalty.png" />
        <link rel="prefetch" href="/icons/assignment.png" />
        <link rel="prefetch" href="/icons/account_circle.png" />
        <link rel="stylesheet" href="/Draft.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}