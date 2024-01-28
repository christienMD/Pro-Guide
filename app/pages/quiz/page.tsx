"use client";
import { Button } from "@/app/MaterialTailwind";
import Logo from "@/app/components/Logo";
import { Result, getQuestions } from "@/app/data";
import React, { useEffect, useState } from "react";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import ChoiceContainer from "./ChoiceContainer";
import { resultsInitialState } from "@/app/data";
import ResultsTemplate from "@/app/components/ResultsTemplate";
import Feedback from "@/app/components/Feedback";
import Timer from "@/app/components/Timer";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = getQuestions();
  const { choices, correctAnswer, question } = questions[currentQuestion];
  const [selectedAnswerIndex, setSlectedAnswerIndex] = useState<number | null>(
    null
  );
  const [answer, setAnswer] = useState(false);
  const [result, setResult] = useState<Result>(resultsInitialState);
  const [showResults, setShowResults] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false); // State to track if time has expired

  const handleTimeout = () => {
    console.log("Time out!");
    setTimeExpired(true);
  };

  const handelClickAnswer = (userAnswer: string, index: number) => {
    setSlectedAnswerIndex(index);
    if (userAnswer === correctAnswer) {
      setAnswer(true);
      console.log(userAnswer);
    } else {
      setAnswer(false);
    }
  };

  const handleOnclickNext = () => {
    setSlectedAnswerIndex(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResults(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row container mx-auto md:p-5">
      <div className="md:w-6/12 flex flex-col gap-5">
        <Logo />
        <div className="flex gap-14 items-center ms-5 mt-5">
          <FaPersonDotsFromLine size={40} className="" />
          <h2 className="font-light text-4xl">
            {timeExpired ? "Time Out" : `2 / 5 minutes`}
          </h2>
        </div>
        {!showResults || timeExpired ? (
          <div className="flex flex-col mt-5 ps-5">
            <h2 className="font-semibold text-2xl">Pro Guid Experience</h2>
            <div className="text-zinc-400 font-lg">
              Question {currentQuestion + 1} Of {questions.length}
            </div>
            <p className="font-lg mt-4 md:mt-7 ps-7">{question}</p>
          </div>
        ) : (
          <div>
            <Feedback score={result.score} />
          </div>
        )}
      </div>

      <div className="md:w-6/12 h-screen border-y-2 border-x-2 p-10">
        {!showResults || timeExpired ? (
          <>
            <div className="flex items-center gap-2 md:gap-4 justify-around">
              <div>Select One answer</div>
              <div className="text-3xl font-light">
                <Timer totalTime={150} onTimeout={handleTimeout} />
              </div>
              <Button
                placeholder=""
                onClick={handleOnclickNext}
                disabled={selectedAnswerIndex === null || timeExpired}
              >
                {timeExpired
                  ? "Time out"
                  : currentQuestion === questions.length - 1
                  ? "Finish"
                  : "Next question"}
              </Button>
            </div>
            <div className="mt-10">
              {choices.map((choice, index) => (
                <ChoiceContainer
                  key={choice.label}
                  choice={choice.label}
                  letter={choice.letter}
                  userAnswer={choice.label}
                  selectedAnswerIndex={selectedAnswerIndex}
                  index={index}
                  onClick={() => handelClickAnswer(choice.label, index)}
                />
              ))}
            </div>
          </>
        ) : (
          <ResultsTemplate
            score={result.score}
            correctAnswers={result.correctAnswers}
          />
        )}
      </div>
    </div>
  );
};

export default QuizPage;
