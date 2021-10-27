import Head from 'next/head';
import { getAllMembers } from '../lib/api/members';
import { Layout } from '../components';
import { About } from '../containers';

export default function AboutPage({ allMembers }) {
  return (
    <Layout>
      <Head>
        <title>Quiénes somos</title>
      </Head>
      <About.Intro />
      <About.Members>
        {allMembers.map(({ name, photo, description, url }) => (
          <About.Member
            key={name}
            name={name}
            photo={photo}
            description={description}
            url={url}
          />
        ))}
      </About.Members>
    </Layout>
  );
}

export async function getStaticProps() {
  const allMembers = getAllMembers(['name', 'url', 'photo', 'description']);
  return {
    props: { allMembers },
  };
}
