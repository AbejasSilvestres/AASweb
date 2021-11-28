import { Container } from '../../Container/Container';
import { ExternalFooterLink } from './ExternalFooterLink';
import { FooterHeading } from './FooterHeading';
import { FooterText } from './FooterText';
import { FooterIcon } from './FooterIcon';
import { Twitter, Instagram, Facebook, Email } from '../../../icons';

export const Footer = () => (
  <footer className="bg-primary-800 py-16 h-full">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 mb-20">
        <div className="col-span-1 mb-8 md:mb-0">
          <FooterHeading>Social</FooterHeading>
          <ul className="flex flex-col gap-1.5">
            <li className="leading-none">
              <ExternalFooterLink
                href="https://twitter.com/abeja_silvestre"
                target="_blank"
              >
                <FooterIcon>
                  <Twitter />
                </FooterIcon>
                Twitter
              </ExternalFooterLink>
            </li>
            <li className="leading-none">
              <ExternalFooterLink
                href="https://www.instagram.com/abejas_silvestres"
                target="_blank"
              >
                <FooterIcon>
                  <Instagram />
                </FooterIcon>
                Instagram
              </ExternalFooterLink>
            </li>
            <li className="leading-none">
              <ExternalFooterLink
                href="https://www.facebook.com/curro.molina.980"
                target="_blank"
              >
                <FooterIcon>
                  <Facebook />
                </FooterIcon>
                Facebook
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
          <FooterHeading>Contact</FooterHeading>
          <ExternalFooterLink
            href="mailto: info.abejas.silvestres@gmail.com"
            target="_blank"
          >
            <FooterIcon className="text-lg">
              <Email />
            </FooterIcon>
            info.abejas.silvestres@gmail.com
          </ExternalFooterLink>
        </div>
      </div>
      <div className="h-px bg-neutral-700 mb-2" />
      <span className="text-sm text-neutral-400">
        @{new Date().getFullYear()} Asociación Abejas Silvestres
      </span>
    </Container>
  </footer>
);
