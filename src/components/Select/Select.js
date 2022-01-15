export const Select = ({ label, id, options, onChange, ...rest }) => {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <div>
      <label
        className="font-semibold text-2xl block text-neutral-800 mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="text-2xl appearance-none outline-none p-2 bg-neutral-0 border-neutral-400 border-solid border-2 rounded-md w-full focus:ring-4 focus:border-primary-400 focus:ring-primary-100 transition-shadow"
        onChange={handleChange}
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
};
