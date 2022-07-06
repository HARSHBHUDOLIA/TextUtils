import React, { useState } from "react";

export default function TextForm(props) {
    const[text,setText]=useState("");
    const handleChange=(event)=>{
           setText(event.target.value);
    }
    const handleUpClick=()=>{
        let text2=text.toUpperCase();
        setText(text2);
    }
    const handleloClick=()=>{
        let text2=text.toLowerCase();
        setText(text2);
      
    }
    const handleclearClick=()=>{
      
      setText("");
    
  }
  const handleSpaces=()=>{
      let k=text.split(/[ ]+/);
      
    setText(k.join(" "));
  
}
  

    const handlecaClick=()=>{
        const words = text.split(" ");
        let ca=[];
        words.forEach(element => { 
            
            ca.push(element[0].toUpperCase() + element.slice(1));  
        });
       
        setText(ca.join(" "));
      
    }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handlecaClick}>Capitalises</button>
      <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>{0.008*(text.split(" ").length)} min read</h2>
        <h1>Preview</h1>
        <p>{text}</p>
    </div>
    </>
  );
}
