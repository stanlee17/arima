import { Fragment } from 'react';
import Script from 'next/script';
import Layout from '@/components/layout';
import * as ga from '@/lib/google-analytics';
import { useRouter } from 'next/router';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  // C. SETUP OF GA PAGE VIEWS
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
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
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </Fragment>
  );
}

export default App;
