"use client";
import NavbarInsta from "./_components/navbar";
import Posts from "./_components/posts";
import StoryBar from "./_components/story";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavbarInsta /> 
            <StoryBar />
        <div className="f">
          <Posts />
        </div>
      </div>
    </>
  );
}
