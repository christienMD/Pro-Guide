interface Props {
  index: number;
  choice: string;
  letter: string;
  userAnswer: string;
  selectedAnswerIndex: number | null;
  onClick: (answer: string, index: number) => void;
}

const ChoiceContainer = ({
  index,
  choice,
  letter,
  onClick,
  userAnswer,
  selectedAnswerIndex,
}: Props) => {
  const isSelected = selectedAnswerIndex === index;

  return (
    <div
      onClick={() => onClick(userAnswer, index)}
      className={`cursor-pointer px-3 py-9 flex justify-between mt-4 border-x-2 border-y-2 ${
        isSelected && "border-blue-600"
      }`}
    >
      <div>{choice}</div>
      <div
        className={`font-bold text-4xl ${
          isSelected ? "text-blue-600" : "text-[#d4d4d8]"
        }`}
      >
        {letter}
      </div>
    </div>
  );
};

export default ChoiceContainer;
