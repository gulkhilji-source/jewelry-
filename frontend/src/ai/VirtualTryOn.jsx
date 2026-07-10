import "./AI.css";

import { useRef, useState } from "react";
import { getFaceDetector } from "../utils/faceDetection";

export default function VirtualTryOn({ onBack }) {

  const [photo, setPhoto] = useState(null);
  const [necklace, setNecklace] = useState("/necklace1.png");
  const [size, setSize] = useState(180);
  const [height, setHeight] = useState(42);
  const imageRef = useRef(null);
  const [faceBox, setFaceBox] = useState(null);


  const detectFace = async () => {
  try {
    console.log("Image loaded");

    await imageRef.current.decode();

    console.log(
      "Image size:",
      imageRef.current.naturalWidth,
      imageRef.current.naturalHeight
    );

    const detector = await getFaceDetector();
    console.log("Detector loaded");

    const result = detector.detect(imageRef.current);

    console.log("Detection result:", result);

    if (result.detections.length > 0) {
      console.log(result.detections[0].boundingBox);
      setFaceBox(result.detections[0].boundingBox);
    } else {
      alert("No face detected.");
    }
  } catch (err) {
    console.error("Face Detection Error:", err);
  }
};
  return (

    <div className="ai-world">

      <button className="back-store-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="ai-header">
        <h1>Virtual Try-On</h1>
        <p>Preview jewelry on your photo.</p>
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

<img src="/necklace1.png" width="150" />

      <div className="tryon-container">

        {photo && (

          <div className="photo-box">

  <img
  ref={imageRef}
  src={photo}
  className="person-photo"
  alt=""
  onLoad={detectFace}
/>

  {necklace && faceBox && (
  <img
    src={necklace}
    className="necklace-overlay"
    alt=""
    style={{
      left: faceBox.originX + faceBox.width * 0.18,
      top: faceBox.originY + faceBox.height * (height / 100),
      width: size,
    }}
  />
)}

</div>

        )}

      </div>

      <div className="necklace-list">

  <img
    src="/necklace1.png"
    alt=""
    onClick={() => setNecklace("/necklace1.png")}
  />

  <img
    src="/necklace2.png"
    alt=""
    onClick={() => setNecklace("/necklace2.png")}
  />

  <img
    src="/necklace3.png"
    alt=""
    onClick={() => setNecklace("/necklace3.png")}
  />

</div>

<div className="controls">

  <label>Necklace Size</label>

  <input
    type="range"
    min="100"
    max="260"
    value={size}
    onChange={(e)=>setSize(Number(e.target.value))}
  />

  <label>Position</label>

  <input
    type="range"
    min="25"
    max="60"
    value={height}
    onChange={(e)=>setHeight(Number(e.target.value))}
  />

</div>

    </div>


  );
}
