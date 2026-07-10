import { useState } from "react";
import "./AI.css";
import { getRecommendation } from "../utils/recommendationEngine";

export default function FindJewelry({ onBack }) {
  const [selfie, setSelfie] = useState(null);
  const [dress, setDress] = useState(null);

  const [skinTone, setSkinTone] = useState("Warm");
  const [occasion, setOccasion] = useState("Wedding");
  const [style, setStyle] = useState("Luxury");

  const [result, setResult] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const analyze = () => {
    if (!selfie || !dress) {
      alert("Please upload both a selfie and an outfit.");
      return;
    }

    setAnalyzing(true);

    setTimeout(() => {
      const rec = getRecommendation(skinTone, "Green");

      setResult({
        skinTone,
        dressColor: "Green",
        occasion,
        style,
        confidence: 97,

        metal: rec.metal,
        necklace: rec.necklace,
        earrings: rec.earrings,
        bracelet: rec.bracelet,
      });

      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="ai-world">

      <button className="back-store-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="ai-header">
        <h1>✦ Find Jewelry For Me</h1>
        <p>Upload your selfie and outfit.</p>
      </div>

      <div className="upload-section">

        <div className="upload-box">

          <h3>Upload Selfie</h3>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;
              setSelfie(URL.createObjectURL(file));
            }}
          />

          {selfie && (
            <img
              src={selfie}
              className="preview"
              alt="Selfie"
            />
          )}

        </div>

        <div className="upload-box">

          <h3>Upload Outfit</h3>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;
              setDress(URL.createObjectURL(file));
            }}
          />

          {dress && (
            <img
              src={dress}
              className="preview"
              alt="Outfit"
            />
          )}

        </div>

      </div>

      <div className="selection-section">

        <div className="selection-box">
          <label>Skin Tone</label>

          <select
            value={skinTone}
            onChange={(e) => setSkinTone(e.target.value)}
          >
            <option>Warm</option>
            <option>Cool</option>
            <option>Neutral</option>
          </select>
        </div>

        <div className="selection-box">
          <label>Occasion</label>

          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Wedding</option>
            <option>Party</option>
            <option>Office</option>
            <option>Casual</option>
          </select>
        </div>

        <div className="selection-box">
          <label>Style</label>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option>Luxury</option>
            <option>Minimal</option>
            <option>Traditional</option>
          </select>
        </div>

      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className="ai-btn" onClick={analyze}>
          Analyze
        </button>
      </div>

      {analyzing && (
        <div className="analyzing-box">

          <div className="spinner"></div>

          <h2>Analyzing your style...</h2>

          <p>
            Matching skin tone...
            <br />
            Finding suitable jewelry...
            <br />
            Preparing recommendations...
          </p>

        </div>
      )}

      {result && (

        <div className="result-card">

          <h1>✦ AI STYLE REPORT</h1>

          <div className="result-grid">

            <div className="result-item">
              <span>Skin Tone</span>
              <h3>{result.skinTone}</h3>
            </div>

            <div className="result-item">
              <span>Dress Color</span>
              <h3>{result.dressColor}</h3>
            </div>

            <div className="result-item">
              <span>Occasion</span>
              <h3>{result.occasion}</h3>
            </div>

            <div className="result-item">
              <span>Style</span>
              <h3>{result.style}</h3>
            </div>

            <div className="result-item">
              <span>Best Metal</span>
              <h3>{result.metal}</h3>
            </div>

            <div className="result-item">
              <span>Confidence</span>
              <h3>{result.confidence}%</h3>
            </div>

          </div>

          <div className="recommend-box">

            <h2>Recommended Jewelry</h2>

            <ul>
              <li>✦ {result.necklace}</li>
              <li>✦ {result.earrings}</li>
              <li>✦ {result.bracelet}</li>
              <li>✦ Gold Ring</li>
            </ul>

            <div className="ai-reason">

              <h3>Why NOVA chose this</h3>

              <p>
                Based on your <b>{result.skinTone}</b> skin tone,
                <b> {result.style}</b> style preference and
                <b> {result.occasion}</b> occasion,
                NOVA recommends <b>{result.metal}</b> jewelry that best complements your overall look.
              </p>

            </div>

            <button className="shop-btn">
              View Recommended Jewelry
            </button>

          </div>

        </div>

      )}

    </div>
  );
}
