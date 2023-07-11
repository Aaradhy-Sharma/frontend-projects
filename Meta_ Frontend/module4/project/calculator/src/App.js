import React, { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [inputBgColor, setInputBgColor] = useState("white");

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    setInputBgColor("lightgreen");
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    setInputBgColor("lightgreen");
  }

  function multiply(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    setInputBgColor("lightgreen");
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    setInputBgColor("lightgreen");
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
    setInputBgColor("white");
  }

  function resetResult(e) {
    e.preventDefault();
    setResult((val) => val * 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator by Aaradhy Sharma</h1>
      </div>
      <form>
        <p ref={resultRef} className="resultP">
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Please enter a number"
          style={{ backgroundColor: inputBgColor }}
        />
        <button className="button" onClick={plus}>
          Add
        </button>
        <button className="button" onClick={minus}>
          Subtract
        </button>
        <button className="button" onClick={multiply}>
          Multiply
        </button>
        <button className="button" onClick={divide}>
          Divide
        </button>
        <button className="button" onClick={resetInput}>
          Reset: input
        </button>
        <button className="button" onClick={resetResult}>
          Reset: result
        </button>
      </form>
    </div>
  );
}
