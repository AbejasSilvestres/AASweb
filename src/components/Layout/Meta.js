import Head from 'next/head';

import { getBasePath } from '../../lib/utils';

export const Meta = () => (
  <Head>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${getBasePath()}/favicon/apple-touch-icon.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${getBasePath()}/favicon/favicon-32x32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${getBasePath()}/favicon/favicon-16x16.png`}
    />
    <link rel="manifest" href={`${getBasePath()}/favicon/site.webmanifest`} />
    <link
      rel="mask-icon"
      href={`${getBasePath()}/favicon/safari-pinned-tab.svg`}
      color="#000000"
    />

    <meta name="msapplication-TileColor" content="#000000" />
    <meta
      name="msapplication-config"
      content={`${getBasePath()}favicon/browserconfig.xml`}
    />
    <meta name="theme-color" content="#000" />
    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    <meta name="description" content="Asociación Abejas Silvestres" />
  </Head>
);
