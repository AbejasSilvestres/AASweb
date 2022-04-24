import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';

import { Container, Layout } from '../components';
import { IberianBees } from '../containers';
import { getAllIberianBeesSections } from '../lib/api/iberian-bees';
import { getJsonData } from '../lib/api/iberian-bees-data';
import markdownToHtml from '../lib/markdown-to-html';
import { filter } from '../lib/utils';
import { cities } from '../utils/cities';

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
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  const handleFilterChange = ({ selectedItem }) => {
    setSpeciesFilter(selectedItem);
  };

  const handleCityChange = ({ selectedItem }) => {
    setCityFilter(selectedItem);
  };

  const city = cities.find((city) => city.name === cityFilter);

  return (
    <>
      <Head>
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
            <div className="max-w-sm mb-14">
              <Autocomplete
                onSelectedItemChange={handleCityChange}
                label="Filtrar por ciudad"
                placeholder="Comienza escribir aqui..."
                items={cities
                  .map(({ name }) => name)
                  .sort((a, b) => a.localeCompare(b))}
              />
            </div>
            <div className="leaflet-container">
              <Map
                center={city?.geo}
                data={filterBySpecies(speciesFilter ? data : [], speciesFilter)}
              />
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
