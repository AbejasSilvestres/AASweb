import Head from 'next/head';
import { useState, startTransition } from 'react';
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
      ({ psithyrus }) =>
        filters.psithyrus === '' || psithyrus === filters.psithyrus
    );

  return (
    <>
      <Head>
        <title>Guía</title>
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
                  options={Object.keys(locations).map((location) => ({
                    value: locations[location],
                    label: locations[location],
                  }))}
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
              {filteredData.map(({ species, image }) => (
                <li
                  key={species}
                  className="bg-neutral-0 p-8 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow"
                >
                  <span className="block text-xl italic font-semibold">
                    {species}
                  </span>
                  <img
                    src={`${getBasePath()}/bees-guide/${image}`}
                    alt={species}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </div>
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
