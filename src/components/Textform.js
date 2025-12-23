import React,{useState} from 'react'

export default function Textform(props) {
    
    const [text,setText]=useState("Enter text here");
    let words=text.split(" ").length;
    let lines=text.split("\n").length;
    let HandleOnChange=(event)=>{
    setText(event.target.value);
    const newText = event.target.value;
}
    let handleupclick=()=>{
            let tuc=text.toUpperCase();
            setText(tuc);
            words=text.split(" ").length;
            lines=text.split("\n").length;
        }
    let handlelowclick=()=>{
        let tlc=text.toLowerCase();
            setText(tlc);
            words=text.split(" ").length;
            lines=text.split("\n").length;
        }
    
    let handeleonclick=()=>{
        if(text=="Enter text here"){
        let cleartext="";
        setText(cleartext);}
    }
   
  return (
    <div>
      
<div className="mb-3">
    <h2 align="center" style={{color:"#F6F4F3"}}>{props.heading}</h2>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={HandleOnChange} onClick={handeleonclick}></textarea>
</div>
 <div className="container">
    <button type="button" className="btn btn-primary me-3 m-3" onClick={handleupclick}>Convert to UpperCase</button>
    <button type="button" className="btn btn-primary m-3" onClick={handlelowclick}>Convert to LowerCase</button>
    <button type="button" className="btn btn-primary m-3" onClick={() => setText("")}>clear</button>
    <button type="button" className="btn btn-primary m-3" onClick={()=>{navigator.clipboard.writeText(text)}}>Copy</button>
    <button type="button" className="btn btn-primary m-3" onClick={() => setText("lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n ")}>generate text</button>
   
</div>
<div className="container">
    <div className="alert alert-info" role="alert">
    <h2>Your Text Summary</h2>
    <h5>Number of words are {words} ,lines are {lines} and number of characters are {text.length}</h5>
    <h5>time taken to read the text is {words*0.08} minutes</h5>
    <h2>Preview</h2>
    <div><h5 align="center">{text.length>0?text:"No preview available"}</h5></div>
    </div>
</div>
    
    </div>
    
  )
}
