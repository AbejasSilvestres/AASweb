import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Container, Layout } from '../components';
import { getJsonData } from '../lib/api/bees';

export default function Bees({ data }) {
  const Map = dynamic(() => import('../containers/Bees/Map'), { ssr: false });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet/dist/leaflet.css"
        />

        <link
          rel="stylesheet"
          href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
        />
        <title>Abjeas silvestres</title>
      </Head>
      <Layout>
        <Container>
          <Map data={data} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getJsonData();
  return {
    props: { data },
  };
}
