import {
  TwoColumnSection,
  SectionTitle,
  SectionText,
  Button,
} from '../../components';
import { getBasePath } from '../../lib/utils';

export const Content = ({ title, body, image, button }) => (
  <TwoColumnSection
    className="min-h-screen"
    left={
      <div className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0 rounded-full overflow-hidden shadow-md">
        <img
          src={`${getBasePath()}${image.url}`}
          alt={image.label}
          className="h-full w-full object-cover"
        />
      </div>
    }
    right={
      <div className="text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl mb-8">{title}</h1>
        <p className="text-xl leading-relaxed mb-6">{body}</p>
        <Button target="_blank" href={button.url}>
          {button.label}
        </Button>
      </div>
    }
  />
);
