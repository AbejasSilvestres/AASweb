import Head from 'next/head';
import { getAllHomeSections } from '../lib/api/home';
import { Layout } from '../components';
import { Home } from '../containers';

export default function Index({ allHomeSections }) {
  const { title, body, image, button } = allHomeSections[0];
  return (
    <>
      <Head>
        <title>Abejas silvestres</title>
      </Head>
      <Layout>
        <Home.Content title={title} body={body} image={image} button={button} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allHomeSections = getAllHomeSections([
    'image',
    'title',
    'body',
    'button',
  ]);

  return {
    props: {
      allHomeSections,
    },
  };
}
