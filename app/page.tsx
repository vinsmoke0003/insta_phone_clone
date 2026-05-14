"use client";

import { use } from "react";
import NavbarInsta from "./components/navbar";
import Posts from "./components/posts";
import StoryBar from "./components/story";

export default function HomePage() {
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
