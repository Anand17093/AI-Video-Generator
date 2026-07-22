"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { Loader2Icon, SparklesIcon } from 'lucide-react';
import axios from 'axios';
import { useAuthContext } from '@/app/provider';
const suggestions = [
  "Mental Maths",
  "Maths Puzzles",
  "Brainrot",
  "Matiks Mental Math app",
  "Historic Story",
  "Kids Story",
  "Movie Stories",
  "AI Innovations",
  "Space Mysteries",
  "Horror Stories",
  "Mythological Tales",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Fantasy Adventures",
  "Science Experiments",
  "Motivational Stories",
];

export default function Topic({onHandleInputChange}) {
  const [selectedTopic,setSelectedTopic]=useState();
  const [selectedScriptIndex, setSelectedScriptIndex] = useState(null);
  const [scripts,setScripts]=useState();
  const [loading,setLoading]=useState(false);
  const {user}=useAuthContext();

  // const GenerateScript=async()=>{
  //   const result = await axios.post('/api/generate-script',{
  //     topic:selectedTopic
  //   });
  //   console.log(result.data);
  // }
  const GenerateScript = async () => {
    if(user?.credits <=0 ){
      toast('Please add more credits!')
      return;
    }
  try {
    setLoading(true);
    const result = await axios.post('/api/generate-script', {
      topic: selectedTopic,
    });
    setScripts(result.data?.scripts);

    if (!result.data) {
      console.log("Empty or null response from API");
    } else {
      console.log("Generated scripts:", result.data);
    }
  } catch (error) {
    console.error("Client error:", error.response?.data || error.message);
  }
   setLoading(false);
};




  return (
    <div>
        <h2 className='mb-1'>Project Title</h2>
        <Input placeholder="Enter project title" onChange={(event)=>onHandleInputChange('title',event?.target.value)} />
        <div className='mt-5'> 
        <h2>Video Topic</h2>
        <p className='text-sm text-gray-600'>Select topic for your video</p>
        <Tabs defaultValue="suggestion" className="w-full mt-2">
  <TabsList>
    <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
    <TabsTrigger value="your_topic">Your topic</TabsTrigger>
  </TabsList>
  <TabsContent value="suggestion">
    <div>
      {suggestions.map((suggestion,index)=>(
        // <Button variant='outline' key={index} className={`m-1 ${suggestion===selectedTopic&& "bg-secondary"}`} onClick={()=>{setSelectedTopic(suggestion)
        //   onHandleInputChange('topic',suggestion);
        // }}>{suggestion}</Button>
        <Button
  variant="outline"
  key={index}
  className={`m-1 ${suggestion === selectedTopic ? "bg-secondary" : ""}`}
  onClick={() => {
    setSelectedTopic(suggestion);
    onHandleInputChange('topic', suggestion);
  }}
>
  {suggestion}
</Button>
      ))}
    </div>
  </TabsContent>
  <TabsContent value="your_topic">
    <div>
      <h2>
        Enter your topic
      </h2>
      <Textarea placeholder="Enter your topic" 
      onChange={(event)=>{
        onHandleInputChange('topic',event.target.value);
      }}/>
    </div>
  </TabsContent>
</Tabs>

{scripts?.length > 0 && (
  <div className="mt-4">
    <h2 className="text-base font-medium mb-2">Select the Script</h2>
    <div className="grid grid-cols-2 gap-5">
      {scripts.map((item, index) => (
        <div
          key={index}
          onClick={() => {setSelectedScriptIndex(index);
            onHandleInputChange('script',item?.content)
          }}
          className={`p-4 border rounded-lg shadow-sm transition-all duration-200 cursor-pointer
            ${index === selectedScriptIndex
              ? "bg-blue-100 border-blue-500 ring-2 ring-blue-100"
              : "hover:bg-gray-100 hover:shadow-lg hover:scale-[1.02]"}`}
        >
          <h2 className="line-clamp-4 text-sm text-gray-400">
            {item.content}
          </h2>
        </div>
      ))}
    </div>
  </div>
)}



        </div>
   {!scripts?.length && (
  <Button
    className="mt-3"
    size="sm"
    onClick={GenerateScript}
    disabled={loading}
  >
    {loading ? (
      <Loader2Icon className="animate-spin mr-2" />
    ) : (
      <SparklesIcon className="mr-2" />
    )}
    Generate Script
  </Button>
)}
    </div>
  )
}
