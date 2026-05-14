"use client";

import { use } from "react";
import NavbarInsta from "./_components/navbar";
import Posts from "./_components/posts";
import StoryBar from "./_components/story";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavbarInsta /> 
            <StoryBar />
        <div className="flex flex-col ">
          <Posts />
        </div>
      </div>
    </>
  );
}
