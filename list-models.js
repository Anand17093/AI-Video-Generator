require("dotenv").config({ path: ".env.local" });

const { GoogleGenAI } = require("@google/genai");

(async () => {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const models = await ai.models.list();

    for await (const model of models) {
      console.log(model.name);
    }
  } catch (err) {
    console.error(err);
  }
})();