import React from 'react';

interface TemperatureInputProps {
  scale: string;
  temperature: string;
  onTemperatureChange: (temp: string) => void;
}

const scaleNames = {
  C: 'Celsius',
  F: 'Fahrenheit',
};

const TemperatureInput: React.FC<TemperatureInputProps> = ({
  scale,
  temperature,
  onTemperatureChange,
}) => {
  return (
    <fieldset>
      {/* <legend>Enter temperature in {scaleNames[scale]}:</legend> */}
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
};

export default TemperatureInput;
