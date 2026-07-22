require("dotenv").config({ path: ".env.local" });

const { deploySite } = require("@remotion/cloudrun");

async function deploy() {
  const { serveUrl } = await deploySite({
    entryPoint: "./remotion/index.js",
    region: "us-east1",
    bucketName: "remotioncloudrun-3aza4kppaf",
  });

  console.log("\n==============================");
  console.log("SERVE URL:");
  console.log(serveUrl);
  console.log("==============================\n");
}

deploy().catch(console.error);