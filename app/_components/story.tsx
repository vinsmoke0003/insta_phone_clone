"use client";
import Image from "next/image";

type StoryProps = {
  id: number;
  username: string;
  image: string;
  seen?: boolean;
};

const stories: StoryProps[] = [
  { id: 1, username: "your_story", image: "/story_images/image.avif"},
  { id: 2, username: "alex.travels", image: "/story_images/image2.jpg" },
  { id: 3, username: "sunita_k", image: "/story_images/image3.jpg" },
  { id: 4, username: "rohan.dev", image: "/story_images/image4.jpg" },
  { id: 5, username: "priya_99", image: "/story_images/image5.jpg" },
  { id: 6, username: "sam.clicks", image: "/story_images/image6.webp" },
  { id: 7, username: "meera_art", image: "/story_images/image7.webp" },
  { id: 8, username: "vikram88", image: "/story_images/image8.jpg" },
  { id: 9, username: "neha.life", image: "/story_images/image9.jpg" },
];

function StoryCard({ story }: { story: StoryProps }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0 ">
      <div className={"p-0.5 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600"}>
        <div className="bg-black rounded-full p-0.5">
          <Image
            src={story.image}
            alt={story.username}
            width={60}
            height={60}
            className="rounded-full object-cover w-15 h-15"
          />
        </div>
      </div>

      <span className="text-white text-xs w-16 text-center">
        {story.username}
      </span>
    </div>
  );
}

export default function StoryBar() {

  return (
    <div className="w-full md:w-lg py-3">
      <div className="flex flex-row gap-5 overflow-x-auto scroll-smooth">
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}