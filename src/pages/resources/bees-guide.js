import Head from 'next/head';
import { useState } from 'react';
import { Layout, Container, Select, ClearButton } from '../../components';
import { getAllBeesGuideSections } from '../../lib/api/bees-guide';
import { getJsonData, locations } from '../../lib/api/bees-guide-data';
import { BeesGuide } from '../../containers';
import markdownToHtml from '../../lib/markdown-to-html';
import { getBasePath } from '../../lib/utils';

export default function Guide({ intro, data }) {
  const [filters, setFilters] = useState({
    butt: '',
    location: '',
    psithyrus: '',
  });

  const handleSettingFilter =
    (filterName) =>
    ({ target }) => {
      setFilters((filters) => ({
        ...filters,
        [filterName]: target.value,
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
          <ClearButton onClick={handleClearingFilter('location')} />
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
