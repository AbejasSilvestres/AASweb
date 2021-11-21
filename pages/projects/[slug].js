import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Container, Layout } from '../../components';
import { Project } from '../../containers';
import markdownToHtml from '../../lib/markdown-to-html';
import { getProjectBySlug, getAllProjects } from '../../lib/api/projects';

export default function ProjectPage({ project }) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{project.title}</title>
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
  const content = await markdownToHtml(project.content || '');

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
