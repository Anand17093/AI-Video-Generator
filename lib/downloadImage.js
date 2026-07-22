import axios from "axios";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

export async function downloadImage(imageUrl) {
  const response = await axios({
    url: imageUrl,
    method: "GET",
    responseType: "arraybuffer",
  });

  const fileName = `${uuid()}.png`;

  const folder = path.join(process.cwd(), "public", "images");

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const filePath = path.join(folder, fileName);

  fs.writeFileSync(filePath, response.data);

  return {
    localPath: filePath,
    publicUrl: `/images/${fileName}`,
  };
}