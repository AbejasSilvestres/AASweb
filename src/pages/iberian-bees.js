import { insideCircle } from 'geolocation-utils';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';

import { Container, Layout } from '../components';
import { IberianBees } from '../containers';
import { getAllIberianBeesSections } from '../lib/api/iberian-bees';
import { getJsonData } from '../lib/api/iberian-bees-data';
import markdownToHtml from '../lib/markdown-to-html';
import { cities } from '../utils/cities';

const filterBees = (data, species, cityGeoLocation) => {
  if (!species && !cityGeoLocation) {
    return [];
  }
  const radius = 100000;
  if (!species) {
    return data.filter(({ decimalLatitude, decimalLongitude }) =>
      cityGeoLocation
        ? insideCircle(
            { lat: Number(decimalLatitude), lon: Number(decimalLongitude) },
            { lat: cityGeoLocation[0], lon: cityGeoLocation[1] },
            radius
          )
        : true
    );
  }
  if (!cityGeoLocation) {
    return data.filter((item) => (species ? species === item.species : true));
  }

  return data
    .filter((item) => (species ? species === item.species : true))
    .filter(({ decimalLatitude, decimalLongitude }) =>
      cityGeoLocation
        ? insideCircle(
            { lat: Number(decimalLatitude), lon: Number(decimalLongitude) },
            { lat: cityGeoLocation[0], lon: cityGeoLocation[1] },
            radius
          )
        : true
    );
};

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

  const handleFilterChange = ({ selectedItem }) =>
    setSpeciesFilter(selectedItem);

  const handleCityChange = ({ selectedItem }) => setCityFilter(selectedItem);

  const selectedCity = cities.find((city) => city.name === cityFilter);
  const selectedSpecies = data.find((item) => item.species === speciesFilter);

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
            <div className="grid md:grid-cols-2 mb-14 gap-8">
              <div>
                <Autocomplete
                  selectedItem={selectedSpecies?.species || ''}
                  onSelectedItemChange={handleFilterChange}
                  label="Filtrar por especie"
                  placeholder="Comienza escribir aqui..."
                  items={species}
                />
              </div>
              <div>
                <Autocomplete
                  selectedItem={selectedCity?.name || ''}
                  onSelectedItemChange={handleCityChange}
                  label="Filtrar por ciudad"
                  placeholder="Comienza escribir aqui..."
                  items={cities
                    .map(({ name }) => name)
                    .sort((a, b) => a.localeCompare(b))}
                />
              </div>
            </div>
            <div className="leaflet-container">
              <Map
                center={selectedCity?.geo}
                data={filterBees(data, speciesFilter, selectedCity?.geo)}
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
