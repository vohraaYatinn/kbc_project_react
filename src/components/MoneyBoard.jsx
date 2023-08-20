import React from "react";
import styled from "styled-components";
import {breakpoint_price} from "../constants/GlobalConstants"

const Container = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  width: 30%;
  position: absolute;
  right: 0rem;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ul {
    color: white;
    list-style: none;
    li {
      margin: 1rem 0rem;

      text-align: center;
      padding: 0.4rem 10rem;
      border: 1px solid transparent;
      border-radius: 10px;
    }
  }
  .top_details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 0.3rem;
    height: 5%;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .money_details {
  }
  .selected{
    background-color: green;
  }
  .startingGame{
    background-color: #ebcb40;
  }
`;
const MoneyBoard = ({money_price, counterQues, gameStart}) => {
  return (
    <Container>
      <div className="top_details">
        <p>Total Earned: ₹ 10000</p>
      </div>

      <div className="money_details">
        <ul>
          {Object.keys(money_price).map((key, val) => {
            if(Object.keys(money_price).length - key === counterQues && counterQues === 0){
              return (
                <li id={key} className="startingGame">
                  ₹ {money_price[Object.keys(money_price).length + 1 - key]}
                </li>
              );
            }
            if(Object.keys(money_price).length + 1 - key === counterQues){
              return (
                <li id={key} className={key in breakpoint_price? "selected breakPoint" : "selected" }>
                  ₹ {money_price[Object.keys(money_price).length + 1 - key]}
                </li>
              );
            }
            return (
              <li id={key} className={key in breakpoint_price? "breakPoint" : "" }>
                ₹ {money_price[Object.keys(money_price).length + 1 - key]}
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default MoneyBoard;
