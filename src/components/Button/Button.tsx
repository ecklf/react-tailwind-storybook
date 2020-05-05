import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...otherProps }: Props) => {
  return (
    <button
      className="px-4 py-2 text-gray-100 bg-teal-600 rounded hover:bg-teal-500 hover:text-gray-100"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
