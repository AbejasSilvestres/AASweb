import classNames from 'classnames';
import { Container } from '../Container/Container';

export const SectionContainer = ({ className, children, ...rest }) => (
  <section className={classNames('py-24', className)} {...rest}>
    <Container>{children}</Container>
  </section>
);
