import { SectionTitle, SectionContainer } from '../../components';

export const History = ({ children }) => (
  <SectionContainer>
    <SectionTitle className="mb-16">Nuestra historia</SectionTitle>
    <div className="relative">{children}</div>
  </SectionContainer>
);
