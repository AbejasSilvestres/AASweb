import { SectionContainer, SectionTitle } from '../../components';

export const Members = ({ children }) => (
  <SectionContainer>
    <div className="pb-16">
      <SectionTitle className="mb-16">Miembros</SectionTitle>
      <div className="grid gap-20">{children}</div>
    </div>
  </SectionContainer>
);
