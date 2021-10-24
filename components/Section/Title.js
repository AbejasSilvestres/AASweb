import { createElement } from 'react';
import classNames from 'classnames';

export const SectionTitle = ({ as = 'h2', children, className, ...rest }) =>
  createElement(
    as,
    {
      className: classNames(
        'font-raleway',
        'text-neutral-800',
        'font-bold',
        'text-3xl',
        'block',
        className
      ),
      ...rest,
    },
    children
  );
