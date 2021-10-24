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
        {allMembers.map(({ name, photo, description }) => (
          <AboutMember
            key={name}
            name={name}
            photo={photo}
            description={description}
          />
        ))}
      </AboutMembers>
    </Layout>
  );
}

export async function getStaticProps() {
  const allMembers = getAllMembers(['name', 'link', 'photo', 'description']);
  return {
    props: { allMembers },
  };
}
