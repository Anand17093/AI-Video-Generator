import { Button } from '@/components/ui/button'
import { ArrowBigLeft, DownloadCloud } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// export default function VideoInfo({videoData}) {
//   const handleDownload = () => {
//     if (!videoData?.downloadUrl) {
//       alert("No video available to download");
//       return;
//     }

//     // Create a hidden link element
//     const link = document.createElement("a");
//     link.href = videoData?.downloadUrl; // URL of your video
//     link.download = `${videoData?.title || "video"}.mp4`; // Default filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   return (
export default function VideoInfo({videoData}) {

  // const handleDownload = () => {
  //   if (!videoData?.downloadUrl) {
  //     alert("No video available to download");
  //     return;
  //   }

  //   const link = document.createElement("a");
  //   link.href = videoData.downloadUrl;
  //   link.download = `${videoData.title || "video"}.mp4`;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
//   const handleDownload = async () => {
//   // Already rendered? Just download it.
//   if (videoData?.downloadUrl) {
//     window.open(videoData.downloadUrl, "_blank");
//     return;
//   }

//   try {
//     const res = await fetch("/api/render-video", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         videoData,
//       }),
//     });

//     const data = await res.json();

//     console.log(data);

//     if (!data.success) {
//       alert(data.error || "Render failed");
//       return;
//     }

//     // Download the newly rendered video
//     window.open(data.downloadUrl, "_blank");
//   } catch (err) {
//     console.error(err);
//     alert("Render failed");
//   }
// };

const handleDownload = async () => {
  // Already rendered?
  if (videoData?.downloadUrl) {
    window.open(videoData.downloadUrl, "_blank");
    return;
  }

  try {
    const res = await fetch("/api/render-video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        videoData,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (!data.success) {
      alert(data.error);
      return;
    }

    window.open(data.downloadUrl, "_blank");
  } catch (err) {
    console.error(err);
    alert("Rendering failed");
  }
};
  console.log("Video Data:", videoData);

  return (
    <div className='p-5 border rounded-xl'>
      <Link href={'/dashboard'}>
        <h2 className='flex gap-2 items-center'>
            <ArrowBigLeft/>
            Back to Dashboard
        </h2>
        </Link>
        <div className='flex flex-col gap-3'>
        <h2 className='mt-5'>Project Name:{videoData?.title}</h2>
        <p className='text-gray-500'>Script:{videoData?.script}</p>
        <h2>Video Style : {videoData?.videostyle}</h2>
        {/* <Button><DownloadCloud/>Export & Download</Button> */}
        
        <Button onClick={handleDownload}>
          <DownloadCloud className='mr-2' />
          Export & Download
        </Button>
        </div>
    </div>
  )
}
