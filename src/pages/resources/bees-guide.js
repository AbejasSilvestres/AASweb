import Head from 'next/head';
import { Layout, Container } from '../../components';
import { getAllBeesGuideSections } from '../../lib/api/bees-guide';
import { BeesGuide } from '../../containers';
import markdownToHtml from '../../lib/markdown-to-html';

export default function Guide({ intro }) {
  return (
    <>
      <Head>
        <title>Guía</title>
      </Head>
      <Layout>
        <Container className="pt-24 pb-12">
          <BeesGuide.Intro content={intro} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { content } = getAllBeesGuideSections(['content'])[0];
  const parsedBeesGuideIntro = await markdownToHtml(content || '');

  return {
    props: {
      intro: parsedBeesGuideIntro,
    },
  };
}
