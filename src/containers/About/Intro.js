import {
  Logo,
  SectionContainer,
  SectionText,
  SectionTitle,
} from '../../components';

export const Intro = ({ title, content }) => (
  <SectionContainer>
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="shrink-0 md:order-last">
        <Logo alt="Logo" className="w-60 block text-primary-700" />
      </div>
      <div className="grow">
        <div className="max-w-xl">
          <SectionTitle className="mb-8">{title}</SectionTitle>
          <SectionText>{content}</SectionText>
        </div>
      </div>
    </div>
  </SectionContainer>
);
