import classNames from 'classnames';

export const Button = ({ className, ...rest }) => (
  <a
    className={classNames(
      'bg-primary-600',
      'hover:bg-primary-700',
      'focus-within:bg-primary-700',
      'text-neutral-0',
      'px-8',
      'py-3',
      'font-bold',
      'rounded-md',
      'text-xl',
      'inline-block',
      className
    )}
    {...rest}
  />
);
