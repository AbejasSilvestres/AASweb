import {
  TwoColumnSection,
  SectionTitle,
  SectionText,
  Button,
  SectionContainer,
} from '../../components';
import { getBasePath } from '../../lib/utils';
import homeSectionStyles from './home-section.module.css';

export const Member = ({ title, content, image, button }) => (
  <SectionContainer className="bg-primary-50">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
      <div className="col-span-1 flex justify-center lg:justify-end items-center">
        <div className="w-60 h-60 sm:w-80 sm:h-80 flex-shrink-0 rounded-full overflow-hidden shadow-md">
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
          <div className="mb-6">
            <div
              className={homeSectionStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <Button target="_blank" href={button.url}>
            {button.label}
          </Button>
        </div>
      </div>
    </div>
  </SectionContainer>
);
