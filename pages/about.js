import Head from 'next/head';
import { Layout, AboutMembers, AboutIntro, AboutMember } from '../components';

const About = () => (
  <Layout>
    <Head>
      <title>Quiénes somos</title>
    </Head>
    <AboutIntro />
    <AboutMembers>
      <AboutMember
        name="Jan Dzban"
        photo="/assets/Logo.png"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <AboutMember
        name="Jan Dzban"
        photo="/assets/Logo.png"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <AboutMember
        name="Jan Dzban"
        photo="/assets/Logo.png"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </AboutMembers>
  </Layout>
);

export default About;
