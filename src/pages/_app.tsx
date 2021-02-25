import React from 'react';
import Head from 'next/head';
import { Menu } from '../components/menu/Menu';

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next Page Props</title>
            </Head>
            <Menu activeItem={pageProps.active} />
            <h1>{pageProps.title}</h1>
            <p>
                Title above is taken from pageProps in _app. The prop is
                returned from getServerSideProps of the page.
            </p>
            <p>
                props received from getServerSideProps and passed to Menu
                component in _app from pageProps:{' '}
                {JSON.stringify({ active: pageProps.active }, null, 2)}
            </p>
            <Component {...pageProps} />
        </>
    );
}

export default App;
