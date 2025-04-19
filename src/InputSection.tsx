import React, { useState } from "react";

type InputSectionProps = {
  guessNumber: string;
  checkAnswer: (answer: string, saveHistory: boolean) => string;
};

const InputSection = ({ guessNumber, checkAnswer }: InputSectionProps) => {
  const [answer, setAnswer] = useState("");
  const [showingAnswer, setShowingAnswer] = useState(false);

  const validateAnswer = (readMode = false) => {
    const expectedAnswer = checkAnswer(answer, !readMode);
    setAnswer(readMode ? expectedAnswer : "");
    setShowingAnswer(readMode);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      validateAnswer();
    }
  };
  return (
    <div className="flex flex-col gap-y-5 my-20">
      <p className="font-bold text-2xl">{guessNumber}</p>
      <div className="flex flex-col gap-y-3 items-center w-full justify-center">
        <input
          value={answer}
          onChange={(ans) => setAnswer(ans.target.value)}
          className="border-2 rounded-md border-gray-200 w-max md:w-lg text-center text-xl"
          onKeyDown={handleKeyDown}
        />
        <div className="flex flex-row gap-x-5">
          <button className="w-24 border border-white!" onClick={() => validateAnswer(false)}>Check</button>
          <button
            className="w-24 bg-red-500!"
            onClick={() => validateAnswer(!showingAnswer)}
          >
            {showingAnswer ? "Next" : "Answer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
