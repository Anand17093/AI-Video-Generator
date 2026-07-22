// import axios from "axios";
// import { inngest } from "./client";
// import { createClient } from "@deepgram/sdk";
// import { generateImageScripts } from "@/app/configs/AiModel";
// import { ConvexHttpClient } from "convex/browser";
// import { api } from "@/convex/_generated/api";
// import { generateSpeech } from "@/lib/deepgramTTS";
// import { downloadImage } from "@/lib/downloadImage";
// import path from "path";
// import fs from "fs";

// // import {getServices, renderMediaOnCloudrun} from '@remotion/cloudrun/client';

// const ImagePromptScript = `
// Generate Image prompt of {style} style with all details for each scene for 30 seconds video : script : {script}
// -Just give specifying image prompt depends on the story line.
// -Do not give camera angle image prompt.
// -Follow the following schema and return JSON data (Max 4-5 Images)
// -[
//   {
//     "imagePrompt": "",      
//     "sceneContent": "<Script Content>" 
//   }
// ]`



// export const helloWorld = inngest.createFunction(
//   { id: "hello-world" },
//   { event: "test/hello.world" },
//   async ({ event, step }) => {
//     await step.sleep("wait-a-moment", "1s");
//     return { message: `Hello ${event.data.email}!` };
//   },
// );

// // const BASE_URL='https://aigurulab.tech';
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// export const GenerateVideoData= inngest.createFunction(
//     {id:'generate-video-data'},
//     {event: 'generate-video-data'},
//     async({event,step})=>{

//         const {script,topic,title,caption,videostyle,voice ,recordId}=event?.data;
//         const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL)

//         //Generate audio in mp3
//     //     const GenerateAudioFile = await step.run(
//     //         "GenerateAudioFile",
//     //         async()=>{
//     //             const result = await axios.post(BASE_URL+'/api/text-to-speech',
//     //     {
//     //         input: script,
//     //         voice: voice
//     //     },
//     //     {
//     //         headers: {
//     //             'x-api-key': process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
//     //             'Content-Type': 'application/json', // Content Type
//     //         },
//     //     })
//     //  console.log(result.data.audio) //Output Result: Audio Mp3 Url
//     //             return result.data.audio;
//     // // return "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/audio%2F1752257483472.mp3?alt=media&token=662e6b19-b478-48ec-8be4-4faa81fbfc58"
//     //         }
//     //     )
// // const GenerateAudioFile = await step.run(
// //   "GenerateAudioFile",
// //   async () => {
// //     const response = await axios.post(
// //       BASE_URL + "/api/text-to-speech",
// //       {
// //         input: script,
// //         voice: voice,
// //       },
// //       {
// //         headers: {
// //           "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     console.log("===== AIGURU RESPONSE =====");
// //     console.dir(response.data, { depth: null });

// //     if (!response.data.audio) {
// //       throw new Error("AIGuru did not return an audio URL.");
// //     }

// //     return response.data.audio;
// //   }
// // );
// // const GenerateAudioFile = await step.run(
// //   "GenerateAudioFile",
// //   async () => {
// //     return await generateSpeech(script, recordId);
// //   }
// // );
// const GenerateAudioFile = await step.run(
//   "GenerateAudioFile",
//   async () => {
//     return await generateSpeech(script, recordId);
//   }
// );
// console.log(GenerateAudioFile);
//         //Generate captions
//   //       const GenerateCaptions = await step.run(
//   //           "generateCaptions",
//   //           async()=>{
//   //               const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);
//   //               const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
//   //   {
//   //     url: GenerateAudioFile,
//   //   },
//   //   {
//   //     model: "nova-3",
//   //   //   smart_format: true,
//   //   }

//   // );
  
//   //   return result.results?.channels[0]?.alternatives[0]?.words;
//   //           }
//   //       )
// //   const GenerateCaptions = await step.run(
// //   "generateCaptions",
// //   async () => {
// //     const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);

// //     console.log("Audio URL:", GenerateAudioFile);

// //     const { result, error } =
// //       await deepgram.listen.prerecorded.transcribeUrl(
// //         {
// //           url: GenerateAudioFile,
// //         },
// //         {
// //           model: "nova-3",
// //           smart_format: true,
// //         }
// //       );

// //     if (error) {
// //       console.error("Deepgram Error:");
// //       console.dir(error, { depth: null });
// //       throw error;
// //     }

// //     console.log("Deepgram Result:");
// //     console.dir(result, { depth: null });

// //     if (
// //       !result ||
// //       !result.results ||
// //       !result.results.channels?.length
// //     ) {
// //       throw new Error("Deepgram returned no transcription.");
// //     }

// //     return result.results.channels[0].alternatives[0].words;
// //   }
// // );
// const GenerateCaptions = await step.run(
//   "generateCaptions",
//   async () => {
//     const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);

//     const fs = await import("fs");

//     const audioBuffer = fs.readFileSync(GenerateAudioFile.localPath);

//     const { result, error } =
//       await deepgram.listen.prerecorded.transcribeFile(
//         audioBuffer,
//         {
//           model: "nova-3",
//           smart_format: true,
//         }
//       );

//     if (error) {
//       console.error(error);
//       throw error;
//     }

//     return result.results.channels[0].alternatives[0].words;
//   }
// );
//         //Generate Image prompt
//         const GenerateImagePrompts = await step.run(
//           "generateImagePrompt",
//           async()=>{
//             const FINAL_PROMPT= ImagePromptScript.replace('{style}',videostyle).replace('{script}',script)
//             const result = await generateImageScripts(FINAL_PROMPT);
//             // const resp = JSON.parse(result.response.text());
//             return result;
//           }
//         )
// //         //Generate Images
// //         const GenerateImages = await step.run(
// //           "generateImages",
// //           async()=>{
// //             let images =[];
// //             images= await Promise.all(
// //               GenerateImagePrompts.map(async(element)=>{
// //                  console.log("AI Guru Key:",
// //         process.env.NEXT_PUBLIC_AIGURULAB_API_KEY?.substring(0, 10)
// //                  );
// //         //         const result = await axios.post(BASE_URL+'/api/generate-image',
// //         // {
// //         //     width: 1024,
// //         //     height: 1024,
// //         //     input: element?.imagePrompt,
// //         //     model: 'sdxl',//'flux'
// //         //     aspectRatio:"1:1"//Applicable to Flux model only
// //         // },
// //         // {
// //         //     headers: {
// //         //         'x-api-key': process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
// //         //         'Content-Type': 'application/json', // Content Type
// //         //     },
// //         // })
// //   //       const result = await axios.post(
// //   // BASE_URL + "/api/generate-image",
// //   const result = await axios.post(
// //   process.env.NEXT_PUBLIC_HOST + "/api/generate-image",
// //   {
// //     width: 1024,
// //     height: 1024,
// //     input: element?.imagePrompt,
// //     model: "sdxl",
// //     aspectRatio: "1:1",
// //   }
// // );

// // console.log("Generated image URL:", result.data.image);

// // // return result.data.image;
// // const downloaded = await downloadImage(result.data.image);

// // console.log(downloaded);

// // return downloaded.publicUrl;
// //         // console.log(result.data.image) //Output Result: Base 64 Image
// //         // return result.data.image;
// //         console.dir(result.data, { depth: null });

// // return result.data.image;
// //               })
// //             )
// //             return images;
// //           }
// //         )
// // Generate Images
// const GenerateImages = await step.run(
//   "generateImages",
//   async () => {
//     const images = [];

//     for (const element of GenerateImagePrompts) {
//       // Generate image URL from your local API
//       const result = await axios.post(
//         process.env.NEXT_PUBLIC_HOST + "/api/generate-image",
//         {
//           width: 1024,
//           height: 1024,
//           input: element.imagePrompt,
//           model: "sdxl",
//           aspectRatio: "1:1",
//         }
//       );

//       console.log("Generated image URL:", result.data.image);

//       // Download the image locally
//       const downloaded = await downloadImage(result.data.image);

//       console.log(downloaded);

//       // Save public path
//       images.push(downloaded.publicUrl);

//       // Prevent Pollinations rate limit
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//     }

//     return images;
//   }
// );

//         //Save to DB
// //         const UpdateDB= await step.run(
// //           'UpdateDB',
// //           async()=>{
// //         //     const result = await convex.mutation(api.videoData.UpdateVideoRecord,{
// //         //       recordId: recordId,
// //         //       audioUrl:GenerateAudioFile,
// //         //       captionJson:GenerateCaptions,
// //         //       images:GenerateImages
// //         //     });
// //         //     return result;
// //         //   }
// //         // )
// //         const result = await convex.mutation(api.videoData.UpdateVideoRecord,{
// //     recordId: recordId,
// //     audioUrl: GenerateAudioFile.publicUrl,
// //     captionJson: GenerateCaptions,
// //     images: GenerateImages
// // });
// // // Render video
// //         const RenderVideo= await step.run(
// //           'renderVideo',
// //           async()=>{
// //             const services = await getServices({
// //   region: 'us-east1',
// //   compatibleOnly: true,
// // });
 
// // const serviceName = services[0].serviceName;
// // const result = await renderMediaOnCloudrun({
// //   serviceName,
// //   region: 'us-east1',
// //   serveUrl: process.env?.GCP_SERVE_URL,
// //   composition: 'youtubeShort',
// //   inputProps: {
// //     videoData:{
// //        audioUrl: GenerateAudioFile.publicUrl,
// //       captionJson:GenerateCaptions,
// //       images:GenerateImages
// //     }
// //   },
// //   codec: 'h264',
// // });
 
// // if (result.type === 'success') {
// //   console.log(result.bucketName);
// //   console.log(result.renderId);
// // }
// // return result?.publicUrl;
// //           }
// //         )

// //         const UpdateDownloadUrl = await step.run(
// //           'UpdateDownloadUrl',
// //           async()=>{
// //             //  const result = await convex.mutation(api.videoData.UpdateVideoRecord,{
// //             //   recordId: recordId,
// //             //   audioUrl:GenerateAudioFile,
// //             //   captionJson:GenerateCaptions,
// //             //   images:GenerateImages,
// //             //   downloadUrl:RenderVideo || undefined
// //             // });
// //             const result = await convex.mutation(api.videoData.UpdateVideoRecord,{
// //     recordId: recordId,
// //     audioUrl: GenerateAudioFile.publicUrl,
// //     captionJson: GenerateCaptions,
// //     images: GenerateImages,
// //     downloadUrl: RenderVideo || undefined
// // });
// //             return result;
// //           }
// //         )
// //         return RenderVideo;
// //     }
// // )
//         //Save to DB
//         const UpdateDB = await step.run(
//           "UpdateDB",
//           async () => {
//             const result = await convex.mutation(
//               api.videoData.UpdateVideoRecord,
//               {
//                 recordId,
//                 audioUrl: GenerateAudioFile.publicUrl,
//                 captionJson: GenerateCaptions,
//                 images: GenerateImages,
//               }
//             );

//             return result;
//           }
//         );
// );
// // const RenderVideo = await step.run(
// //         // Render video
// // //         const RenderVideo = await step.run(
// // //           "renderVideo",
// // //           async () => {
// // //             const services = await getServices({
// // //               region: "us-east1",
// // //               compatibleOnly: true,
// // //             });

// // //             const serviceName = services[0].serviceName;

// // //         //     const result = await renderMediaOnCloudrun({
// // //         //       serviceName,
// // //         //       region: "us-east1",
// // //         //       serveUrl: process.env.GCP_SERVE_URL || "",
// // //         //       composition: "youtubeShort",
// // //         //       inputProps: {
// // //         //         videoData: {
// // //         //           audioUrl: GenerateAudioFile.publicUrl,
// // //         //           captionJson: GenerateCaptions,
// // //         //           images: GenerateImages,
// // //         //         },
// // //         //       },
// // //         //       codec: "h264",
// // //         //     });

// // //         //     if (result.type === "success") {
// // //         //       console.log(result.bucketName);
// // //         //       console.log(result.renderId);
// // //         //     }

// // //         //     return result.publicUrl;
// // //         //   }
// // //         // );
// // // try {
// // //   const result = await renderMediaOnCloudrun({
// // //     serviceName,
// // //     region: "us-east1",
// // //     serveUrl: process.env.GCP_SERVE_URL || "",
// // //     composition: "youtubeShort",
// // //     inputProps: {
// // //       videoData: {
// // //         audioUrl: GenerateAudioFile.publicUrl,
// // //         captionJson: GenerateCaptions,
// // //         images: GenerateImages,
// // //       },
// // //     },
// // //     codec: "h264",
// // //   });

// // //   console.log(result);

// // //   if (result.type === "success") {
// // //     console.log(result.bucketName);
// // //     console.log(result.renderId);
// // //   }

// // //   return result.publicUrl;
// // // } catch (err) {
// // //   console.error("========= REMOTION ERROR =========");
// // //   console.error(err);
// // //   console.error(err.stack);
// // //   throw err;
// // // }
// // // const RenderVideo = await step.run(
// // //   "renderVideo",
// // //   async () => {
// // //     try {
// // //       // const services = await getServices({
// // //       //   region: "us-east1",
// // //       //   compatibleOnly: true,
// // //       // });

// // //       // console.log("Services:", services);

// // //       // const serviceName = services[0].serviceName;
// // //       const serviceName = "remotion-4-0-323-mem2gi-cpu1-0-t300";

// // // console.log("Using service:", serviceName);

// // // console.log({
// // //   serviceName,
// // //   serveUrl: process.env.GCP_SERVE_URL,
// // //   composition: "youtubeShort",
// // // });


// // //       const result = await renderMediaOnCloudrun({
// // //         serviceName,
// // //         region: "us-east1",
// // //         serveUrl: process.env.GCP_SERVE_URL,
// // //         composition: "youtubeShort",
// // //         inputProps: {
// // //           videoData: {
// // //             audioUrl: GenerateAudioFile.publicUrl,
// // //             captionJson: GenerateCaptions,
// // //             images: GenerateImages,
// // //           },
// // //         },
// // //         codec: "h264",
// // //       });
// // // console.log("Calling renderMediaOnCloudrun...");
// // //       console.log(result);

// // // console.log("Calling renderMediaOnCloudrun...");

// // // const result = await renderMediaOnCloudrun({
// // //   serviceName,
// // //   region: "us-east1",
// // //   serveUrl: process.env.GCP_SERVE_URL,
// // //   composition: "youtubeShort",
// // //   inputProps: {
// // //     videoData: {
// // //       audioUrl: GenerateAudioFile.publicUrl,
// // //       captionJson: GenerateCaptions,
// // //       images: GenerateImages,
// // //     },
// // //   },
// // //   codec: "h264",
// // // });

// // // console.log("========== REMOTION RESULT ==========");
// // // console.dir(result, { depth: null });
// // // console.log("====================================");

// // //       return result.publicUrl;
// // //     } catch (err) {
// // //       console.error("============== FULL ERROR ==============");
// // //       console.error(err);
// // //       console.error(err.stack);
// // //       throw err;
// // //     }
// // //   }
// // // );
// //         const UpdateDownloadUrl = await step.run(
// //   "UpdateDownloadUrl",
// //   async () => {
// //     const result = await convex.mutation(
// //       api.videoData.UpdateVideoRecord,
// //       {
// //         recordId,
// //         audioUrl: GenerateAudioFile.publicUrl,
// //         captionJson: GenerateCaptions,
// //         images: GenerateImages,
// //       }
// //     );

// //     return result;
// //   }
// // );

// // return true;
// //     }
// //   )

import axios from "axios";
import { inngest } from "./client";
import { createClient } from "@deepgram/sdk";
import { generateImageScripts } from "@/app/configs/AiModel";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { generateSpeech } from "@/lib/deepgramTTS";
import { downloadImage } from "@/lib/downloadImage";
import path from "path";
import fs from "fs";

import { bundle } from "@remotion/bundler";
import {
  renderMedia,
  selectComposition,
} from "@remotion/renderer";

const ImagePromptScript = `
Generate Image prompt of {style} style with all details for each scene for 30 seconds video : script : {script}
-Just give specifying image prompt depends on the story line.
-Do not give camera angle image prompt.
-Follow the following schema and return JSON data (Max 4-5 Images)
-[
  {
    "imagePrompt": "",      
    "sceneContent": "<Script Content>" 
  }
]`

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const GenerateVideoData = inngest.createFunction(
  { id: 'generate-video-data' },
  { event: 'generate-video-data' },
  async ({ event, step }) => {

    const { script, topic, title, caption, videostyle, voice, recordId } = event?.data;
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);

    // 1. Generate Audio File
    const GenerateAudioFile = await step.run(
      "GenerateAudioFile",
      async () => {
        return await generateSpeech(script, recordId);
      }
    );
    console.log(GenerateAudioFile);

    // 2. Generate Captions
    const GenerateCaptions = await step.run(
      "generateCaptions",
      async () => {
        const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);
        const fs = await import("fs");
        const audioBuffer = fs.readFileSync(GenerateAudioFile.localPath);

        const { result, error } =
          await deepgram.listen.prerecorded.transcribeFile(
            audioBuffer,
            {
              model: "nova-3",
              smart_format: true,
            }
          );

        if (error) {
          console.error(error);
          throw error;
        }

        return result.results.channels[0].alternatives[0].words;
      }
    );

    // 3. Generate Image Prompts
    const GenerateImagePrompts = await step.run(
      "generateImagePrompt",
      async () => {
        const FINAL_PROMPT = ImagePromptScript.replace('{style}', videostyle).replace('{script}', script);
        const result = await generateImageScripts(FINAL_PROMPT);
        return result;
      }
    );

    // 4. Generate Images
    const GenerateImages = await step.run(
      "generateImages",
      async () => {
        const images = [];

        for (const element of GenerateImagePrompts) {
          const result = await axios.post(
            process.env.NEXT_PUBLIC_HOST + "/api/generate-image",
            {
              width: 1024,
              height: 1024,
              input: element.imagePrompt,
              model: "sdxl",
              aspectRatio: "1:1",
            }
          );

          console.log("Generated image URL:", result.data.image);

          const downloaded = await downloadImage(result.data.image);
          console.log(downloaded);

          images.push(downloaded.publicUrl);

          await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        return images;
      }
    );

    // 5. Save to DB
    const UpdateDB = await step.run(
      "UpdateDB",
      async () => {
        const result = await convex.mutation(
          api.videoData.UpdateVideoRecord,
          {
            recordId,
            audioUrl: GenerateAudioFile.publicUrl,
            captionJson: GenerateCaptions,
            images: GenerateImages,
          }
        );

        return result;
      }
    );

    return UpdateDB;
  }
);