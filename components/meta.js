import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';
import HeadLink from './head-link';

export default function Meta() {
  return (
    <Head>
      <HeadLink
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <HeadLink
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <HeadLink
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <HeadLink rel="manifest" href="/favicon/site.webmanifest" />
      <HeadLink
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <HeadLink rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <HeadLink rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
