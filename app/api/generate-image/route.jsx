import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { input } = await req.json();

    const imageUrl =
      `https://image.pollinations.ai/prompt/${encodeURIComponent(input)}?width=1024&height=1024&nologo=true`;

    return NextResponse.json({
      image: imageUrl,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}