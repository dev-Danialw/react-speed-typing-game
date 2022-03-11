import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const START_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(START_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }
  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(START_TIME);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }
  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }
  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        onChange={handleChange}
        disabled={!isTimeRunning}
        value={text}
        ref={textBoxRef}
      />
      <h4>Time Remaing: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start Typing
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}
