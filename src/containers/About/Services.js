import { SectionTitle, SectionContainer, Button, Icon } from '../../components';

export const Services = ({ title, services, button }) => (
  <SectionContainer className="bg-primary-50">
    <SectionTitle className="mb-10">{title}</SectionTitle>
    <div className="mb-10">
      <ul>
        {services.map((service) => (
          <li className="text-lg leading-relaxed mb-3 flex" key={service}>
            <span className="inline-block text-2xl text-primary-500 pr-3 pt-0.5">
              <Icon.CheckCircle />
            </span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <Button target="_blank" href={button.url}>
        {button.label}
      </Button>
    </div>
  </SectionContainer>
);
