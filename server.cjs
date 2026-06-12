var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var aiClient = null;
function getAiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY" || key.trim() === "") {
      throw new Error("GEMINI_API_KEY is not configured. Please set it in the AI Studio environment secrets.");
    }
    aiClient = new import_genai.GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}
app.post("/api/gemini/explain", async (req, res) => {
  try {
    const { word, category, language } = req.body;
    if (!word) {
      return res.status(400).json({ error: "Missing word parameter" });
    }
    const ai = getAiClient();
    const prompt = `You are a helpful Chinese language teacher (YCT tutor) for kids. 
The user is learning the YCT word: "${word}" which belongs to the category: "${category}".
Answer the user's questions or explain the word shortly and clearly in ${language === "MN" ? "Mongolian or English (with Cyrillic Mongolian focus)" : "English and Chinese"}.
Keep it interactive, cute, use pinyin, and provide exactly 1 simple example sentence with translation.
Limit your reply to 150 words.`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });
    const outputText = response.text || "Sorry, I couldn't write the response.";
    return res.json({ result: outputText });
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    return res.status(500).json({
      error: error.message || "Failed to contact AI Tutor.",
      isConfigError: error.message.includes("GEMINI_API_KEY")
    });
  }
});
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { prompt, currentWord, language } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }
    const ai = getAiClient();
    const systemPrompt = `You are "\u8BCD\u6C47\u5927\u5E08 AI \u52A9\u6559" (Vocabulary Master AI Tutor). Help the user learn Chinese YCT terms. 
Active word under study: "${currentWord || "None"}"
Language response style: Friendly, simple vocabulary for kids, clear Pinyin. Response language: ${language === "MN" ? "Mongolian/English" : "Chinese/English"}.
Keep it very brief (under 120 words).`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${systemPrompt}

User Question: ${prompt}`
    });
    const outputText = response.text || "Sorry, no response available.";
    return res.json({ result: outputText });
  } catch (error) {
    console.error("Gemini API Chat Error:", error.message);
    return res.status(500).json({
      error: error.message || "Chat failed.",
      isConfigError: error.message.includes("GEMINI_API_KEY")
    });
  }
});
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Lexical Master server listening on http://0.0.0.0:${PORT}`);
  });
}
setupVite();
//# sourceMappingURL=server.cjs.map
