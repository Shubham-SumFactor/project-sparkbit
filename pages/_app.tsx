import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <title>Sumfactor</title>
        <meta name="description" content="Sumfactor created with Next.js" />
        <link rel="icon" href="/faviconSumfactor.ico" />
      </Head>
      {/* <div className="vertical-lines">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div> */}
      <Component {...pageProps} />
    </>
  );
}
