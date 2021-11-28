import { SectionTitle, SectionContainer } from '../../components';

export const History = ({ children }) => (
  <SectionContainer className="bg-primary-50">
    <SectionTitle className="mb-16">Nuestra historia</SectionTitle>
    <div className="relative">{children}</div>
  </SectionContainer>
);
