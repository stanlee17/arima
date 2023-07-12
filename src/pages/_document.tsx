import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head
        name="description"
        content="Experience the ultimate anime info on Arima. Discover a vast collection of captivating anime series, stay updated on the latest releases, newly top-rated and upcoming Anime on Arima."
        key="desc"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
