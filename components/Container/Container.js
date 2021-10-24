import classNames from 'classnames';

export const Container = ({ children, className }) => (
  <div className={classNames('container', 'mx-auto', 'px-4', className)}>
    {children}
  </div>
);
