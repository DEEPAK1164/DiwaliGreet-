import React, { useState } from "react";
const App=()=>{
const clr="yellow";
const[bg,setBg]=useState(clr);
const [name,setName]=useState("GIFT!");

const bgChange=()=>{
  //console.log("clicked");
  const newBg="#34495e";
  setBg(newBg);
  setName('Thanks Sbhi Ko!! :💝🤩');
};

const bgBack=()=>{
setBg(clr);
setName("HAPPY DEEPAWALI! :🪔🪔")
};

return(
  <>
<div style={{backgroundColor:bg}}>
<button onMouseOver={bgChange} onMouseOut={bgBack}>{name}</button>
</div>
  </>
);
}
export default App;