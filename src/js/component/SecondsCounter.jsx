import React, { useEffect, useState } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSeconds((e) => e + 1);
    }, 1000);
  }, []);

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

  return (
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
  );
};

export default SecondsCounter;