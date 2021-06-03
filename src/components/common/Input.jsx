import React from "react";

const Input = ({ id, name, type, placeholder, onChange, value }) => {
  return (
    <div className="my-control">
      <label htmlFor={id} className="my-label">
        {name}
      </label>
      <input
        type={type}
        className="
          my-2
          bg-brand-navy-blue
          text-brand-peach
          w-3/5 h-9 p-2 rounded focus:outline-none
          focus:ring-2 
          placeholder-brand-peach
          focus:ring-brand-pink"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
