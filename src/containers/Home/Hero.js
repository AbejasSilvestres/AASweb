import { RoundImage, SectionContainer } from '../../components';
import homeSectionStyles from './home-section.module.css';

export const Hero = ({ title, content, image }) => (
  <SectionContainer>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
      <div className="col-span-1 flex justify-center lg:justify-start items-center lg:order-last">
        <RoundImage
          src={image.url}
          alt={image.label}
          className="w-60 h-60 sm:w-80 sm:h-80"
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <div className="text-left lg:text-right">
          <h1 className="text-5xl mb-8">{title}</h1>
          <div className="mb-6">
            <div
              className={homeSectionStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
);
