require("dotenv").config({ path: ".env.local" });

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function test(model) {
  try {
    const result = await ai.models.generateContent({
      model,
      contents: "Reply with only the word OK",
    });

    console.log(model, "✅", result.text);
  } catch (e) {
    console.log(model, "❌", e.status, e.message);
  }
}

(async () => {
  await test("models/gemini-3.5-flash");
  await test("models/gemini-3.1-flash-lite");
  await test("models/gemini-flash-latest");
  await test("models/gemini-2.5-flash");
})();