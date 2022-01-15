import Head from 'next/head';

import { Layout } from '../../components';
import { Project } from '../../containers';
import { getAllProjects } from '../../lib/api/projects';

export default function ProjectsPage({ allProjects }) {
  return (
    <>
      <Head>
        <title>Proyectos</title>
      </Head>
      <Layout>
        {allProjects.map((project, index) => (
          <Project.Preview
            type={index % 2 === 0 ? undefined : 'primary'}
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            slug={project.slug}
            excerpt={project.excerpt}
          />
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'excerpt',
    'slug',
    'coverImage',
  ]);

  return {
    props: { allProjects },
  };
}
