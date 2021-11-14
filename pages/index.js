import Head from 'next/head';
import { getAllHomeSections } from '../lib/api/home';
import { Layout } from '../components';
import { Home } from '../containers';

export default function Index({ allHomeSections }) {
  const { title, body, image, button } = allHomeSections[0];
  const member = allHomeSections[1];
  return (
    <>
      <Head>
        <title>Abejas silvestres</title>
      </Head>
      <Layout>
        <Home.Hero title={title} body={body} image={image} button={button} />
        <Home.Member
          title={member.title}
          body={member.body}
          image={member.image}
          button={member.button}
        />
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
