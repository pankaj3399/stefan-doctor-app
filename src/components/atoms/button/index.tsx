import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...rest }) => {
  return (
    <button
      className={`bg-primary hover:bg-orange-600 text-primary-light font-medium py-3 px-6 rounded-[10px] transition duration-300 ease-in-out ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
