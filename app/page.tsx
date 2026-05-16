"use client";
import NavbarInsta from "./_components/navbar";
import Posts from "./_components/posts";
import StoryBar from "./_components/story";

export default function Home() {
  return (
    <main className="flex flex-col md:items-center min-h-screen">
      <div className="md:hidden">
        <NavbarInsta />
      </div>
      <div>
        <StoryBar />
      </div>
      <div>
        <Posts />
      </div>
    </main>
  );
}
