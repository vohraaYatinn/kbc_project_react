import React, { useState, useEffect } from "react";
//components
import Questions from "../components/Questions";
import MoneyBoard from "../components/MoneyBoard";
import GameResult from "../components/GameResult";
import { money_price, questionWithAnswer } from "../constants/GlobalConstants";
//css import
import "../App.css";

const KbcContainer = ({ userName }) => {
  // use state
  const [counter, setCounter] = useState(0);
  const [game, setGame] = useState(false);
  const [moneyEarned, setmoneyEarned] = useState(0);
  const [lengthQuestions, setLengthQuestions] = useState();

  // functions
  const checkAnswer = (inputId, questionId) => {
    var result = questionWithAnswer.find(
      (item) => item.question_id === questionId
    );
    if (result.answer_id === parseInt(inputId)) {
      alert("Correct answer");
      MoneyEarned(counter);

      if (counter + 1 === lengthQuestions) {
        GameEnd();
      }
      setCounter(counter + 1);
    } else {
      alert("Wrong answer");
      GameEnd();
    }
  };
  const MoneyEarned = (counter) => {
    setmoneyEarned(money_price[counter + 1]);
  };
  const GameEnd = () => {
    setGame(true);
  };

  //useEffect
  useEffect(() => {
    if (game) {
      alert("Game Ended");
    }
  }, [game]);
  useEffect(() => {
    var lengthQuestion = Object.keys(questionWithAnswer).length;
    setLengthQuestions(lengthQuestion);
  }, []);

  return (
    <div className="body">
      <div className="nameboard">
        <h1>Player Name:</h1>
        <h3>{userName}</h3>
      </div>
      {!game && (
        <Questions
          className="left-side"
          questionWithAnswer={questionWithAnswer[counter]}
          checkAnswer={checkAnswer}
          counter={counter}
          GameEnd={GameEnd}
        />
      )}
      {!game && (
        <MoneyBoard
          className="right-side"
          money_price={money_price}
          counterQues={counter}
        />
      )}
      {game && <GameResult moneyEarned={moneyEarned} />}
    </div>
  );
};

export default KbcContainer;
