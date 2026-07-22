import { NextResponse } from "next/server";

import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(
  process.env.NEXT_PUBLIC_CONVEX_URL
);
import path from "path";
import fs from "fs";

import { bundle } from "@remotion/bundler";
import {
  selectComposition,
  renderMedia,
} from "@remotion/renderer";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Render API is working!",
  });
}

export async function POST(req) {
  try {
    const { videoData } = await req.json();

    if (!videoData) {
      return NextResponse.json(
        {
          success: false,
          error: "videoData is required",
        },
        { status: 400 }
      );
    }

    console.log("========== STARTING RENDER ==========");
    console.log(videoData._id);

    // Convert relative local assets to absolute URLs so Remotion's headless browser can fetch them
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const absoluteImages = videoData.images.map((img) =>
      img.startsWith("http") ? img : `${baseUrl}${img}`
    );

    const absoluteAudioUrl = videoData.audioUrl && videoData.audioUrl.startsWith("http")
      ? videoData.audioUrl
      : `${baseUrl}${videoData.audioUrl}`;

    const processedVideoData = {
      ...videoData,
      images: absoluteImages,
      audioUrl: absoluteAudioUrl,
    };

    // Bundle the Remotion project
    const bundleLocation = await bundle({
      entryPoint: path.join(process.cwd(), "remotion/index.js"),
    });

    console.log("Bundle created:", bundleLocation);

    // Select composition with processed absolute URLs
    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: "youtubeShort",
      inputProps: {
        videoData: processedVideoData,
      },
    });

    // Ensure output folder exists
    const outputDir = path.join(process.cwd(), "public", "videos");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, {
        recursive: true,
      });
    }

    const outputLocation = path.join(
      outputDir,
      `${videoData._id}.mp4`
    );

    console.log("Rendering to:", outputLocation);

    // Render video with processed absolute URLs
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation,
      inputProps: {
        videoData: processedVideoData,
      },
    });

    console.log("========== RENDER COMPLETE ==========");
    await convex.mutation(api.videoData.UpdateDownloadUrl, {
      recordId: videoData._id,
      downloadUrl: `/videos/${videoData._id}.mp4`,
    });

    return NextResponse.json({
      success: true,
      downloadUrl: `/videos/${videoData._id}.mp4`,
    });
  } catch (err) {
    console.error("========== RENDER ERROR ==========");
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}