import Head from 'next/head';
import { getAllMembers } from '../lib/api/members';
import { getAllAboutSections } from '../lib/api/about';
import { getAllTimelineItems } from '../lib/api/timeline';
import { getAllServicesSections } from '../lib/api/services';
import markdownToHtml from '../lib/markdown-to-html';
import { Layout } from '../components';
import { About } from '../containers';

export default function AboutPage({
  intro,
  services,
  allMembers,
  allTimelineItems,
}) {
  return (
    <>
      <Head>
        <title>Quiénes somos</title>
      </Head>
      <Layout>
        <About.Intro title={intro.title} body={intro.body} />
        <About.Services
          title={services.title}
          services={services.items}
          button={services.button}
        />
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
        <About.History>
          {allTimelineItems.map(({ label, content }, index) => (
            <About.HistoryItem
              key={label}
              label={label}
              content={content}
              last={allTimelineItems.length - 1 === index}
            />
          ))}
        </About.History>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const intro = getAllAboutSections(['title', 'body'])[0];

  const services = getAllServicesSections(['title', 'items', 'button'])[0];

  const allMembers = getAllMembers(['name', 'url', 'photo', 'content']);
  const parsedMembersContent = await Promise.all(
    allMembers.map(({ content }) => markdownToHtml(content || ''))
  );

  const allTimelineItems = getAllTimelineItems(['label', 'content']);
  const parsedTimelineItems = await Promise.all(
    allTimelineItems.map(({ content }) => markdownToHtml(content || ''))
  );

  return {
    props: {
      allMembers: allMembers.map((member, index) => ({
        ...member,
        content: parsedMembersContent[index],
      })),
      allTimelineItems: allTimelineItems.map((item, index) => ({
        ...item,
        content: parsedTimelineItems[index],
      })),
      intro,
      services,
    },
  };
}
