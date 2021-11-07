import {
  SectionTitle,
  SectionText,
  TwoColumnSection,
  Logo,
} from '../../components';

export const Intro = () => (
  <TwoColumnSection
    left={
      <Logo alt="Logo" size="medium" className="w-72 block text-primary-700" />
    }
    right={
      <div>
        <SectionTitle className="mb-4">
          Asociación Abejas Silvestres
        </SectionTitle>
        <SectionText>
          Somos una asociación sin ánimo de lucro para conservar y proteger las
          más de 1000 especies de abejas silvestres de la Peninsula Ibérica.
        </SectionText>
      </div>
    }
  />
);
