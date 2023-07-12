import Head from 'next/head';

function PageHead({ content }) {
    // og image meta tag with Next.js is not working?
    return (
        <Head>
            <title>{content?.title}</title>
            <meta property="title" content={content?.title} />
            <meta property="description" content={content?.description} />
            <meta property="og:image" content="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/xGN4CvUH3Nz.png" />
        </Head>
    );
}

export default PageHead;
