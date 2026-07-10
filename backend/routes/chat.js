import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Body received:", req.body);

    const message = req.body?.message;

    if (!message) {
      return res.status(400).json({
        reply: "No message received.",
      });
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are NOVA AI, the AI stylist of Sparkling Ember.

Help users choose jewelry, gemstones, outfits and fashion accessories.

If the question isn't about jewelry or fashion, politely say you specialize in jewelry styling.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      reply: err.message,
    });
  }
});

export default router;
