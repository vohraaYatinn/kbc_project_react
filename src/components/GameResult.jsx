import React from "react";
import styled from "styled-components";
import img from "../assets/success.png";

//css
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  .main {
    width: 50%;
    padding: 1rem;
    border: 3px solid white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    position: absolute;
    top: 20%;
  }
  .main img {
    height: 50%;
    width: 50%;
  }
`;
const GameResult = ({ moneyEarned }) => {
  return (
    <Container>
      <div className="main">
        <img src={img} alt="" />
        <p>You Won!!</p>
        <p>₹ {moneyEarned} /-</p>
      </div>
    </Container>
  );
};

export default GameResult;
