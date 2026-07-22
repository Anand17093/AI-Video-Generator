import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// This model is currently working
const MODEL = "models/gemini-3.1-flash-lite";

async function callGemini(promptText) {
  const result = await ai.models.generateContent({
    model: MODEL,
    contents: promptText,
    config: {
      responseMimeType: "application/json",
    },
  });

  const text =
    result.text ||
    result.response?.text?.() ||
    result.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
}

export async function generateScripts(promptText) {
  try {
    const text = await callGemini(promptText);

    console.log("GenerateScripts raw result:", text);

    return text;
  } catch (err) {
    console.error("🚨 Gemini API error:", err);
    throw err;
  }
}

export async function generateImageScripts(promptText) {
  try {
    const text = await callGemini(promptText);

    console.log("GenerateImageScripts raw result:", text);

    // Gemini sometimes wraps JSON inside ```json ... ```
    const jsonText =
      text.match(/```json\s*([\s\S]*?)```/)?.[1] ?? text;

    return JSON.parse(jsonText.trim());
  } catch (err) {
    console.error("🚨 Gemini Image Error:", err);
    throw err;
  }
}