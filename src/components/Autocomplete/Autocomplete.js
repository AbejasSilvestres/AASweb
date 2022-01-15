import classNames from 'classnames';
import { useCombobox } from 'downshift';
import { useState } from 'react';

import { filter } from '../../lib/utils';

const Autocomplete = ({ items, label, onSelectedItemChange, placeholder }) => {
  const [inputItems, setInputItems] = useState(items);

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    onSelectedItemChange,
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      if (inputValue === '') {
        onSelectedItemChange({ selectedItem: '' });
      }
      setInputItems(
        filter(
          (item) =>
            !inputValue ||
            item.toLowerCase().startsWith(inputValue.toLowerCase()),
          items
        )
      );
    },
  });
  7;

  return (
    <div className="relative">
      <div {...getComboboxProps()}>
        <label
          className="font-semibold text-2xl block text-neutral-800 mb-2"
          {...getLabelProps()}
        >
          {label}
        </label>
        <input
          className="text-2xl appearance-none outline-none p-2 border-primary-400 border-solid border-2 rounded-md w-full focus:ring-4 focus:ring-primary-100 transition-shadow"
          {...getInputProps({
            placeholder,
          })}
        />
      </div>
      <ul
        className={classNames(
          isOpen && !!inputItems.length && 'rounded-md',
          'z-2000',
          'shadow-lg',
          'absolute',
          'mt-2',
          'w-full',
          'bg-neutral-0',
          'max-h-56',
          'overflow-y-auto'
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              className={classNames(
                highlightedIndex === index
                  ? 'bg-primary-600 text-neutral-0'
                  : 'bg-neutral-0 text-neutral-800'
              )}
              key={`${item}-${index}`}
              {...getItemProps({ item, index })}
            >
              <span className="text-neutral-1000 p-3 block">{item}</span>
              {index < inputItems.length - 1 && (
                <span className="block h-px w-full bg-neutral-200" />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
