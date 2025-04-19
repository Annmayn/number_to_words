import { availableLocales } from "./const.ts";
import { ParamInputProps } from "./types/types.ts";
import { useEffect, useState } from "react";

const ParamInput = ({
  minVal,
  maxVal,
  setMinVal,
  setMaxVal,
  setLocale,
}: ParamInputProps) => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowHint(false), 5000);
  }, []);
  return (
    <>
      {showHint && (
        <div className="absolute bottom-5 left-5">
          <p className="my-5">
            Use the{" "}
            <span className="bg-gray-200 rounded-md p-2 text-black">Check</span>{" "}
            button to verify the written text
          </p>
          <p className="my-5">
            Use the{" "}
            <span className="bg-gray-200 rounded-md p-2 text-black">
              Answer
            </span>{" "}
            button to go through the numbers rapidly
          </p>
        </div>
      )}
      <div className="flex flex-col gap-y-3 items-center md:flex-row md:justify-center md:gap-x-5">
        <p>Random number between</p>
        <div className="flex flex-row gap-x-5 md:gap-x-3">
          <input
            type="number"
            value={minVal}
            onChange={(val) => setMinVal(parseInt(val.target.value))}
            className="border-2 rounded-md border-gray-200 w-20 md:w-30 text-center"
          />
          <input
            type="number"
            value={maxVal}
            onChange={(val) => setMaxVal(parseInt(val.target.value))}
            className="border-2 rounded-md border-gray-200 w-20 md:w-30 text-center"
          />
        </div>
        <p>in</p>
        <select onChange={(e) => setLocale(e.target.value)}>
          {availableLocales.map(([localeName, localeId]) => (
            <option key={localeId} value={localeId}>
              {localeName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ParamInput;
