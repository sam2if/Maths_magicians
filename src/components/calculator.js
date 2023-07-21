import React, { useState } from 'react';
import Button from './button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);

    // Update the display value based on the calculator data
    const { total, next, operation } = newData;
    let value = '';
    if (operation) {
      value += total || '0';
      value += ` ${operation} `;
      value += next || '';
    } else {
      value = next || total || '0';
    }
    setDisplayValue(value);
  };

  return (
    <div
      className="calc-container"
      style={{
        backgroundColor: 'lightgrey',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        margin: '4.5rem auto',
        position: 'relative',
        padding: '3rem 0',
      }}
    >
      <div
        style={{
          marginTop: '-1.8rem',
          marginLeft: '2rem',
          position: 'absolute',
          color: 'orange',
          fontWeight: '600',
        }}
      >
        <h2>Math Magician</h2>
        <span>Lets do some math!</span>
      </div>
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="button-container">
          <Button label="AC" onClick={() => handleButtonClick('AC')} />
          <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <button type="button" className="orange" onClick={() => handleButtonClick('÷')}>
            ÷
          </button>
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <button type="button" className="orange" onClick={() => handleButtonClick('x')}>
            x
          </button>
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <button type="button" className="orange" onClick={() => handleButtonClick('-')}>
            -
          </button>
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <button type="button" className="orange" onClick={() => handleButtonClick('+')}>
            +
          </button>
        </div>
        <div className="btn-row">
          <div colSpan="2" className="button0">
            <Button label="0" onClick={() => handleButtonClick('0')} />
          </div>
          <Button label="." onClick={() => handleButtonClick('.')} />
          <button type="button" className="orange bg" onClick={() => handleButtonClick('=')}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
