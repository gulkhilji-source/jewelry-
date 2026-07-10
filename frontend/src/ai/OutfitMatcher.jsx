import { useState } from "react";
import "./AI.css";

export default function OutfitMatcher({ onBack }) {

  const [photo,setPhoto]=useState(null);

  const [color,setColor]=useState("Black");

  const [result,setResult]=useState(null);

  function analyze(){

    setTimeout(()=>{

      let metal="Gold";
      let gemstone="Diamond";

      if(color==="Green"){
        metal="Gold";
        gemstone="Emerald";
      }

      if(color==="Blue"){
        metal="Silver";
        gemstone="Sapphire";
      }

      if(color==="Red"){
        metal="Gold";
        gemstone="Ruby";
      }

      if(color==="White"){
        metal="Pearl";
        gemstone="Pearl";
      }

      setResult({
        metal,
        gemstone,
        color
      });

    },2000);

  }

  return(

<div className="ai-world">

<button className="back-store-btn" onClick={onBack}>
← Back
</button>

<div className="ai-header">

<h1>Outfit Matcher</h1>

<p>Match jewelry with your outfit.</p>

</div>

<input

type="file"

accept="image/*"

onChange={(e)=>{

const file=e.target.files[0];

if(file)

setPhoto(URL.createObjectURL(file));

}}

/>

{photo &&

<img

src={photo}

className="preview"

/>

}

<div className="selection-box">

<label>Detected Outfit Color</label>

<select

value={color}

onChange={(e)=>setColor(e.target.value)}

>

<option>Black</option>

<option>White</option>

<option>Blue</option>

<option>Green</option>

<option>Red</option>

</select>

</div>

<div style={{textAlign:"center",marginTop:"25px"}}>

<button

className="ai-btn"

onClick={analyze}

>

Analyze Outfit

</button>

</div>

{result &&

<div className="result-card">

<h2>AI Recommendation</h2>

<p><b>Dress:</b> {result.color}</p>

<p><b>Best Metal:</b> {result.metal}</p>

<p><b>Gemstone:</b> {result.gemstone}</p>

<button className="shop-btn">

View Matching Jewelry

</button>

</div>

}

</div>

  );

}
