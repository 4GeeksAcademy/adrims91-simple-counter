import React, { useEffect, useState } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [numberFour, setNumberFour] = useState(0);
  const [numberFive, setNumberFive] = useState(0);
  const [numberSix, setNumberSix] = useState(0);

  useEffect(() => {
    let myInterval;

    if (isActive) {
      myInterval = setInterval(() => {
        setSeconds((prev) => {
          const newSeconds = prev + 1;

          setNumberOne(newSeconds % 10);
          setNumberTwo(Math.floor(newSeconds / 10) % 10);
          setNumberThree(Math.floor(newSeconds / 100) % 10);
          setNumberFour(Math.floor(newSeconds / 1000) % 10);
          setNumberFive(Math.floor(newSeconds / 10000) % 10);
          setNumberSix(Math.floor(newSeconds / 100000) % 10);

          return newSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(myInterval);
  }, [isActive]);

  if (numberOne === 10) {
    setNumberOne(0);
    setNumberTwo + 1;
  }
  if (numberTwo === 10) {
    setNumberTwo(0);
    setNumberThree + 1;
  }
  if (numberThree === 10) {
    setNumberThree(0);
    setNumberFour + 1;
  }
  if (numberFour === 10) {
    setNumberFour(0);
    setNumberFive + 1;
  }
  if (numberFive === 10) {
    setNumberFive(0);
    setNumberSix + 1;
  }

  const startClock = () => {
    if (seconds !== 0) {
      const clockInput = prompt(
        "The clock is running, do you want to start over? Y/N"
      );
      if (clockInput.toLowerCase() === "y") {
        setSeconds(0);
        setNumberOne(0);
        setNumberTwo(0);
        setNumberThree(0);
        setNumberFour(0);
        setNumberFive(0);
        setNumberSix(0);
      }
    }
    setIsActive(true);
  };
  const pauseClock = () => {
    if (seconds === 0) {
      return alert("Clock is not started.");
    }
    setIsActive(false);
  };
  const resumeClock = () => {
    if (seconds === 0) {
      return alert("Clock is not started.");
    }
    setIsActive(true);
  };
  const stopTheClock = () => {
    if (seconds === 0) {
      return alert("Clock is not started.");
    }
    setIsActive(false);
    setSeconds(0);
    setNumberOne(0);
    setNumberTwo(0);
    setNumberThree(0);
    setNumberFour(0);
    setNumberFive(0);
    setNumberSix(0);
  };

  return (
    <>
      <div className="row bg-black text-white d-flex justify-content-center">
        <div className="col-12 col-md-1 text-center align-content-center bg-dark mx-3">
          <i className="fa-regular fa-clock fa-9x"></i>
        </div>
        <div className="col-12 col-md-1 text-center bg-dark mx-3">
          <p className="fs-1">{numberSix}</p>
        </div>
        <div className="col-12 col-md-1 text-center bg-dark mx-3">
          <p className="fs-1">{numberFive}</p>
        </div>
        <div className="col-12 col-md-1 text-center bg-dark mx-3">
          <p className="fs-1">{numberFour}</p>
        </div>
        <div className="col-12 col-md-1 text-center bg-dark mx-3">
          <p className="fs-1">{numberThree}</p>
        </div>
        <div className="col-12 col-md-1 text-center bg-dark mx-3">
          <p className="fs-1">{numberTwo}</p>
        </div>
        <div className="col-12 col-md-1 text-center bg-dark mx-3">
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
