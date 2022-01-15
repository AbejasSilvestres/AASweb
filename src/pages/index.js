import Head from 'next/head';
import { getAllHomeSections } from '../lib/api/home';
import markdownToHtml from '../lib/markdown-to-html';
import { Layout } from '../components';
import { Home } from '../containers';

export default function Index({ allHomeSections }) {
  const intro = allHomeSections[0];
  const member = allHomeSections[1];
  return (
    <>
      <Head>
        <title>Abejas silvestres</title>
      </Head>
      <Layout>
        <Home.Hero
          title={intro.title}
          content={intro.content}
          image={intro.image}
        />
        <Home.Member
          title={member.title}
          content={member.content}
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
    'content',
    'button',
  ]);
  const parsedHomeSections = await Promise.all(
    allHomeSections.map(({ content }) => markdownToHtml(content))
  );
  return {
    props: {
      allHomeSections: allHomeSections.map((section, index) => ({
        ...section,
        content: parsedHomeSections[index],
      })),
    },
  };
}
