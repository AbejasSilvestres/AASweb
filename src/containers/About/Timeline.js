import { SectionContainer, SectionTitle } from '../../components';

export const Timeline = ({ children }) => (
  <SectionContainer className="bg-primary-50">
    <SectionTitle className="mb-16">Nuestra historia</SectionTitle>
    <div className="relative">{children}</div>
  </SectionContainer>
);
