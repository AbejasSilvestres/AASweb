import Head from 'next/head';
import { getAllMembers } from '../lib/api/members';
import { getAllAboutSections } from '../lib/api/about';
import markdownToHtml from '../lib/markdown-to-html';
import { Layout } from '../components';
import { About } from '../containers';

export default function AboutPage({ allMembers, intro }) {
  return (
    <>
      <Head>
        <title>Quiénes somos</title>
      </Head>
      <Layout>
        <About.Intro title={intro.title} body={intro.body} />
        <About.History>
          <About.HistoryItem label="2019" />
          <About.HistoryItem label="2020" />
          <About.HistoryItem last label="2021" />
        </About.History>
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
  const intro = getAllAboutSections(['title', 'body'])[0];
  return {
    props: {
      allMembers: allMembers.map((member, index) => ({
        ...member,
        content: parsedMembersContent[index],
      })),
      intro,
    },
  };
}
