import React, { useState } from 'react';
import TextInput from './TextInput';

const Parent: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <TextInput label="Input One" text={text} setText={setText} />
      <TextInput label="Input Two" text={text} setText={setText} />
    </div>
  );
};

export default Parent;
