import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);

    /*let newText = event.target.value.toLowerCase();
    setText(newText);                                           to make all letter to lowercase automatically*/
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCapitalise = () => {
  
    let newText = text.charAt().toUpperCase()+ text.slice(1);
    setText(newText);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnchange}
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Uppercase Letter
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLowClick}
        >
          Lowercase Letter
        </button> 
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary mx-2"
        >
          Clear All
        </button>

        <button type="button" className="btn btn-primary mx-2 " onClick={handleCapitalise}>Capitalise</button>
      </div>
      <div className="container">
        <h2>Word Calculation</h2>
        <p>
          {text.split(" ").length} Word {text.length} letter
        </p>
        <p>{0.008 * text.split(" ").length} Minute to read</p>
      </div>
    </>
  );
}
