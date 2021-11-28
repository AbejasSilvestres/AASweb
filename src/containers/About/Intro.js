import {
  SectionTitle,
  SectionText,
  Logo,
  SectionContainer,
} from '../../components';

export const Intro = ({ title, body }) => (
  <SectionContainer>
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="flex-shrink-0 md:order-last">
        <Logo alt="Logo" className="w-60 block text-primary-700" />
      </div>
      <div className="flex-grow">
        <div className="max-w-xl">
          <SectionTitle className="mb-8">{title}</SectionTitle>
          <SectionText>{body}</SectionText>
        </div>
      </div>
    </div>
  </SectionContainer>
);
