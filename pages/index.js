import Head from 'next/head';
import { Container, Layout } from '../components';
import { Home } from '../containers';

const Index = () => (
  <>
    <Head>
      <title>Abejas silvestres</title>
    </Head>
    <Layout>
      <Home.Content />
    </Layout>
  </>
);

export default Index;
