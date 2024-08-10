import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleNumberClick = (num) => {
    setInput(input + num);
  };

  const handleOperationClick = (operation) => {
    if (operation === '=') {
      setOutput(eval(input));
      setInput('');
    } else {
      setInput(input + operation);
    }
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperationClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperationClick('*')}>*</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={clearInput}>AC</button>
        <button onClick={() => handleOperationClick('=')}>=</button>
        <button onClick={() => handleOperationClick('+')}>+</button>
      </div>
      <div className="output">
        <p>{output}</p>
      </div>
    </div>
  );
};

export default Calculator;
