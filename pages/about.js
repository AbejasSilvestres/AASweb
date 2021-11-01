import Head from 'next/head';
import { getAllMembers } from '../lib/api/members';
import markdownToHtml from '../lib/markdownToHtml';
import { Layout } from '../components';
import { About } from '../containers';

export default function AboutPage({ allMembers }) {
  return (
    <>
      <Head>
        <title>Quiénes somos</title>
      </Head>
      <Layout>
        <About.Intro />
        <About.Members>
          {allMembers.map(({ name, photo, content, url }) => (
            <About.Member
              key={name}
              name={name}
              photo={photo}
              content={content}
              url={url}
            />
          ))}
        </About.Members>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allMembers = getAllMembers(['name', 'url', 'photo', 'content']);
  const parsedMembersContent = await Promise.all(
    allMembers.map(({ content }) => markdownToHtml(content || ''))
  );
  return {
    props: {
      allMembers: allMembers.map((member, index) => ({
        ...member,
        content: parsedMembersContent[index],
      })),
    },
  };
}
