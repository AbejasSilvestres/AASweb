import Head from 'next/head';
import { useState } from 'react';
import {
  Layout,
  Container,
  Select,
  ClearButton,
  RadioGroup,
} from '../../components';
import { getAllBeesGuideSections } from '../../lib/api/bees-guide';
import { getJsonData, locations } from '../../lib/api/bees-guide-data';
import { BeesGuide } from '../../containers';
import markdownToHtml from '../../lib/markdown-to-html';
import { getBasePath } from '../../lib/utils';

const buttOptions = [
  { value: 'blanco', label: 'Blanco' },
  { value: 'rojo', label: 'Rojo' },
  { value: 'otros', label: 'Otros' },
];

const psithyrusOptions = [
  { value: true, label: 'Sí' },
  { value: false, label: 'No' },
];

export default function Guide({ intro, data }) {
  const [filters, setFilters] = useState({
    butt: '',
    location: '',
    psithyrus: '',
  });

  console.log({ data });

  const handleSettingFilter = (filterName) => (value) => {
    setFilters((filters) => ({
      ...filters,
      [filterName]: value,
    }));
  };

  const handleClearingFilter = (filterName) => () => {
    setFilters((filters) => ({
      ...filters,
      [filterName]: '',
    }));
  };

  const filteredData = data
    .filter(({ butt }) => !filters.butt || butt === filters.butt)
    .filter(
      ({ location }) => !filters.location || location.includes(filters.location)
    )
    .filter(
      ({ psithyrus }) => !filters.psithyrus || psithyrus === filters.psithyrus
    );

  return (
    <>
      <Head>
        <title>Guía</title>
      </Head>
      <Layout>
        <Container className="pt-24 pb-12">
          <BeesGuide.Intro content={intro} />
          <div className="flex gap-20">
            <div>
              <Select
                value={filters.location}
                id="location"
                label="Lugar"
                options={Object.keys(locations).map((location) => ({
                  value: locations[location],
                  label: locations[location],
                }))}
                onChange={handleSettingFilter('location')}
              />
            </div>
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
          <ul>
            {filteredData.map(
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
        </Container>
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
