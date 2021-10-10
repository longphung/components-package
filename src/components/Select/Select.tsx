import React, { useState } from 'react';

interface DataSelect {
  text: string;
  value: string | number;
}

interface IPropsSelect {
  options: DataSelect[];
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string | number;
  className?: string;
}

const Select: React.FC<IPropsSelect> = ({
  options,
  onChange,
  defaultValue,
  className,
  placeholder,
  label,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | number>('');

  const handleOnClickValue = () => {
    setOpen((prev) => !prev);
  };

  const handleOnClickItem = (value: string | number) => {
    setSelectedValue(value);
    setOpen(false);
  };

  const handleOnBlur = () => {
    setOpen(false);
  };

  return (
    <div className={`${className} relative`} onBlur={handleOnBlur} tabIndex={0}>
      {label && <label>{label}</label>}
      <div
        className="border-primary border rounded p-2 pl-4 cursor-pointer"
        onClick={handleOnClickValue}
      >
        {selectedValue || placeholder}
      </div>
      {open && (
        <div className="absolute bg-white w-full shadow z-10">
          {options.map((item) => (
            <div
              className="cursor-pointer p-2 pl-4 hover:bg-gray-100"
              key={item.value}
              onClick={() => handleOnClickItem(item.value)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
