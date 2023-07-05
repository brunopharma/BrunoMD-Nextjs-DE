import { Html, Head, Main, NextScript } from 'next/document'
import loader from './loader'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo/icon.avif" />
        <link rel="stylesheet" href="https://use.typekit.net/evu8blm.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
        <style>
          {loader}
        </style>
      </Head>
      <body>
        <div id={'globalLoader'}>
          <div className="loader">
            <div />
            <div />
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
