import Head from 'next/head';

function PageHead({content}) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>{content?.title}</title>
            <meta name="description" content={content?.description} />
            <meta property="og:url" content={content?.url} key="ogurl" />
            <meta property="og:image" content={content?.image} key="ogimage" />
            <meta property="og:site_name" content={content?.siteName} key="ogsitename" />
            <meta property="og:title" content={content?.title} key="ogtitle" />
            <meta property="og:description" content={content?.description} key="ogdesc" />
        </Head>
    );
}

export default PageHead;