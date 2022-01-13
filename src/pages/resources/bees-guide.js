import Head from 'next/head';
import { Layout, Container } from '../../components';
import { getAllBeesGuideSections } from '../../lib/api/bees-guide';
import { getJsonData } from '../../lib/api/bees-guide-data';
import { BeesGuide } from '../../containers';
import markdownToHtml from '../../lib/markdown-to-html';
import { getBasePath } from '../../lib/utils';

export default function Guide({ intro, data }) {
  return (
    <>
      <Head>
        <title>Guía</title>
      </Head>
      <Layout>
        <Container className="pt-24 pb-12">
          <BeesGuide.Intro content={intro} />
        </Container>
        <ul>
          {data.map(
            ({ species, image, butt, psithyrus, description, location }) => (
              <li key={species} className="mb-8">
                <span className="block text-lg italic font-semibold">
                  {species}
                </span>
                <img
                  src={`${getBasePath()}/bees-guide/${image}`}
                  alt={species}
                />
                <span className="block">
                  {JSON.stringify({
                    butt,
                    psithyrus,
                    description,
                    location,
                  })}
                </span>
              </li>
            )
          )}
        </ul>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getJsonData();
  const { content } = getAllBeesGuideSections(['content'])[0];
  const parsedBeesGuideIntro = await markdownToHtml(content || '');

  return {
    props: {
      data,
      intro: parsedBeesGuideIntro,
    },
  };
}
