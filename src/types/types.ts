export type HistoryRow = {
  questionNumber: number;
  answer: string;
  expectedAnswer: string;
};

export type HistoryProps = {
  history: HistoryRow[];
};

export type Diff = {
  added: boolean;
  removed: boolean;
  count: number;
  value: string;
};

export type DiffElementProps = {
  historyItem: HistoryRow;
};

export type ParamInputProps = {
  minVal: number;
  maxVal: number;
  setMinVal: (minVal: number) => void;
  setMaxVal: (maxVal: number) => void;
  setLocale: (locale: string) => void;
};
