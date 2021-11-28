import Head from 'next/head';
import { Container, Layout } from '../components';
import { getAllResources } from '../lib/api/resources';

export default function Resources({ allResources }) {
  console.log({ allResources });
  return (
    <>
      <Head>
        <title>Recursos</title>
      </Head>
      <Layout>
        <Container>recursos</Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allResources = getAllResources([
    'category',
    'title',
    'description',
    'url',
  ]);

  return {
    props: { allResources },
  };
}
