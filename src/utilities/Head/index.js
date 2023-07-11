import Head from 'next/head';

function PageHead({ content }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="canonical" href="https://brunomd.eu/" />
            <title>{content?.title}</title>
            <meta name="title" content={content?.title} />
            <meta name="description" content={content?.description} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en-EU" />
            <meta property="og:url" content="/" />
            <meta property="og:site_name" content={'© 2023 brunomd.com. Diritti riservati'} key="ogsitename" />
            <meta property="og:title" content={content?.title} key="ogtitle" />
            <meta property="og:description" content={content?.description} key="ogdesc" />
            {/* <meta property="og:image" content={'/utility/purpose.jpg'} key="ogimage" /> */}
            {/* <meta property="og:image:height" content="630px" /> */}
            <meta property="og:image" content="https://devregismaicon.github.io/logo.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            {/* <meta property="og:image:width" content="1200px" /> */}
            {/* <meta property="og:image:type" content="image/jpg" /> */}
            <meta name="next-head-count" content="17" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="theme-color" content="#000" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="Bruno MD Europe " />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Store" />
            <meta name="msapplication-TileColor" content="#000" />
        </Head>
    );
}

export default PageHead;