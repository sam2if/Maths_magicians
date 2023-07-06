import { useState } from 'react';

const Calculator = () => {
  const [num, setnum] = useState(0);

  const handle = (num) => {
    setnum(num);
  };

    <>
      <div className="contain">
        <button onClick={() => handle(0)} className="first">a</button>
        <button />
        <p className="numbers">AC</p>
        <p className="numbers">+/-</p>
        <p className="numbers">%</p>
        <p className="operators">÷</p>
        <p className="numbers">7</p>
        <p className="numbers">8</p>
        <p className="numbers">9</p>
        <p className="operators">x</p>
        <p className="numbers">4</p>
        <p className="numbers">5</p>
        <p className="numbers">6</p>
        <p className="operators">-</p>
        <p className="numbers">1</p>
        <p className="numbers">2</p>
        <p className="numbers">3</p>
        <p className="operators">+</p>
        <p className="last">0</p>
        <p className="numbers">.</p>
        <p className="operators">=</p>
      </div>
    </>;
};

export default Calculator;
