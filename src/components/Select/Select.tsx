import { useClickOutsideListener } from '../../hooks';
import React, { useRef, useState } from 'react';

interface DataSelect {
  text: string;
  value: string;
}

interface IPropsSelect {
  options: DataSelect[];
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string | number;
  className?: string;
}

const Select = ({
  options,
  onChange,
  defaultValue,
  className,
  placeholder,
  label,
}: IPropsSelect) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const inputRef = useRef<any>();

  useClickOutsideListener(() => setOpen(false), inputRef.current);

  const handleOnClickValue = () => {
    setOpen((prev) => !prev);
  };

  const handleOnClickItem = (value: string) => {
    setSelectedValue(value);
    setOpen(false);
  };

  return (
    <div
      ref={inputRef}
      className={`${className} relative`}
      tabIndex={0}
    >
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
              onMouseDown={(e) => {}}
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
