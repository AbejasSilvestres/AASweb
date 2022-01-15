import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet/dist/leaflet.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
