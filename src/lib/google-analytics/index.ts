// C. SETUP OF GA PAGE VIEWS
type pageViewProps = {
  url: string;
};

export const pageview = (url: pageViewProps) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    path_url: url,
  });
};
