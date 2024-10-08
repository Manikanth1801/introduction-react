import React from 'react';

interface TextInputProps {
  label: string;
  text: string;
  setText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, text, setText }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default TextInput;
