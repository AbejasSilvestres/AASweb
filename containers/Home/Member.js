import {
  TwoColumnSection,
  SectionTitle,
  SectionText,
  Button,
  SectionContainer,
} from '../../components';
import { getBasePath } from '../../lib/utils';

export const Member = ({ title, body, image, button }) => (
  <SectionContainer className="bg-primary-50">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
      <div className="col-span-1 flex justify-center lg:justify-end items-center">
        <div className="w-80 h-80 flex-shrink-0 rounded-full overflow-hidden shadow-md">
          <img
            src={`${getBasePath()}${image.url}`}
            alt={image.label}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="col-span-1 flex lg:justify-start items-center">
        <div>
          <h1 className="text-5xl mb-8">{title}</h1>
          <ul className="list-disc pl-5 mb-6">
            <li className="text-lg">financiarámos proyectos de conservación</li>
            <li className="text-lg">generarámos recursos y guías</li>
            <li className="text-lg">recibirás actualizaciones</li>
            <li className="text-lg">
              recibirás la Guía Visual de Abejorros Ibéricos
            </li>
          </ul>
          <Button target="_blank" href={button.url}>
            {button.label}
          </Button>
        </div>
      </div>
    </div>
  </SectionContainer>
);
