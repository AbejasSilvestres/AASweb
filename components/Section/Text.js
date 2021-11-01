import { createElement } from 'react';
import classNames from 'classnames';

export const SectionText = ({ as = 'p', children, className, ...rest }) =>
  createElement(
    as,
    {
      className: classNames('text-xl', 'leading-relaxed', 'block', className),
      ...rest,
    },
    children
  );
