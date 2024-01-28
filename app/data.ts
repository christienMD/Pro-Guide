export interface Question {
  id: number;
  question: string;
  type: "MCQs" | "FIB";
  choices: Choice[];
  correctAnswer: string;
}

interface Choice {
  label: string;
  letter: "A" | "B" | "C" | "D";
}

const questions: Question[] = [
  {
    id: 1,
    question:
      "Which of the following is used in React.js to increase performance?",
    choices: [
      { label: "Virtual DOM", letter: "A" },
      { label: "Original DOM", letter: "B" },
      { label: "Both A and B", letter: "C" },
      { label: "None of the above", letter: "D" },
    ],
    type: "MCQs",
    correctAnswer: "Virtual DOM",
  },
  {
    id: 2,
    question: "What is ReactJS?",
    choices: [
      { label: "Server-side framework", letter: "A" },
      { label: "User Interface framework", letter: "B" },
      { label: "both a and b", letter: "C" },
      { label: "None of the above", letter: "D" },
    ],
    type: "MCQs",
    correctAnswer: "User Interface framework",
  },
  {
    id: 3,
    question:
      "Identify the one which is used to pass data to components from outside",
    choices: [
      { label: "Render with arguments", letter: "A" },
      { label: "setState", letter: "B" },
      { label: "PropTypes", letter: "C" },
      { label: "props", letter: "D" },
    ],
    type: "MCQs",
    correctAnswer: "props",
  },
  {
    id: 4,
    question: "In which language is React.js written?",
    choices: [
      { label: "Python", letter: "A" },
      { label: "Java", letter: "B" },
      { label: "C#", letter: "C" },
      { label: "JavaScript", letter: "D" },
    ],
    type: "MCQs",
    correctAnswer: "JavaScript",
  },
  {
    id: 5,
    question: "What is Babel?",
    choices: [
      { label: "JavaScript interpreter", letter: "A" },
      { label: "JavaScript transpiler", letter: "B" },
      { label: "JavaScript compiler", letter: "C" },
      { label: "None of the above", letter: "D" },
    ],
    type: "MCQs",
    correctAnswer: "JavaScript compiler",
  },
];

export interface Result {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

export const resultsInitialState: Result = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

export function getQuestions() {
  return questions;
}
