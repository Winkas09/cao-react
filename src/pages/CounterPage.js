import { useState } from "react";
import "./CounterPage.css";

const CounterButton = ({ label, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

const CounterPage = () => {
  const [num, setNum] = useState(5);
  const [scores, setScores] = useState([]);

  // Handlers for updating the counter
  const updateNum = (value) => setNum((prevNum) => Math.min(10, Math.max(0, prevNum + value)));
  const resetHandler = () => setNum(5);
  const inputChangeHandler = (event) => {
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      setNum(Math.min(10, Math.max(0, value)));
    }
  };

  // Handlers for managing scores
  const addScoreHandler = () => setScores((prevScores) => [num, ...prevScores]);
  const deleteAllScoresHandler = () => setScores([]);
  const deleteScoreHandler = (index) => {
    setScores((prevScores) => prevScores.filter((scoreIndex) => scoreIndex !== index));
  };

  // Statistics functions
  const calculateAverage = (scores) => {
    if (scores.length === 0) return "N/A";
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return (sum / scores.length).toFixed(2);
  };

  const calculateMedian = (scores) => {
    if (scores.length === 0) return "N/A";
    const sortedScores = [...scores].sort((a, b) => a - b);
    const middle = Math.floor(sortedScores.length / 2);
    return sortedScores.length % 2 === 0
      ? (sortedScores[middle - 1] + sortedScores[middle]) / 2
      : sortedScores[middle];
  };

  const findHighestScore = (scores) => (scores.length === 0 ? "N/A" : Math.max(...scores));
  const findLowestScore = (scores) => (scores.length === 0 ? "N/A" : Math.min(...scores));

  // Function to determine the color based on the score
  const getColor = (score) => {
    if (score < 5) return "red";
    if (score < 6) return "blue";
    return "green";
  };

  return (
    <div>
      <h3 className={`counter-value ${getColor(num)}`}>{num}</h3>

      <CounterButton label="+1" onClick={() => updateNum(1)} disabled={num >= 10} />
      <CounterButton label="+2" onClick={() => updateNum(2)} disabled={num > 8} />
      <CounterButton label="+5" onClick={() => updateNum(5)} disabled={num > 5} />
      <CounterButton label="-1" onClick={() => updateNum(-1)} disabled={num <= 0} />
      <CounterButton label="-2" onClick={() => updateNum(-2)} disabled={num < 2} />
      <CounterButton label="-5" onClick={() => updateNum(-5)} disabled={num < 5} />
      <button onClick={resetHandler}>Reset</button>

      <input type="number" value={num} onChange={inputChangeHandler} min="0" max="10" />

      <div className="scores-section">
        <h2>Scores:</h2>
        <button onClick={addScoreHandler}>Add Score</button>
        <button onClick={deleteAllScoresHandler}>Delete All</button>

        <ul>
          {scores.map((score, index) => (
            <li key={index} className={getColor(score)}>
              {score} <button onClick={() => deleteScoreHandler(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="statistics-section">
        <h3>Statistics:</h3>
        <p className="average">Average: {calculateAverage(scores)}</p>
        <p className="median">Median: {calculateMedian(scores)}</p>
        <p className="highest">Highest Score: {findHighestScore(scores)}</p>
        <p className="lowest">Lowest Score: {findLowestScore(scores)}</p>
      </div>
    </div>
  );
};

export default CounterPage;
