import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI client lazily (so it does not crash on startup if key is missing)
let aiClient: GoogleGenAI | null = null;
function getAiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY" || key.trim() === "") {
      throw new Error("GEMINI_API_KEY is not configured. Please set it in the AI Studio environment secrets.");
    }
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

// 1. Safe explanation endpoint from Gemini AI (Proxying client requests)
app.post("/api/gemini/explain", async (req, res) => {
  try {
    const { word, category, language } = req.body;
    if (!word) {
      return res.status(400).json({ error: "Missing word parameter" });
    }

    const ai = getAiClient();
    
    const prompt = `You are a helpful Chinese language teacher (YCT tutor) for kids. 
The user is learning the YCT word: "${word}" which belongs to the category: "${category}".
Answer the user's questions or explain the word shortly and clearly in ${language === 'MN' ? 'Mongolian or English (with Cyrillic Mongolian focus)' : 'English and Chinese'}.
Keep it interactive, cute, use pinyin, and provide exactly 1 simple example sentence with translation.
Limit your reply to 150 words.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const outputText = response.text || "Sorry, I couldn't write the response.";
    return res.json({ result: outputText });
  } catch (error: any) {
    console.error("Gemini API Error:", error.message);
    return res.status(500).json({ 
      error: error.message || "Failed to contact AI Tutor.",
      isConfigError: error.message.includes("GEMINI_API_KEY")
    });
  }
});

// 2. Custom prompt endpoint for active child conversations with AI tutor
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { prompt, currentWord, language } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const ai = getAiClient();
    const systemPrompt = `You are "词汇大师 AI 助教" (Vocabulary Master AI Tutor). Help the user learn Chinese YCT terms. 
Active word under study: "${currentWord || 'None'}"
Language response style: Friendly, simple vocabulary for kids, clear Pinyin. Response language: ${language === 'MN' ? 'Mongolian/English' : 'Chinese/English'}.
Keep it very brief (under 120 words).`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${systemPrompt}\n\nUser Question: ${prompt}`,
    });

    const outputText = response.text || "Sorry, no response available.";
    return res.json({ result: outputText });
  } catch (error: any) {
    console.error("Gemini API Chat Error:", error.message);
    return res.status(500).json({ 
      error: error.message || "Chat failed.",
      isConfigError: error.message.includes("GEMINI_API_KEY")
    });
  }
});

// App health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// 3. Vite development vs Production asset serving
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Lexical Master server listening on http://0.0.0.0:${PORT}`);
  });
}

setupVite();
