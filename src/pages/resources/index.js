import Head from 'next/head';
import { Container, Layout } from '../../components';
import { getAllResources } from '../../lib/api/resources';
import * as Resources from '../../containers/Resources';

export default function ResourcesPage({ allResources }) {
  const resourceByCategory = allResources.reduce(
    (acc, next) => ({
      ...acc,
      [next.category]: acc[next.category]
        ? [...acc[next.category], next]
        : [next],
    }),
    {}
  );
  return (
    <>
      <Head>
        <title>Recursos</title>
      </Head>
      <Layout>
        <Container className="pb-24">
          <Resources.Intro title="asdfasdf" body="asdfsadf" />
          {Object.keys(resourceByCategory).map((category) => (
            <Resources.Category key={category} name={category}>
              {resourceByCategory[category].map((resource) => (
                <Resources.Item
                  key={resource.title}
                  title={resource.title}
                  body={resource.description}
                  href={resource.url}
                />
              ))}
            </Resources.Category>
          ))}
        </Container>
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
