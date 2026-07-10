import { useState } from "react";
import "./AI.css";

export default function ChatAI({ onBack }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm NOVA AI ✨\n\nI'm your personal jewelry stylist. Ask me anything about jewelry, gemstones, outfits or styling.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const question = message;

    // Add user's message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I couldn't connect to NOVA AI.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="ai-world">
      <button className="back-store-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="ai-header">
        <h1>✦ Ask NOVA AI</h1>
        <p>Your Personal Jewelry Stylist</p>
      </div>

      <div className="chat-box">
        <div className="chat-history">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user"
                  ? "user-message"
                  : "nova-message"
              }
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="nova-message">
              NOVA is thinking...
            </div>
          )}
        </div>

        <textarea
          placeholder="Example: I have a black dress for a wedding. What jewelry should I wear?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="ai-btn"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>
    </div>
  );
}
