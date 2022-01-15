import classNames from 'classnames';

export const Select = ({ label, id, options, ...rest }) => (
  <div>
    <label
      className="font-semibold text-2xl block text-neutral-800 mb-2"
      htmlFor={id}
    >
      {label}
    </label>
    <select
      className="text-2xl appearance-none outline-none p-2 border-primary-400 border-solid border-2 rounded-md w-full focus:ring-4 focus:ring-primary-100 transition-shadow"
      {...rest}
    >
      <option value="">Todos</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
