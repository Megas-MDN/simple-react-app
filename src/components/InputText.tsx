import React from 'react';

interface IInputText {
  placeholder?: string;
  label?: string;
  text?: string;
  labelStyles?: string;
  htmlFor?: string;
  ariaDescribedby?: string;
  inputStyles?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({
  placeholder,
  label,
  text,
  labelStyles = '',
  htmlFor,
  ariaDescribedby,
  inputStyles = '',
  type = 'text',
  onChange,
}: IInputText) => {
  return (
    <div>
      <label
        htmlFor={htmlFor || 'helper-text'}
        className={`block mb-2 text-sm font-medium ${labelStyles}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={htmlFor || 'helper-text'}
        aria-describedby={ariaDescribedby || 'helper-text-explanation'}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputStyles}`}
        placeholder={placeholder || 'name@flowbite.com'}
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
