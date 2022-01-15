import { useState, useTransition } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Container, Layout } from '../components';
import { IberianBees } from '../containers';
import { getJsonData } from '../lib/api/iberian-bees-data';
import { getAllIberianBeesSections } from '../lib/api/iberian-bees';
import markdownToHtml from '../lib/markdown-to-html';
import { filter } from '../lib/utils';

const filterBySpecies = (data, species) =>
  species ? filter((item) => species === item.species, data) : data;

const Map = dynamic(() => import('../containers/IberianBees/Map'), {
  ssr: false,
});

const Autocomplete = dynamic(
  () => import('../components/Autocomplete/Autocomplete'),
  {
    ssr: false,
  }
);

export default function Bees({ data, intro, species }) {
  const [, startTransition] = useTransition();
  const [speciesFilter, setSpeciesFilter] = useState('');

  const handleFilterChange = ({ selectedItem }) => {
    startTransition(() => {
      setSpeciesFilter(selectedItem);
    });
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
        <Container className="pt-24 pb-12">
          <IberianBees.Intro content={intro} />
        </Container>
        <div className="bg-primary-50">
          <Container className="pt-12 pb-36">
            <div className="max-w-sm mb-14">
              <Autocomplete
                onSelectedItemChange={handleFilterChange}
                label="Filtrar por especie"
                placeholder="Comienza escribir aqui..."
                items={species}
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
  const parsedIberianBees = await markdownToHtml(content);

  return {
    props: {
      data,
      species: [...new Set(data.map((item) => item.species))],
      intro: parsedIberianBees,
    },
  };
}
