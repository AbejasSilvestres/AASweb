import classNames from 'classnames';
import { Container } from '../Container/Container';

export const SectionContainer = ({ className, children, ...rest }) => (
  <section className={classNames('py-32', className)} {...rest}>
    <Container>{children}</Container>
  </section>
);
