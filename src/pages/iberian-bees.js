import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Container, Layout } from '../components';
import { IberianBees } from '../containers';
import { getJsonData } from '../lib/api/iberian-bees-data';
import { getAllIberianBeesSections } from '../lib/api/iberian-bees';
import markdownToHtml from '../lib/markdown-to-html';

const getFamilies = (data) => [...new Set(data.map((item) => item.family))];

const filterByFamily = (data, family) =>
  family ? data.filter((item) => family === item.family) : data;

export default function Bees({ data, intro }) {
  const Map = dynamic(() => import('../containers/IberianBees/Map'), {
    ssr: false,
  });
  const [familyFilter, setFamilyFilter] = useState('');

  const handleFilterChange = ({ target }) => {
    setFamilyFilter(target.value);
  };

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
        <Container className="py-24">
          <IberianBees.Intro content={intro} />
        </Container>
        <div className="bg-primary-50">
          <Container className="pt-24 pb-36">
            <div className="max-w-sm mb-14">
              <label
                className="font-semibold text-2xl block text-neutral-800 mb-2"
                htmlFor="family-filter"
              >
                Selecciona familia
              </label>
              <select
                id="family-filter"
                className="text-2xl appearance-none outline-none p-2 border-primary-400 border-solid border-2 rounded-md w-full focus:ring-4 focus:ring-primary-100 transition-shadow"
                onChange={handleFilterChange}
                value={familyFilter}
              >
                <option value="">Todas familias</option>
                {getFamilies(data).map((family) => (
                  <option key={family} value={family}>
                    {family}
                  </option>
                ))}
              </select>
            </div>
            <div className="leaflet-container">
              <Map data={filterByFamily(data, familyFilter)} />
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getJsonData();
  const { content } = getAllIberianBeesSections(['content'])[0];
  const parsedIberianBees = await markdownToHtml(content || '');
  return {
    props: { data, intro: parsedIberianBees },
  };
}
