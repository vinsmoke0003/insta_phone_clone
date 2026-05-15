"use client";
import NavbarInsta from "./_components/navbar";
import Posts from "./_components/posts";
import StoryBar from "./_components/story";

export default function Home() {
  return (
    <main className=" flex-col md:items-center md:justify-center p-4 md:p-8 min-h-screen flex  ">
      <div className="">
        <NavbarInsta />
        <div className="">
          <StoryBar />
        </div>
        <div className="">
          <Posts />
        </div>
      </div>
    </main>
  );
}
