import { createClient } from "@deepgram/sdk";
import fs from "fs";
import path from "path";

const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);

export async function generateSpeech(text, fileName) {
  const response = await deepgram.speak.request(
    { text },
    {
      model: "aura-2-thalia-en",
      encoding: "mp3",
    }
  );

  const stream = await response.getStream();

  if (!stream) {
    throw new Error("Deepgram returned no audio stream.");
  }

  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  const audioBuffer = Buffer.concat(chunks);

  const audioDir = path.join(process.cwd(), "public", "audio");

  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  const outputPath = path.join(audioDir, `${fileName}.mp3`);

  fs.writeFileSync(outputPath, audioBuffer);

return {
  localPath: outputPath,
  publicUrl: `/audio/${fileName}.mp3`,
};
}