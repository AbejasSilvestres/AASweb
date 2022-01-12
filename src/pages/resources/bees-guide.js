import Head from 'next/head';
import { Layout } from '../../components';
import { getAllBeesGuide } from '../../lib/api/bees-guide';
import { getBasePath } from '../../lib/utils';

export default function BeeGuide({ data }) {
  return (
    <>
      <Head>
        <title>Guía</title>
      </Head>
      <Layout>
        <ul>
          {data.map(
            ({ species, butt, location, psithyrus, image, description }) => (
              <li key={species}>
                <span className="block mb-1">{species}</span>
                <span className="block mb-1">{butt}</span>
                <span className="block mb-1">{location}</span>
                <span className="block mb-1">{psithyrus}</span>
                <span className="block mb-1">{description}</span>
                <img src={`${getBasePath()}${image}`} alt={species} />
              </li>
            )
          )}
        </ul>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = getAllBeesGuide([
    'species',
    'butt',
    'location',
    'psithyrus',
    'image',
    'description',
  ]);
  return {
    props: {
      data,
    },
  };
}
