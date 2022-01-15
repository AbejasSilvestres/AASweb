export const RadioGroup = ({ label, options, value, onChange, ...rest }) => {
  const handleChange = (value) => () => {
    onChange(value);
  };

  return (
    <fieldset {...rest}>
      <legend className="font-semibold text-2xl block text-neutral-800 mb-5">
        {label}
      </legend>
      {options.map((option) => (
        <label
          className="block mb-6 cursor-pointer"
          key={option.value}
          htmlFor={option.label}
        >
          <input
            className="accent-primary-500 scale-250 ml-2 mr-5 cursor-pointer"
            id={option.label}
            type="radio"
            checked={option.value === value}
            onChange={handleChange(option.value)}
          />
          <span className="capitalize text-xl text-neutral-800">
            {option.label}
          </span>
        </label>
      ))}
    </fieldset>
  );
};
