import { useEffect, useState } from "react";
import "./AI.css";

import FindJewelry from "./FindJewelry";
import VirtualTryOn from "./VirtualTryOn";
import OutfitMatcher from "./OutfitMatcher";
import CompleteLook from "./CompleteLook";
import ChatAI from "./ChatAI";

export default function AIStudio({ onBack }) {

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (page === "find")
    return <FindJewelry onBack={() => setPage("home")} />;

  if (page === "tryon")
    return <VirtualTryOn onBack={() => setPage("home")} />;

  if (page === "outfit")
    return <OutfitMatcher onBack={() => setPage("home")} />;

  if (page === "complete")
    return <CompleteLook onBack={() => setPage("home")} />;

  if (page === "chat")
    return <ChatAI onBack={() => setPage("home")} />;

  if (loading) {
    return (
      <div className="loading-screen">

        <div className="loader-circle"></div>

        <h1>NOVA AI</h1>

        <p>Initializing Luxury Intelligence...</p>

        <div className="progress">
          <div className="progress-fill"></div>
        </div>

      </div>
    );
  }

  return (

<div className="ai-world">

<div className="gold-particles"></div>

<div className="gold-glow glow1"></div>
<div className="gold-glow glow2"></div>

<button
className="back-store-btn"
onClick={onBack}
>

← Return to Store

</button>

<div className="hero">

<div className="hero-left">

<span className="tag">

NOVA AI

</span>

<h1>

Luxury Jewelry
<br />

<span>Intelligence</span>

</h1>

<p>

Experience AI-powered jewelry styling,
virtual try-on and luxury recommendations
crafted uniquely for you.

</p>

<div className="hero-stats">

<div>

<h2>99%</h2>

<p>Accuracy</p>

</div>

<div>

<h2>24/7</h2>

<p>AI Stylist</p>

</div>

<div>

<h2>∞</h2>

<p>Luxury</p>

</div>

</div>

</div>

<div className="hero-right">

<div className="ai-orb">

<div className="ring ring1">
    <span className="spark"></span>
</div>

<div className="ring ring2">
    <span className="spark"></span>
</div>

<div className="ring ring3">
    <span className="spark"></span>
</div>

<div className="core">

✦

</div>

</div>

</div>

</div>

<div className="section-title">

Choose Your AI Experience

</div>

<div className="ai-grid">

<div
className="ai-card"
onClick={() => setPage("find")}
>

<div className="card-number">

01

</div>

<h2>

Find Jewelry

</h2>

<p>

Upload your selfie and outfit to receive
AI-powered jewelry recommendations.

</p>

<div className="card-footer">

Launch →

</div>

</div>

<div
className="ai-card"
onClick={() => setPage("tryon")}
>

<div className="card-number">

02

</div>

<h2>

Virtual Try-On

</h2>

<p>

Preview luxury jewelry on your own photo
before making a decision.

</p>

<div className="card-footer">

Launch →

</div>

</div>

<div
className="ai-card"
onClick={() => setPage("outfit")}
>

<div className="card-number">

03

</div>

<h2>

Outfit Matcher

</h2>

<p>

AI analyzes colors and occasions to
recommend matching jewelry.

</p>

<div className="card-footer">

Launch →

</div>

</div>

<div
className="ai-card"
onClick={() => setPage("complete")}
>

<div className="card-number">

04

</div>

<h2>

Complete Look

</h2>

<p>

Generate a complete luxury jewelry set
tailored specifically for your style.

</p>

<div className="card-footer">

Launch →

</div>

</div>

<div
className="ai-card wide"
onClick={() => setPage("chat")}
>

<div className="card-number">

05

</div>

<h2>

Ask NOVA AI

</h2>

<p>

Talk directly with your AI luxury stylist
for recommendations, trends and guidance.

</p>

<div className="card-footer">

Start Conversation →

</div>

</div>

</div>

<div className="bottom-banner">

<div>

Luxury AI Powered

</div>

<div>

Premium Styling

</div>

<div>

Virtual Try-On

</div>

<div>

Exclusive Recommendations

</div>

</div>

</div>

  );
}
