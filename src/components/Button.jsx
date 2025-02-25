import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-colors duration-200"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;