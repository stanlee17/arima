import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head
        name="description"
        description="Experience the ultimate anime hub on Arima's Home Page. Discover a vast collection of captivating anime series, stay updated on the latest releases, and immerse yourself in a world of thrilling adventures. Find your next obsession and unleash your anime passion on Arima"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
