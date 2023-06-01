import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  <Head>
    <title>Fabio Bonati</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta
      name='description'
      content='Fabio Bonati, 19 y/o developer and student'
    />
    <meta name='author' content='Fabio Bonati' />
  </Head>;
  return <Component {...pageProps} />;
}
