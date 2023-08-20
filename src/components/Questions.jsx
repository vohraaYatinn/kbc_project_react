import React, { useState } from "react";
import styled from "styled-components";
import ClockTimer from "../components/ClockTimer"

const Container = styled.div`
  color: white;
  position: absolute;
  bottom: 3rem;
  width: 70%;
  display: flex;
  padding: 2rem;
  align-self: center;
  border: 1px solid transparent;
  border-radius: 10%;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  .questions__ques {
    width: 80%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border: 1px solid black;
  }
  .questions__answers {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 1rem;
  }
  .questions__answers button {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 1rem;
  }
`;


const Questions = ({questionWithAnswer, checkAnswer, counter, GameEnd}) => {
  return (
    <Container>
    <ClockTimer className="clock_side" reset={counter} GameEnd={GameEnd}/>
      <div className="questions__ques">
        {questionWithAnswer.question_text}
      </div>
      <div className="questions__answers">
        <button
          value={questionWithAnswer.answers[0].answer_id}
          onClick={(id) => {
            checkAnswer(
              id.target.value,
              questionWithAnswer.question_id
            );
          }}
        >
          {questionWithAnswer.answers[0].answer_text}
        </button>
        <button
          value={questionWithAnswer.answers[1].answer_id}
          onClick={(id) => {
            checkAnswer(
              id.target.value,
              questionWithAnswer.question_id
            );
          }}
        >
          {questionWithAnswer.answers[1].answer_text}
        </button>
        <button
          value={questionWithAnswer.answers[2].answer_id}
          onClick={(id) => {
            checkAnswer(
              id.target.value,
              questionWithAnswer.question_id
            );
          }}
        >
          {questionWithAnswer.answers[2].answer_text}
        </button>
        <button
          value={questionWithAnswer.answers[3].answer_id}
          onClick={(id) => {
            checkAnswer(
              id.target.value,
              questionWithAnswer.question_id
            );
          }}
        >
          {questionWithAnswer.answers[3].answer_text}
        </button>
      </div>
    </Container>
  );
};

export default Questions;
