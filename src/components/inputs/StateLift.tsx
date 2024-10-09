import { FC, useState } from "react";

const StateLift:FC = () => {
    const [sharedValue, setSharedValue] = useState('');

    const handleValueChange = (newValue:any) => {
      setSharedValue(newValue);
    };

    return (
      <div>
        <ChildComponent1 value={sharedValue} handleValueChange={handleValueChange} />
        <ChildComponent2 value={sharedValue} />
      </div>
    );
  };

  const ChildComponent1:FC<any> = ({ value, handleValueChange }) => {
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => handleValueChange(e.target.value)}
        />
      </div>
    );
  };

  const ChildComponent2:FC<any> = ({ value }) => {
    return (
      <div>
        <p>Shared Value: {value}</p>
      </div>
    );
  };

  export default StateLift;
// export default {};