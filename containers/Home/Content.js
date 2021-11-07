import {
  TwoColumnSection,
  SectionTitle,
  SectionText,
  Button,
} from '../../components';
import { getBasePath } from '../../lib/utils';

export const Content = () => (
  <TwoColumnSection
    className="min-h-screen"
    left={
      <div className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0 rounded-full overflow-hidden shadow-md">
        <img
          src={`${getBasePath()}/assets/hero.jpg`}
          alt="Scaeva pyrastri"
          className="h-full w-full object-cover"
        />
      </div>
    }
    right={
      <div className="text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl mb-8">Abejas Silvestres</h1>
        <p className="text-xl leading-relaxed mb-6">
          Somos una asociación sin ánimo de lucro para conservar y proteger las
          más de 1000 especies de abejas silvestres de la Peninsula Ibérica.
        </p>
        <Button target="_blank" href="https://www.teaming.net/abejassilvestres">
          Únete ahora
        </Button>
      </div>
    }
  />
);
