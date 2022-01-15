import classNames from 'classnames';
import { createElement } from 'react';

export const SectionText = ({ as = 'p', children, className, ...rest }) =>
  createElement(
    as,
    {
      className: classNames('text-xl', 'leading-relaxed', 'block', className),
      ...rest,
    },
    children
  );
