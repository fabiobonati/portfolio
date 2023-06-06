import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content='Fabio Bonati' />
        <meta name='publisher' content='Fabio Bonati' />
        <meta
          name='description'
          content='Fabio Bonati, 19 y/o software developer and student'
        />
        <meta
          name='keywords'
          content='Fabio Bonati, bonati, fabio, bonati, software developer, fabio bonati software developer'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@bonatifabioo' />
        <meta name='twitter:creator' content='@bonatifabioo' />
        <meta name='twitter:title' content='Fabio Bonati' />
        <meta name='twitter:description' content='code ✧ @joinnite' />
        <meta name='twitter:image' content='/memoji.svg' />
        <meta property='og:title' content='Fabio Bonati' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fabiobonati.com' />
        <meta property='og:image' content='/memoji.svg' />
        <meta
          property='og:description'
          content='Fabio Bonati, 19 y/o software developer and student'
        />
        <meta property='og:site_name' content='Fabio Bonati' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:locale:alternate' content='it_IT' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:locale:alternate' content='en_GB' />
        <meta property='og:locale:alternate' content='en_CA' />
        <meta property='og:locale:alternate' content='en_AU' />
        <meta property='og:locale:alternate' content='en_NZ' />
        <meta property='og:locale:alternate' content='en_IE' />
        <meta property='og:locale:alternate' content='en_ZA' />
        <meta property='og:locale:alternate' content='en_JM' />
        <meta property='og:locale:alternate' content='en' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
