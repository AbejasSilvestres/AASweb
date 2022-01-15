import classNames from 'classnames';
import { createElement } from 'react';

export const SectionTitle = ({ as = 'h2', children, className, ...rest }) =>
  createElement(
    as,
    {
      className: classNames('text-4xl', 'block', className),
      ...rest,
    },
    children
  );
