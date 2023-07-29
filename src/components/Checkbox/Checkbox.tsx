import React, { useState } from "react";
import "./Checkbox.css"; // Import the CSS. Make sure to create this file with the CSS content provided earlier

interface CheckboxProps {
  // label?: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({  isChecked, setIsChecked }) => {
  // const [isChecked, setIsChecked] = useState(false);
  let label: string | undefined;
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <input
        id={label}
        className="checkbox-inner"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
