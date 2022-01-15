/* eslint-disable react/display-name */
import classNames from 'classnames';
import { forwardRef } from 'react';

export const Link = forwardRef(({ className, children, ...rest }, ref) => (
  <a
    ref={ref}
    className={classNames(
      'text-primary-500',
      'hover:text-primary-600',
      'focus-within:text-primary-600',
      'font-semibold',
      'underline',
      className
    )}
    {...rest}
  >
    {children}
  </a>
));
