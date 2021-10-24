import { SectionContainer, SectionTitle } from '../Section';

export const AboutMembers = ({ children }) => (
  <SectionContainer className="bg-primary-50">
    <div className="pb-16">
      <SectionTitle className="mb-16">Miembros</SectionTitle>
      <div className="grid gap-12">{children}</div>
    </div>
  </SectionContainer>
);
