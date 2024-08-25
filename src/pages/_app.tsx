import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import siteConfig from '../../site.config';
import { SiteFooter } from '../components/SiteFooter';
import '../styles/global/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${siteConfig.siteRoot}/icon.png`}
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          href={`${siteConfig.siteRoot}/icon.png`}
        />
        <meta property="og:image" content={`${siteConfig.siteRoot}/icon.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}