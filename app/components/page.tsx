"use client";

import { use } from "react";
import NavbarInsta from "./navbar";
import Posts from "./posts";
import StoryBar from "./story";

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
