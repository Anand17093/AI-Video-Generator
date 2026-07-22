// // // import { generateScripts } from "@/app/configs/AiModel";

// // // const SCRIPT_PROMPT=`write two different scripts for 30 seconds video on Topic :{topic},
// // // DO not add Scene description
// // // Do not add Anything in Braces, Just return the plain story in text
// // // Give me the response in json format and follow the schema
// // // {
// // // scripts:[
// // // {
// // // content:"
// // // },
// // // },
// // // ]`

// // // export async function POST(req){
// // //     const {topic}=await req.json();

// // //     const PROMPT=SCRIPT_PROMPT.replace('{topic',topic);
// // //     const result = generateScripts.sendMessage(PROMPT);
// // //     const resp = result?.response?.text();

// // //     return Nextresponse.json(JSON.parse(resp));
// // // }

// // // import { generateScripts } from "@/app/configs/AiModel";
// // // import { NextResponse } from "next/server";

// // // const SCRIPT_PROMPT = `write two different scripts for 30 seconds video on Topic: {topic}
// // // Do not add Scene descriptions.
// // // Do not add Anything in Braces.
// // // Just return the plain story in text.

// // // Give me the response in JSON format and follow the schema:
// // // {
// // //   "scripts": [
// // //     { "content": "..." },
// // //     { "content": "..." }
// // //   ]
// // // }
// // // `;

// // // export async function POST(req) {
// // //   try {
// // //     const { topic } = await req.json();
// // //     const prompt = SCRIPT_PROMPT.replace("{topic}", topic);

// // //     const result = await generateScripts(prompt);
    
// // //     // This should be a JSON string — let's safely parse it
// // //     const parsed = JSON.parse(result);

// // //     return NextResponse.json(parsed);
// // //   } catch (error) {
// // //     console.error("Route error:", error.message);
// // //     return NextResponse.json({ error: error.message }, { status: 500 });
// // //   }
// // // }
// // import { generateScripts } from "@/app/configs/AiModel";
// // import { NextResponse } from "next/server";

// // const SCRIPT_PROMPT = `write two different scripts for 30 seconds video on Topic: {topic}
// // Do not add Scene descriptions.
// // Do not add Anything in Braces.
// // Just return the plain story in text.

// // Give me the response in JSON format and follow the schema:
// // {
// //   "scripts": [
// //     { "content": "..." },
// //     { "content": "..." }
// //   ]
// // }
// // `;

// // export async function POST(req) {
// //   try {
// //     const { topic } = await req.json();

// //     const prompt = SCRIPT_PROMPT.replace("{topic}", topic);

// //     const result = await generateScripts(prompt); // await this!
// //     const json = JSON.parse(result); // might throw

// //     return NextResponse.json(json);
// //   } catch (error) {
// //     console.error("Route Error:", error.message);
// //     return NextResponse.json({ error: error.message }, { status: 500 });
// //   }
// // }

import { generateScripts } from "@/app/configs/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `write two different scripts for 30 seconds video on Topic: {topic}
Do not add Scene descriptions.
Do not add Anything in Braces.
Just return the plain story in text.

Give me the response in JSON format and follow the schema:
{
  "scripts": [
    { "content": "..." },
    { "content": "..." }
  ]
}
`;

export async function POST(req) {
  try {
    const { topic } = await req.json();
    const prompt = SCRIPT_PROMPT.replace("{topic}", topic);

    const result = await generateScripts(prompt);
    console.log("GenerateScripts raw result:", result);

    let json = typeof result === "string" ? JSON.parse(result) : result;

    return NextResponse.json(json);
  } catch (error) {
    console.error("Route Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// import { generateScripts } from "@/app/configs/AiModel";
// import { NextResponse } from "next/server";

// const SCRIPT_PROMPT = `write two different scripts for 30 seconds video on Topic: {topic}
// Do not add Scene descriptions.
// Do not add Anything in Braces.
// Just return the plain story in text.

// Give me the response in JSON format and follow the schema:
// {
//   "scripts": [
//     { "content": "..." },
//     { "content": "..." }
//   ]
// }
// `;

// export async function POST(req) {
//   try {
//     const { topic } = await req.json();
//     const prompt = SCRIPT_PROMPT.replace("{topic}", topic);

//     // call AI model
//     const result = await generateScripts(prompt);
//     console.log("Raw AI result:", result);

//     // normalize result
//     let text = typeof result === "string" ? result : result?.response?.text?.() || "";
    
//     // clean: extract JSON part only
//     const jsonMatch = text.match(/\{[\s\S]*\}/);
//     if (!jsonMatch) throw new Error("AI did not return valid JSON");

//     const parsed = JSON.parse(jsonMatch[0]);

//     return NextResponse.json(parsed);
//   } catch (error) {
//     console.error("Route Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
