import "./App.css";
import { useCallback, useMemo, useState } from "react";
import InputSection from "./InputSection.tsx";
import { ToWords } from "to-words";
import History from "./History.tsx";
import { HistoryRow } from "./types.ts";

const availableLocales = [
  ["English", "en-US"],
  ["French", "fr-FR"],
  ["Korean", "ko-KR"],
];
let questionNumber = 1;

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000);
  const [history, setHistory] = useState<HistoryRow[]>([]);
  const [locale, setLocale] = useState<string>(availableLocales[0][1]);

  const getRandomIntBetween = useCallback((min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const numToGuess = getRandomIntBetween(minVal, maxVal);

  const toWords = useMemo(() => new ToWords({ localeCode: locale }), [locale]);
  const expectedAnswer = toWords.convert(numToGuess);

  const checkAnswer = useCallback(
    (answer: string) => {
      const isCorrect = answer === expectedAnswer.toLowerCase();
      setHistory([
        ...history,
        { questionNumber, answer, expectedAnswer, isCorrect },
      ]);
      questionNumber++;
      return isCorrect;
    },
    [expectedAnswer, history],
  );

  return (
    <div className="h-screen flex-col">
      <div className="flex flex-row justify-center gap-x-5">
        <p>Random number between</p>
        <input
          type="number"
          value={minVal}
          onChange={(val) => setMinVal(parseInt(val.target.value))}
          className="border-2 rounded-md border-gray-200 w-30 text-center"
        />
        <input
          type="number"
          value={maxVal}
          onChange={(val) => setMaxVal(parseInt(val.target.value))}
          className="border-2 rounded-md border-gray-200 w-30 text-center"
        />
        <select onChange={(e) => setLocale(e.target.value)}>
          {availableLocales.map(([localeName, localeId]) => (
            <option key={localeId} value={localeId}>
              {localeName}
            </option>
          ))}
        </select>
      </div>
      <InputSection
        checkAnswer={checkAnswer}
        guessNumber={numToGuess.toString()}
      />
      <History history={history} />
    </div>
  );
}

export default App;
