import React, { useEffect, useState } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let myInterval;

    if (isActive) {
      myInterval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(myInterval);
  }, [isActive]);

  let numberOne = seconds;
  let numberTwo = 0;
  let numberThree = 0;
  let numberFour = 0;
  let numberFive = 0;
  let numberSix = 0;
  if (numberOne === 10) {
    numberOne = 0;
    numberTwo++;
  }
  if (numberTwo === 10) {
    numberTwo = 0;
    numberThree++;
  }
  if (numberThree === 10) {
    numberThree = 0;
    numberFour++;
  }
  if (numberFour === 10) {
    numberFour = 0;
    numberFive++;
  }
  if (numberFive === 10) {
    numberFive = 0;
    numberSix++;
  }

  const startClock = () => {
    if (numberOne !== 0) {
      return alert(
        "You can´t start if counter is > 1. If you want to start over please stop it first."
      );
    }
    setIsActive(true);
  };
  const pauseClock = () => {
    if (numberOne === 0) {
      return alert("You can´t pause it if you don´t start it first.");
    }
    setIsActive(false);
  };
  const resumeClock = () => {
    if (numberOne === 0) {
      return alert("You need to start it first.");
    }
    setIsActive(true);
  };
  const stopTheClock = () => {
    if (numberOne === 0) {
      return alert("You can´t stop what is not started.");
    }
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <>
      <div className="bg-black text-white d-flex justify-content-center">
        <div className="bg-dark mx-3">
          <p className="fs-1">🕘</p>
        </div>
        <div className="bg-dark mx-3">
          <p className="fs-1">{numberSix}</p>
        </div>
        <div className="bg-dark mx-3">
          <p className="fs-1">{numberFive}</p>
        </div>
        <div className="bg-dark mx-3">
          <p className="fs-1">{numberFour}</p>
        </div>
        <div className="bg-dark mx-3">
          <p className="fs-1">{numberThree}</p>
        </div>
        <div className="bg-dark mx-3">
          <p className="fs-1">{numberTwo}</p>
        </div>
        <div className="bg-dark mx-3">
          <p className="fs-1">{numberOne}</p>
        </div>
      </div>
      <div className="text-center m-5">
        <button onClick={startClock} className="btn btn-success m-1">
          Start the clock
        </button>
        <button onClick={pauseClock} className="btn btn-secondary m-1">
          Pause the clock
        </button>
        <button onClick={resumeClock} className="btn btn-primary m-1">
          Resume the clock
        </button>
        <button onClick={stopTheClock} className="btn btn-danger m-1">
          Stop the clock
        </button>
      </div>
    </>
  );
};

export default SecondsCounter;
