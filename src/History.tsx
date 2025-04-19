import { HistoryProps } from "./types/types.ts";
import DiffElement from "./DiffElement.tsx";
import { useEffect, useRef } from "react";

const History = ({ history }: HistoryProps) => {
  const endOfListRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    endOfListRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div
      style={{ height: "50svh" }}
      className="flex flex-col gap-y-5 my-20 overflow-y-scroll"
    >
      {history.map((historyItem) => {
        return <DiffElement historyItem={historyItem} />;
      })}
      <div ref={endOfListRef} />
    </div>
  );
};
export default History;
