require("dotenv").config({ path: ".env.local" });

const { createClient } = require("@deepgram/sdk");

async function test() {
  const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);

  try {
    const response = await deepgram.speak.request(
      { text: "Hello from Deepgram" },
      {
        model: "aura-2-thalia-en",
        encoding: "mp3",
      }
    );

    console.log(response);
  } catch (e) {
    console.error(e);
  }
}

test();