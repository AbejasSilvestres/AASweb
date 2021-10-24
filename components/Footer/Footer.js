import { Container } from '../Container/Container';
import { ExternalFooterLink } from './ExternalFooterLink';
import { FooterHeading } from './FooterHeading';
import { FooterText } from './FooterText';

export const Footer = () => (
  <footer className="bg-primary-800 py-16">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 mb-20">
        <div className="col-span-1 mb-8 md:mb-0">
          <FooterHeading>Social</FooterHeading>
          <ul>
            <li className="leading-none">
              <ExternalFooterLink
                href="https://twitter.com/abeja_silvestre"
                target="_blank"
              >
                Twitter
              </ExternalFooterLink>
            </li>
            <li className="leading-none">
              <ExternalFooterLink
                href="https://www.instagram.com/abejas_silvestres"
                target="_blank"
              >
                Instagram
              </ExternalFooterLink>
            </li>
          </ul>
        </div>
        <div className="col-span-1 mb-8 md:mb-0">
          <FooterHeading>Address</FooterHeading>
          <p>
            <FooterText>Asociación Abejas Silvestres</FooterText>
            <FooterText>C/ Gariñe 0 Portal 2A Piso 2A</FooterText>
            <FooterText>Getxo 48993, Bizkaia</FooterText>
            <FooterText>CIF: G95934733</FooterText>
          </p>
        </div>
        <div className="col-span-1">
          <FooterHeading>Email</FooterHeading>
          <ExternalFooterLink
            href="mailto: info.abejas.silvestres@gmail.com"
            target="_blank"
          >
            info.abejas.silvestres@gmail.com
          </ExternalFooterLink>
        </div>
      </div>
      <div className="h-px bg-neutral-700 mb-2" />
      <span className="text-sm text-neutral-400 font-raleway">
        @{new Date().getFullYear()} Asociacion Abejas Silvestres
      </span>
    </Container>
  </footer>
);
