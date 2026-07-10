import { useState } from "react";
import "./AI.css";

export default function CompleteLook({ onBack }) {
  const [loading, setLoading] = useState(false);
  const [look, setLook] = useState(null);

  function generateLook() {
    setLoading(true);

    setTimeout(() => {
      setLook({
        metal: "18K Gold",
        necklace: "Emerald Pendant Necklace",
        earrings: "Gold Emerald Studs",
        bracelet: "Luxury Gold Bracelet",
        ring: "Emerald Solitaire Ring",
        watch: "Classic Gold Watch",
      });

      setLoading(false);
    }, 2500);
  }

  return (
    <div className="ai-world">

      <button className="back-store-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="ai-header">
        <h1>✨ Complete My Look</h1>
        <p>NOVA creates a complete jewelry look for you.</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button className="ai-btn" onClick={generateLook}>
          Generate Look
        </button>
      </div>

      {loading && (
        <div className="analyzing-box">
          <div className="spinner"></div>

          <h2>Building your complete look...</h2>

          <p>
            Selecting jewelry...
            <br />
            Matching accessories...
            <br />
            Finalizing your style...
          </p>
        </div>
      )}

      {look && (
        <div className="look-grid">

          <div className="look-card">
            <h3>📿 Necklace</h3>
            <p>{look.necklace}</p>
          </div>

          <div className="look-card">
            <h3>👂 Earrings</h3>
            <p>{look.earrings}</p>
          </div>

          <div className="look-card">
            <h3>💍 Ring</h3>
            <p>{look.ring}</p>
          </div>

          <div className="look-card">
            <h3>✨ Bracelet</h3>
            <p>{look.bracelet}</p>
          </div>

          <div className="look-card">
            <h3>⌚ Watch</h3>
            <p>{look.watch}</p>
          </div>

          <div className="look-card">
            <h3>⭐ Best Metal</h3>
            <p>{look.metal}</p>
          </div>

        </div>
      )}

    </div>
  );
}
