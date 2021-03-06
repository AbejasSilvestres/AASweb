import Head from 'next/head';
import { useState } from 'react';

import {
  ClearButton,
  Container,
  Layout,
  RadioGroup,
  Select,
} from '../../components';
import { BeesGuide } from '../../containers';
import { getAllBeesGuideSections } from '../../lib/api/bees-guide';
import { getJsonData } from '../../lib/api/bees-guide-data';
import markdownToHtml from '../../lib/markdown-to-html';

const buttOptions = [
  { value: 'blanco', label: 'Blanco' },
  { value: 'rojo', label: 'Rojo' },
  { value: 'otros', label: 'Otros' },
];

const psithyrusOptions = [
  { value: true, label: 'Sí' },
  { value: false, label: 'No' },
];

const locationOptions = [
  {
    value: 'location_cordillera_betica_penibetica',
    label: 'Cordillera Bética Penibética',
  },
  { value: 'location_cordillera_cantabrica', label: 'Cordillera Cantábrica' },
  { value: 'location_costa_atlantica', label: 'Costa Atlántica' },
  { value: 'location_costa_cantabrica', label: 'Costa Cantábrica' },
  { value: 'location_costa_mediterranea', label: 'Costa Mediterránea' },
  {
    value: 'location_meseta_interior_peninsula',
    label: 'Meseta Interior Península',
  },
  { value: 'location_pirineos', label: 'Pirineos' },
];

const filterBees = (bees, filters) =>
  bees
    .filter(({ butt }) => !filters.butt || butt === filters.butt)
    .filter(
      ({ location }) => !filters.location || location.includes(filters.location)
    )
    .filter(
      ({ psithyrus }) =>
        filters.psithyrus === '' || psithyrus === filters.psithyrus
    );

export default function Guide({ intro, allBees }) {
  const [filteredBees, setFilteredBees] = useState(allBees);
  const [filters, setFilters] = useState({
    butt: '',
    location: '',
    psithyrus: '',
  });
  const [chosenBee, chooseBee] = useState(undefined);
  const [isModalOpen, toggleModal] = useState(false);

  const handleOpeningModal = (bee) => () => {
    toggleModal(true);
    chooseBee(bee);
  };
  const handleClosingModal = () => {
    toggleModal(false);
    chooseBee(undefined);
  };

  const handleSettingFilter = (filterName) => (value) => {
    const newFilters = {
      ...filters,
      [filterName]: value,
    };
    setFilters(newFilters);
    setFilteredBees(filterBees(allBees, newFilters));
  };

  const handleClearingFilter = (filterName) => () => {
    const newFilters = {
      ...filters,
      [filterName]: '',
    };
    setFilters(newFilters);
    setFilteredBees(filterBees(allBees, newFilters));
  };

  const isVisible = (species) =>
    filteredBees.find((filteredBee) => species === filteredBee.species);

  return (
    <>
      <Head>
        <title>Guía de abejas</title>
      </Head>
      <Layout>
        <Container className="pt-24 pb-12">
          <BeesGuide.Intro content={intro} />
        </Container>
        <div className="bg-primary-50">
          <Container className="pt-24 pb-24">
            <div className="flex flex-wrap gap-20 mb-20">
              <div>
                <Select
                  value={filters.location}
                  id="location"
                  label="Lugar"
                  options={locationOptions}
                  onChange={handleSettingFilter('location')}
                />
              </div>
              <div className="flex flex-wrap gap-20">
                <div>
                  <RadioGroup
                    label="Culo"
                    value={filters.butt}
                    onChange={handleSettingFilter('butt')}
                    options={buttOptions}
                  />
                  <ClearButton onClick={handleClearingFilter('butt')} />
                </div>
                <div>
                  <RadioGroup
                    label="Psithyrus"
                    value={filters.psithyrus}
                    onChange={handleSettingFilter('psithyrus')}
                    options={psithyrusOptions}
                  />
                  <ClearButton onClick={handleClearingFilter('psithyrus')} />
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allBees.map(({ species, image }) => (
                <BeesGuide.Bee
                  onClick={handleOpeningModal({ species, image })}
                  key={species}
                  image={image}
                  species={species}
                  isVisible={isVisible(species)}
                />
              ))}
            </ul>
            <BeesGuide.BeeModal
              isOpen={isModalOpen}
              onRequestClose={handleClosingModal}
              species={chosenBee?.species}
              image={chosenBee?.image}
            />
          </Container>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allBees = await getJsonData();
  const { content } = getAllBeesGuideSections(['content'])[0];
  const parsedBeesGuideIntro = await markdownToHtml(content);

  return {
    props: {
      allBees,
      intro: parsedBeesGuideIntro,
    },
  };
}
