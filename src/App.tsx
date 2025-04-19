import "./App.css";
import { useCallback, useMemo, useState } from "react";
import InputSection from "./InputSection.tsx";
import { ToWords } from "to-words";
import History from "./History.tsx";
import { HistoryRow } from "./types/types.ts";
import ParamInput from "./ParamInput.tsx";
import { availableLocales } from "./const.ts";

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
  const expectedAnswer = toWords.convert(numToGuess).toLowerCase();

  const checkAnswer = useCallback(
    (answer: string, saveHistory = true) => {
      if (saveHistory) {
        setHistory([...history, { questionNumber, answer, expectedAnswer }]);
        questionNumber++;
      }
      return expectedAnswer;
    },
    [expectedAnswer, history],
  );

  return (
    <div className="h-screen w-full flex-col">
      <ParamInput
        minVal={minVal}
        maxVal={maxVal}
        setMinVal={setMinVal}
        setMaxVal={setMaxVal}
        setLocale={setLocale}
      />
      <InputSection
        key={locale}
        checkAnswer={checkAnswer}
        guessNumber={numToGuess.toString()}
      />
      <History history={history} />
    </div>
  );
}

export default App;
