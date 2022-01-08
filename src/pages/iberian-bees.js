import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Container, Layout } from '../components';
import { IberianBees } from '../containers';
import { getJsonData } from '../lib/api/iberian-bees-data';
import { getAllIberianBeesSections } from '../lib/api/iberian-bees';
import markdownToHtml from '../lib/markdown-to-html';

const getSpecies = (data) => [...new Set(data.map((item) => item.species))];

const filterBySpecies = (data, species) =>
  species ? data.filter((item) => species === item.species) : data;

const Map = dynamic(() => import('../containers/IberianBees/Map'), {
  ssr: false,
});

const Autocomplete = dynamic(
  () => import('../containers/IberianBees/Autocomplete'),
  {
    ssr: false,
  }
);

export default function Bees({ data, intro }) {
  const [speciesFilter, setSpeciesFilter] = useState('');

  const handleFilterChange = ({ selectedItem }) => {
    setSpeciesFilter(selectedItem);
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
              <Autocomplete
                onSelectedItemChange={handleFilterChange}
                label="Selecciona especie"
                items={getSpecies(data)}
                selectedItem={speciesFilter}
              />
            </div>
            <div className="leaflet-container">
              <Map data={filterBySpecies(data, speciesFilter)} />
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
    props: {
      data: data.sort((a, b) => a.species.localeCompare(b.species)),
      intro: parsedIberianBees,
    },
  };
}
