import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Container, Layout } from '../../components';
import { Post } from '../../containers';
import { getPostBySlug, getAllPosts } from '../../lib/api/posts';
import markdownToHtml from '../../lib/markdownToHtml';

export default function PostPage({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <Post.Title>Loading…</Post.Title>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Next.js Blog Example</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <Post.Header
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <Post.Body content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
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
