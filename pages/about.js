import Head from 'next/head';
import { getAllMembers } from '../lib/api/members';
import { Layout, AboutMembers, AboutIntro, AboutMember } from '../components';

export default function About({ allMembers }) {
  return (
    <Layout>
      <Head>
        <title>Quiénes somos</title>
      </Head>
      <AboutIntro />
      <AboutMembers>
        {allMembers.map(({ name, photo, description, url }) => (
          <AboutMember
            key={name}
            name={name}
            photo={photo}
            description={description}
            url={url}
          />
        ))}
      </AboutMembers>
    </Layout>
  );
}

export async function getStaticProps() {
  const allMembers = getAllMembers(['name', 'url', 'photo', 'description']);
  return {
    props: { allMembers },
  };
}
