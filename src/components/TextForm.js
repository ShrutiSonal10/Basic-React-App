import React, { useState } from "react";

export default function TextForm(props) {
const handleUpClick= ()=>{
    console.log("UpperCase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
}
const handleOnChange= (event)=>{
    console.log("On Change");
    setText(event.target.value);
}
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <label htmlFor="myBox" class="form-label">
          Example textarea
        </label>
        <textarea className="form-control" value = {text} id="myBox" rows="10" onChange = {handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick = {handleUpClick}>Convert To UpperCase</button>
    </>
  );
}
