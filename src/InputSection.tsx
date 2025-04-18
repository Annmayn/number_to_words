import React, { useState } from "react";

type InputSectionProps = {
  guessNumber: string;
  checkAnswer: (answer: string) => void;
};

const InputSection = ({ guessNumber, checkAnswer }: InputSectionProps) => {
  const [answer, setAnswer] = useState("");

  const validateAnswer = () => {
    checkAnswer(answer);
    setAnswer("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      validateAnswer();
    }
  };
  return (
    <div className="gap-y-5 my-20">
      <p className="font-bold text-2xl">{guessNumber}</p>
      <div className="flex justify-center gap-x-5">
        <input
          value={answer}
          onChange={(ans) => setAnswer(ans.target.value)}
          className="border-2 rounded-md border-gray-200 w-lg text-center"
          onKeyDown={handleKeyDown}
        />
        <button onClick={validateAnswer}>Check</button>
      </div>
    </div>
  );
};

export default InputSection;
