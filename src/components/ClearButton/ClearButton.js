import classNames from 'classnames';

export const ClearButton = ({ className, ...rest }) => (
  <button
    className={classNames(
      'text-primary-600',
      'hover:text-primary-700',
      'focus-within:text-primary-700',
      'underline',
      className
    )}
    {...rest}
  >
    Eliminar filtro
  </button>
);
