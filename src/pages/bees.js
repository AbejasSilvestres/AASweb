import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Container, Layout } from '../components';

const Bees = () => {
  const Map = dynamic(
    () => import('../containers/Bees/Map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
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
          <Map />
        </Container>
      </Layout>
    </>
  );
};

export default Bees;
