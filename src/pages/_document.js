import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="shortcut icon" href="/logo/icon.avif" />
      <link rel="stylesheet" href="https://use.typekit.net/evu8blm.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
