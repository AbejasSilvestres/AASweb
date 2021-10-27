import Head from 'next/head';
import { getAllPosts } from '../../lib/api/posts';
import { Container, Layout } from '../../components';
import { Post } from '../../containers';

export default function IndexPage({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Container>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {allPosts.map((post) => (
              <Post.Preview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
