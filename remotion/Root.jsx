import React from 'react';
import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import RemotionComposition from './../app/_components/RemotionComposition';

const videoData={
   audioUrl:'',
   captionJson:[
  {
    confidence: 0.9854447,
    end: 0.39999998,
    start: 0,
    word: "our",
  },
  {
    confidence: 0.99816954,
    end: 0.64,
    start: 0.39999998,
    word: "world",
  },
  {
    confidence: 0.9997516,
    end: 1.04,
    start: 0.64,
    word: "faces",
  },
  {
    confidence: 0.9996239,
    end: 1.8399999,
    start: 1.04,
    word: "unprecedented",
  },
  {
    confidence: 0.6996389,
    end: 2.6399999,
    start: 1.8399999,
    word: "challenges",
  },
  {
    confidence: 0.9884086,
    end: 3.12,
    start: 2.8,
    word: "climate",
  },
  {
    confidence: 0.99750555,
    end: 3.6799998,
    start: 3.12,
    word: "change",
  },
  {
    confidence: 0.99948823,
    end: 4.08,
    start: 3.6799998,
    word: "complex",
  },
  {
    confidence: 0.9951525,
    end: 4.88,
    start: 4.08,
    word: "diseases",
  },
  {
    confidence: 0.99568,
    end: 5.2799997,
    start: 4.88,
    word: "information",
  },
  {
    confidence: 0.99989283,
    end: 5.7599998,
    start: 5.2799997,
    word: "overload",
  },
  {
    confidence: 0.8313851,
    end: 6,
    start: 5.7599998,
    word: "but",
  },
  {
    confidence: 0.99746287,
    end: 6.08,
    start: 6,
    word: "we",
  },
  {
    confidence: 0.9998202,
    end: 6.16,
    start: 6.08,
    word: "have",
  },
  {
    confidence: 0.9997441,
    end: 6.3199997,
    start: 6.16,
    word: "a",
  },
  {
    confidence: 0.99953604,
    end: 6.3999996,
    start: 6.3199997,
    word: "new",
  },
  {
    confidence: 0.99598444,
    end: 6.72,
    start: 6.3999996,
    word: "ally",
  },
  {
    confidence: 0.9960504,
    end: 6.7999997,
    start: 6.72,
    word: "in",
  },
  {
    confidence: 0.9998864,
    end: 6.96,
    start: 6.7999997,
    word: "our",
  },
  {
    confidence: 0.998259,
    end: 7.2,
    start: 6.96,
    word: "corner",
  },
  {
    confidence: 0.73805696,
    end: 7.7599998,
    start: 7.2,
    word: "artificial",
  },
  {
    confidence: 0.9145832,
    end: 8.639999,
    start: 7.7599998,
    word: "intelligence",
  },
  {
    confidence: 0.94503665,
    end: 8.88,
    start: 8.639999,
    word: "it's",
  },
  {
    confidence: 0.9393671,
    end: 9.5199995,
    start: 8.88,
    word: "revolutionizing",
  },
  {
    confidence: 0.9985727,
    end: 10.08,
    start: 9.5199995,
    word: "scientific",
  },
  {
    confidence: 0.99970573,
    end: 10.559999,
    start: 10.08,
    word: "research",
  },
  {
    confidence: 0.9590887,
    end: 11.04,
    start: 10.559999,
    word: "discovering",
  },
  {
    confidence: 0.99937785,
    end: 11.28,
    start: 11.04,
    word: "new",
  },
  {
    confidence: 0.9998497,
    end: 11.599999,
    start: 11.28,
    word: "medicines",
  },
  {
    confidence: 0.99939764,
    end: 11.84,
    start: 11.599999,
    word: "in",
  },
  {
    confidence: 0.9996043,
    end: 12.08,
    start: 11.84,
    word: "record",
  },
  {
    confidence: 0.9999304,
    end: 12.32,
    start: 12.08,
    word: "time",
  },
  {
    confidence: 0.9983255,
    end: 12.48,
    start: 12.32,
    word: "and",
  },
  {
    confidence: 0.9998049,
    end: 12.88,
    start: 12.48,
    word: "creating",
  },
  {
    confidence: 0.99953246,
    end: 13.28,
    start: 12.88,
    word: "smarter",
  },
  {
    confidence: 0.99890447,
    end: 13.5199995,
    start: 13.28,
    word: "energy",
  },
  {
    confidence: 0.9993832,
    end: 13.84,
    start: 13.5199995,
    word: "grids",
  },
  {
    confidence: 0.99993527,
    end: 14.08,
    start: 13.84,
    word: "to",
  },
  {
    confidence: 0.9998714,
    end: 14.32,
    start: 14.08,
    word: "protect",
  },
  {
    confidence: 0.99978596,
    end: 14.48,
    start: 14.32,
    word: "our",
  },
  {
    confidence: 0.8434849,
    end: 14.799999,
    start: 14.48,
    word: "planet",
  },
  {
    confidence: 0.967503,
    end: 15.215,
    start: 14.975,
    word: "this",
  },
  {
    confidence: 0.9992142,
    end: 15.455001,
    start: 15.215,
    word: "isn't",
  },
  {
    confidence: 0.9880449,
    end: 15.775001,
    start: 15.455001,
    word: "science",
  },
  {
    confidence: 0.8057885,
    end: 16.415,
    start: 15.775001,
    word: "fiction",
  },
  {
    confidence: 0.9929129,
    end: 16.575,
    start: 16.415,
    word: "it's",
  },
  {
    confidence: 0.998052,
    end: 16.655,
    start: 16.575,
    word: "the",
  },
  {
    confidence: 0.99055475,
    end: 16.895,
    start: 16.655,
    word: "new",
  },
  {
    confidence: 0.99710006,
    end: 17.215,
    start: 16.895,
    word: "reality",
  },
  {
    confidence: 0.44531783,
    end: 17.855,
    start: 17.215,
    word: "ai",
  },
  {
    confidence: 0.926288,
    end: 18.255001,
    start: 17.855,
    word: "guided",
  },
  {
    confidence: 0.9999057,
    end: 18.415,
    start: 18.255001,
    word: "by",
  },
  {
    confidence: 0.9989568,
    end: 18.735,
    start: 18.415,
    word: "human",
  },
  {
    confidence: 0.99990505,
    end: 19.215,
    start: 18.735,
    word: "ingenuity",
  },
  {
    confidence: 0.9282465,
    end: 19.535,
    start: 19.215,
    word: "is",
  },
  {
    confidence: 0.9998945,
    end: 19.855,
    start: 19.535,
    word: "helping",
  },
  {
    confidence: 0.99989283,
    end: 20.015,
    start: 19.855,
    word: "us",
  },
  {
    confidence: 0.9996761,
    end: 20.255001,
    start: 20.015,
    word: "solve",
  },
  {
    confidence: 0.9988287,
    end: 20.415,
    start: 20.255001,
    word: "the",
  },
  {
    confidence: 0.9997601,
    end: 20.735,
    start: 20.415,
    word: "problems",
  },
  {
    confidence: 0.9998816,
    end: 20.975,
    start: 20.735,
    word: "that",
  },
  {
    confidence: 0.99981076,
    end: 21.215,
    start: 20.975,
    word: "once",
  },
  {
    confidence: 0.99824166,
    end: 21.455,
    start: 21.215,
    word: "seemed",
  },
  {
    confidence: 0.9933229,
    end: 22.335,
    start: 21.455,
    word: "impossible",
  },
  {
    confidence: 0.81948113,
    end: 23.455,
    start: 22.815,
    word: "together",
  },
  {
    confidence: 0.99067515,
    end: 23.535,
    start: 23.455,
    word: "we",
  },
  {
    confidence: 0.99906725,
    end: 23.695,
    start: 23.535,
    word: "are",
  },
  {
    confidence: 0.94738436,
    end: 24.095001,
    start: 23.695,
    word: "engineering",
  },
  {
    confidence: 0.9996506,
    end: 24.335,
    start: 24.095001,
    word: "a",
  },
  {
    confidence: 0.99654084,
    end: 24.575,
    start: 24.335,
    word: "better",
  },
  {
    confidence: 0.9331075,
    end: 25.055,
    start: 24.575,
    word: "tomorrow",
  },],
   images:['https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/ai-guru-lab-images%2F1752333357493.png?alt=media&token=f5efd530-5444-4fb8-8c35-f41edd3f314b']
}

export const RemotionRoot = () => {
  return (
    <>
      <Composition
  id="youtubeShort"
  component={RemotionComposition}
  durationInFrames={Number(
    (videoData?.captionJson?.[videoData?.captionJson?.length - 1]?.end * 30).toFixed(0)
  )}
  fps={30}
  width={1280}
  height={720}
  defaultProps={{
    videoData: videoData,
  }}
/>
    </>
  );
};