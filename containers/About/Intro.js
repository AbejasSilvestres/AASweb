import {
  SectionTitle,
  SectionText,
  TwoColumnSection,
  Logo,
} from '../../components';

export const Intro = ({ title, body }) => (
  <TwoColumnSection
    left={
      <Logo alt="Logo" size="medium" className="w-72 block text-primary-700" />
    }
    right={
      <div>
        <SectionTitle className="mb-4">{title}</SectionTitle>
        <SectionText>{body}</SectionText>
      </div>
    }
  />
);
