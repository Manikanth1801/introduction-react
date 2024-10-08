import { FC, useState } from "react";

const StateLift:FC = () => {
    const [sharedValue, setSharedValue] = useState('');

    const handleValueChange = (newValue:any) => {
      setSharedValue(newValue);
    };

    return (
      <div>
        <ChildComponent1 value={sharedValue} onValueChange={handleValueChange} />
        <ChildComponent2 value={sharedValue} />
      </div>
    );
  };

  const ChildComponent1:FC<any> = ({ value, onValueChange }) => {
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
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