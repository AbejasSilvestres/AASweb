import classNames from 'classnames';

export const ClearButton = ({ className, ...rest }) => (
  <button
    className={classNames(
      'text-primary-500',
      'hover:text-primary-600',
      'focus-within:text-primary-600',
      'underline',
      className
    )}
    {...rest}
  >
    Eliminar filtro
  </button>
);
