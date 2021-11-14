import {
  TwoColumnSection,
  SectionTitle,
  SectionText,
  Button,
  SectionContainer,
} from '../../components';
import { getBasePath } from '../../lib/utils';

export const Hero = ({ title, body, image, button }) => (
  <SectionContainer>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
      <div className="col-span-1 flex justify-center lg:justify-start items-center lg:order-last">
        <div className="w-60 h-60 sm:w-80 sm:h-80 flex-shrink-0 rounded-full overflow-hidden shadow-md">
          <img
            src={`${getBasePath()}${image.url}`}
            alt={image.label}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <div className="text-left lg:text-right">
          <h1 className="text-5xl mb-8">{title}</h1>
          <p className="text-lg leading-relaxed mb-6">{body}</p>
        </div>
      </div>
    </div>
  </SectionContainer>
);
