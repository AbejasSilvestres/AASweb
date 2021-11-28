import { createElement } from 'react';
import classNames from 'classnames';

export const SectionTitle = ({ as = 'h2', children, className, ...rest }) =>
  createElement(
    as,
    {
      className: classNames('text-4xl', 'block', className),
      ...rest,
    },
    children
  );
