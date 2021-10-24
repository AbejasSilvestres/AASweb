import { createElement } from 'react';
import classNames from 'classnames';

export const SectionText = ({ as = 'p', children, className, ...rest }) =>
  createElement(
    as,
    {
      className: classNames(
        'font-raleway',
        'text-neutral-900',
        'font-normal',
        'text-lg',
        'leading-relaxed',
        'block',
        className
      ),
      ...rest,
    },
    children
  );
