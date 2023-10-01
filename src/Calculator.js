import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [sum, setSum] = useState("");

  const handleClick = () => {
    setSum("");
  };

  const erase = () => {
    setSum((prev) => {
      const prevString = String(prev);
      return prevString.slice(0, -1);
    });
  };

  const handleButtonClick = (value) => {
    if (value === "00" && sum === "0") {
      setSum("00");
    } else {
      setSum((prev) => prev + value);
    }
  };

  const handleChange = (event) => {
    setSum(event.target.value);
  };

  const handleCalculate = () => {
    try {
      const sanitizedExpression = sum
        .replace(/00/g, "0")
        .replace(/÷/g, "/")
        .replace(/×/g, "*");
      setSum(eval(sanitizedExpression).toString());
    } catch (error) {
      setSum("Invalid Input");
    }
  };

  return (
    <>
      <div className="calc">Calculator 🖩</div>
      <div className="container">
        <form className="output">
          <input
            className="result"
            placeholder="type..."
            onChange={handleChange}
            value={sum}
          ></input>
        </form>
        <div className="keypad">
          <button className="clear col" onClick={handleClick}>
            AC
          </button>
          <button className="clear col" onClick={erase}>
            C
          </button>
          <button className="clear col" onClick={() => handleButtonClick("/")}>
            ÷
          </button>
          <button className="clear col" onClick={() => handleButtonClick("*")}>
            ×
          </button>

          <button className="clear" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button className="clear" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button className="clear" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button className="clear col" onClick={() => handleButtonClick("-")}>
            −
          </button>

          <button className="clear" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button className="clear" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button className="clear" onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button className="clear col" onClick={() => handleButtonClick("+")}>
            +
          </button>

          <button className="clear" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button className="clear" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button className="clear" onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button className="clear col grr" onClick={handleCalculate}>
            =
          </button>
          <button className="clear" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button className="clear" onClick={() => handleButtonClick(".")}>
            .
          </button>

          <button className="clear" onClick={() => handleButtonClick("0")}>
            0
          </button>

          <button className="clear" onClick={() => handleButtonClick("00")}>
            00
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
