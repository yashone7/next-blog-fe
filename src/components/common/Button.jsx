import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <button
        className="cursor-pointer
         text-lg focus:outline-none
          hover:bg-pink-300
          bg-brand-pink focus:ring-2
          focus:ring-brand-peach 
          text-brand-navy-blue 
          font-bold px-4 py-2 rounded"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
