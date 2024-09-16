import { useState } from "react";

const CounterPage = () => {
  const [num, setNum] = useState(5);

  const plus1Handler = () => setNum(num + 1);
  const minus1Handler = () => setNum(num - 1);
  const resetHandler = () => setNum(5);
  const plus5Handler = () => setNum(num + 5);
  const minus5Handler = () => setNum(num - 5);
  const minus2Handler = () => setNum(num - 2);
  const plus2Handler = () => setNum(num + 2);

  return (
    <div>
      <h3 style={{ color: num < 5 ? "red" : num < 6 ? "blue" : "green" }}>{num}</h3>

      <button onClick={plus1Handler} disabled={num > 9}>
        +1
      </button>
      <button onClick={plus2Handler} disabled={num > 8}>
        +2
      </button>
      <button onClick={plus5Handler} disabled={num > 5}>
        +5
      </button>
      <button onClick={minus1Handler} disabled={num <= 1}>
        -1
      </button>
      <button onClick={minus2Handler} disabled={num <= 2}>
        -2
      </button>
      <button onClick={minus5Handler} disabled={num <= 5}>
        -5
      </button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default CounterPage;
