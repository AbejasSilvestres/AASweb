import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, Layout } from '../../components';
import { Project } from '../../containers';
import { getAllProjects, getProjectBySlug } from '../../lib/api/projects';
import markdownToHtml from '../../lib/markdown-to-html';

export default function ProjectPage({ project }) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta property="og:image" content={project.coverImage} />
      </Head>
      <Layout>
        <Container>
          <Project.Header
            title={project.title}
            coverImage={project.coverImage}
          />
          <Project.Body content={project.content} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'slug',
    'title',
    'content',
    'coverImage',
  ]);
  const content = await markdownToHtml(project.content);

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug']);
  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}
