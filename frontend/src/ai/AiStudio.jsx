import { useEffect, useState } from "react";
import "./AI.css";
import FindJewelry from "./FindJewelry";
import VirtualTryOn from "./VirtualTryOn";
import ChatAI from "./ChatAI";
import CompleteLook from "./CompleteLook";
import OutfitMatcher from "./OutfitMatcher";

export default function AIStudio({ onBack }) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (page === "find") {
  return <FindJewelry onBack={() => setPage("home")} />;
}

  if (page === "tryon") {
  return <VirtualTryOn onBack={() => setPage("home")} />;
}

if(page==="outfit"){
   return <OutfitMatcher onBack={()=>setPage("home")} />;
}

  if(page==="chat"){
    return <ChatAI onBack={()=>setPage("home")} />;
}

if (page === "complete") {
  return <CompleteLook onBack={() => setPage("home")} />;
}

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-box">
          <h1>✦ NOVA AI</h1>

          <p>Initializing AI Stylist...</p>

          <div className="progress">
            <div className="progress-fill"></div>
          </div>

          <span>Loading Vision Engine...</span>
        </div>
      </div>
    );
  }


  return (
    
    <div className="ai-world">

      <button className="back-store-btn" onClick={onBack}>
        ← Return to Store
      </button>

<div className="stars">

<span></span>
<span></span>
<span></span>
<span></span>
<span></span>

</div>

<div className="welcome-box">
    <h3> Welcome to NOVA AI</h3>

    <p>
        Analyze your style, try jewelry virtually,
        match your outfit and discover the perfect look.
    </p>
</div>

      <div className="ai-header">
        <h1> ✦ NOVA AI STUDIO</h1>
        <p>Your Personal AI Jewelry Stylist</p>
      </div>

      <div className="ai-grid">

  <div className="ai-card">
    <h2> Find Jewelry For Me</h2>

    <p>
      Upload your selfie and outfit to get AI-powered
      jewelry recommendations.
    </p>

    <button
      className="ai-btn"
      onClick={() => setPage("find")}
    >
      Launch AI
    </button>
  </div>

  <div className="ai-card">
    <h2> Virtual Try-On</h2>

    <p>Try jewelry on your own photo.</p>

    <button
  className="ai-btn"
  onClick={() => setPage("tryon")}
>
  Launch AI
</button>
  </div>

  <div className="ai-card">
    <h2> Outfit Matcher</h2>

    <p>Match jewelry with your dress color.</p>

    <button
className="ai-btn"
onClick={()=>setPage("outfit")}
>
Launch AI
</button>
  </div>

<div className="ai-card">

    <h2> Ask NOVA AI</h2>

    <p>
        Get instant jewelry advice from your AI stylist.
    </p>

    <button
        className="ai-btn"
        onClick={()=>setPage("chat")}
    >
        Launch AI
    </button>

</div>

  <div className="ai-card">
    <h2> Complete My Look</h2>

    <p>Get a complete jewelry set chosen by AI.</p>

    <button
  className="ai-btn"
  onClick={() => setPage("complete")}
>
  Launch AI
</button>
  </div>

</div>

    </div>
  );
}

