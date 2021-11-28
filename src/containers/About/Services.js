import { SectionTitle, SectionContainer } from '../../components';
import { Button } from '../../components';

export const Services = ({ title, services, button }) => (
  <SectionContainer className="bg-primary-50">
    <SectionTitle className="mb-16">{title}</SectionTitle>
    <div>
      <ul>
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
    <div>
      <Button href={button.url}>{button.label}</Button>
    </div>
  </SectionContainer>
);
