import radioStyles from './radio-group.module.css';

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
          className="flex flex-row items-center mb-6 cursor-pointer"
          key={option.value}
          htmlFor={option.label}
        >
          <input
            className={radioStyles.radio}
            id={option.label}
            type="radio"
            checked={option.value === value}
            onChange={handleChange(option.value)}
          />
          <span className="ml-2 text-xl text-neutral-800">{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
};
