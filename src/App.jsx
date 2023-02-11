import { useState } from "react";
import './App.css';

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = button => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    if(result === "error"){
      setResult("");
    }
    else{
      setResult(result.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <div className="buttons">
        <button className="operator" onClick={() => handleClick("C")}>C</button>
        <button className="operator" onClick={() => handleClick("/")}>/</button>
        <button className="operator" onClick={() => handleClick("*")}>x</button>
        <button className="operator" onClick={() => handleClick("CE")}><i className="fa-solid fa-delete-left"></i></button>
        <button className="number" onClick={() => handleClick(7)}>7</button>
        <button className="number" onClick={() => handleClick(8)}>8</button>
        <button className="number" onClick={() => handleClick(9)}>9</button>
        <button className="operator" onClick={() => handleClick("-")}>-</button>
        <button className="number" onClick={() => handleClick(4)}>4</button>
        <button className="number" onClick={() => handleClick(5)}>5</button>
        <button className="number" onClick={() => handleClick(6)}>6</button>
        <button className="operator" onClick={() => handleClick("+")}>+</button>
        <button className="number" onClick={() => handleClick(1)}>1</button>
        <button className="number" onClick={() => handleClick(2)}>2</button>
        <button className="number" onClick={() => handleClick(3)}>3</button>
        <button className="empty" onClick={() => handleClick("0")}>0</button>
        <button className="operator" onClick={() => handleClick(".")}>.</button>
        <button className="equal_operator" onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
