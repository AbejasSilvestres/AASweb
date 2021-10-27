import { SectionTitle, SectionText, TwoColumnSection } from '../../components';
import { getBasePath } from '../../lib/utils';

export const Intro = () => (
  <TwoColumnSection
    left={
      <img
        src={`${getBasePath()}/assets/Logo.png`}
        alt="Logo"
        className="w-80 block"
      />
    }
    right={
      <div>
        <SectionTitle className="mb-4">Abejas Silvestres</SectionTitle>
        <SectionText>
          Somos una asociación sin ánimo de lucro para conservar y proteger las
          más de 1000 especies de abejas silvestres de la Peninsula Ibérica.
        </SectionText>
      </div>
    }
  />
);
