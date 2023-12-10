import React from 'react';

type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export const ButtonComponents: React.FC<ButtonProps> = ({ text, type }) => {
  return (
    <button
      type={type}
      className="w-44 bg-sky-500 rounded font-semibold px-8 py-3.5 text-white"
    >
      {text}
    </button>
  );
};
