import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Container, Layout } from '../../components';
import { Blog } from '../../containers';
import { getPostBySlug, getAllPosts } from '../../lib/api/posts';
import markdownToHtml from '../../lib/markdown-to-html';

export default function PostPage({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <Layout>
        <Container>
          <Blog.Post>
            <Blog.Header
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <Blog.Body content={post.content} />
          </Blog.Post>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
