import { Fragment, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import Layout from '@/components/layout';
import * as ga from '@/lib/google-analytics';
import { useRouter } from 'next/router';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import PaginationProvider from '@/contexts/PaginationContext';

interface RouteChangeProps {
  url: string;
}

function App({ Component, pageProps }: AppProps) {
  // C. SETUP OF GA PAGE VIEWS
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: RouteChangeProps) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      {/* GA TAGS */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Head>
        <meta
          name="description"
          content="Experience the ultimate anime hub on Arima. Discover a vast collection of captivating anime series, stay updated on the latest releases, newly top-rated and upcoming Anime on Arima."
          key="desc"
        />
      </Head>
      <SSRProvider>
        <PaginationProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PaginationProvider>
      </SSRProvider>
    </Fragment>
  );
}

export default App;
