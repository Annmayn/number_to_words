import { Diff, DiffElementProps } from "./types/types.ts";
import { diffChars } from "diff";
import { useState } from "react";

const DiffElement = ({ historyItem }: DiffElementProps) => {
  const [shouldExpand, setShouldExpand] = useState(false);

  const toggleExpand = () => {
    setShouldExpand(!shouldExpand);
    const t = setTimeout(() => setShouldExpand((state) => !state), 1500);
    return () => clearTimeout(t);
  };

  return shouldExpand ? (
    <div className="flex flex-col gap-y-1">
      <p>{historyItem.answer}</p>
      <p>{historyItem.expectedAnswer}</p>
    </div>
  ) : (
    <p onClick={toggleExpand}>
      {diffChars(
        historyItem.answer,
        historyItem.expectedAnswer.toLowerCase(),
      ).map((item: Diff) => {
        return (
          <span
            className={`text-lg font-semibold text-white-300 ${item.added ? "bg-green-600" : ""} ${item.removed ? "bg-red-500" : ""}`}
          >
            {item.value}
          </span>
        );
      })}
    </p>
  );
};

export default DiffElement;
