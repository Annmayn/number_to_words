import "./App.css";
import { useCallback, useState } from "react";
import InputSection from "./InputSection.tsx";

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000);
  const [history, setHistory] = useState<string[]>([]);

  const getRandomIntBetween = useCallback((min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const numToGuess = getRandomIntBetween(minVal, maxVal).toString();

  const checkAnswer = useCallback(
    (answer: string) => {
      const isCorrect = answer === numToGuess;
      setHistory([...history, answer]);
      return isCorrect;
    },
    [history, numToGuess],
  );

  return (
    <div className="h-screen flex-col">
      <div className="flex flex-row justify-center gap-x-5">
        <p>Random number between</p>
        <input
          type="number"
          value={minVal}
          defaultValue={minVal}
          onChange={(val) => setMinVal(parseInt(val.target.value))}
          className="border-2 rounded-md border-gray-200 w-30 text-center"
        />
        <input
          type="number"
          value={maxVal}
          defaultValue={maxVal}
          onChange={(val) => setMaxVal(parseInt(val.target.value))}
          className="border-2 rounded-md border-gray-200 w-30 text-center"
        />
      </div>
      <InputSection
        checkAnswer={checkAnswer}
        guessNumber={numToGuess.toString()}
      />
      <div
        style={{ height: "70dvh" }}
        className="flex flex-col gap-y-5 my-20 overflow-y-scroll"
      >
        {history.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
