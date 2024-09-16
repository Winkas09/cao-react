import { useState } from "react";

const CounterPage = () => {
  const [num, setNum] = useState(5);
  //   pridedame setScores funkcija kuri leidzia pakeisti skaiciu i kita skaiciu ir ji atvaizduoja skaiciu

  const [scores, setScores] = useState([]);

  const plus1Handler = () => setNum(num + 1);
  const minus1Handler = () => setNum(num - 1);
  const resetHandler = () => setNum(5);
  const plus5Handler = () => setNum(num + 5);
  const minus5Handler = () => setNum(num - 5);
  const minus2Handler = () => setNum(num - 2);
  const plus2Handler = () => setNum(num + 2);
  // pridedame nauja funkcija inputChangeHandler kuri leidzia ivesti skaiciu i input lauka ir ji atvaizduoja skaiciu
  const inputChangeHandler = (event) => setNum(parseInt(event.target.value));
  //
  const addScoreHandler = () => setScores([num, ...scores]);
  const deleteAllScoresHandler = () => setScores([]);
  const deleteScoreHandler = (index) => setScores(scores.filter((_, i) => i !== index));

  // pridedame statistika

  const calculateAverage = (scores) => {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return (sum / scores.length).toFixed(2);
  };

  const calculateMedian = (scores) => {
    scores.sort((a, b) => a - b);
    const middle = Math.floor(scores.length / 2);
    return scores.length % 2 === 0 ? (scores[middle - 1] + scores[middle]) / 2 : scores[middle];
  };

  const findHighestScore = (scores) => Math.max(...scores);
  const findLowestScore = (scores) => Math.min(...scores);

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

      {/* parseint */}
      <input type="number" value={num} onChange={inputChangeHandler} />
      <h2>Balai:</h2>
      <button onClick={addScoreHandler}>Pridėti balą</button>
      <button onClick={deleteAllScoresHandler}>Ištrinti visus</button>

      <ul>
        {scores.map((score, index) => (
          <li key={index} style={{ color: score < 5 ? "red" : score < 6 ? "blue" : "green" }}>
            {score} <button onClick={() => deleteScoreHandler(index)}>Ištrinti</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Statistika:</h3>
        <p>Vidurkis : {scores.length > 0 ? calculateAverage(scores) : "N/A"}</p>
        <p>Mediana : {scores.length > 0 ? calculateMedian(scores) : "N/A"} </p>
        <p>Auksciausias balas : {scores.length > 0 ? findHighestScore(scores) : "N/A"}</p>
        <p>Zemiausias balas : {scores.length > 0 ? findLowestScore(scores) : "N/A"}</p>
      </div>
    </div>
  );
};

export default CounterPage;
