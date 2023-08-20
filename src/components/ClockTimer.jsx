import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

//css
const Container = styled.div`
  font-size: 3rem;
  text-align: center;
  position: relative;
  left: 0rem;
  bottom: 1.5rem;
  z-index: 1;
  .clock_time {
    padding: 1.5rem;
    border: 2px solid white;
    color: white;
    border-radius: 50px;
  }
  .hidden {
    display: none !important;
  }
`;

const ClockTimer = ({ reset, GameEnd }) => {
  //use State and ref
  const [clock, setClock] = useState(reset);
  const [timeValue, setTimeValue] = useState(30);
  const timercounter = useRef(0);
  const flag = useRef(false);

  //functions
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const resetClock = () => {
    setTimeValue(30);
    timercounter.current = 0;
    changeValueTime();
  };
  const changeValueTime = async () => {
    for (
      timercounter.current;
      timercounter.current < 31;
      timercounter.current = timercounter.current + 1
    ) {
      if (timercounter.current >= 30) {
        GameEnd();
      }
      if (clock !== reset) {
        break;
      }
      await sleep(1 * 1000);
      setTimeValue((prevTime) => prevTime - 1);
    }
  };

  //use Effects
  useEffect(() => {
    if (flag.current) {
      changeValueTime();
      flag.current = false;
    }
    flag.current = true;
    if (clock !== reset) {
      resetClock();
      setClock(reset);
    }
  }, [reset]);

  return (
    <Container>
      <div
        className={
          timercounter.current > -1 ? "clock_time" : "clock_time hidden"
        }
      >
        {timercounter.current > 20 ? <>0</> : <></>}
        {30 - timercounter.current}
      </div>
    </Container>
  );
};

export default ClockTimer;
