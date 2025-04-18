import { HistoryRow } from "./types.ts";

type HistoryProps = {
  history: HistoryRow[];
};
const History = ({ history }: HistoryProps) => {
  return (
    <div
      style={{ height: "70dvh" }}
      className="flex flex-col gap-y-5 my-20 overflow-y-scroll"
    >
      {history.map((item) => (
        <p key={item.questionNumber}>
          {item.answer} - {item.expectedAnswer} - {item.isCorrect.toString()}
        </p>
      ))}
    </div>
  );
};
export default History;
