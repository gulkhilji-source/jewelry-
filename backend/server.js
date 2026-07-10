import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.js";
import productRoutes from "./routes/products.js";

dotenv.config();
console.log("ENV:", process.env.GROQ_API_KEY);

import db from "./db.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("NOVA AI Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
