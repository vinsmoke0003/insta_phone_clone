"use client";

import {
  Bookmark,
  Camera,
  ChevronDown,
  ContactRound,
  Settings,
  TableCellsSplit,
} from "lucide-react";
import Image from "next/image";

export default function Profile() {
  const posts = [
    "/story_images/image10.jpeg",
    "/story_images/image11.jpeg",
    "/story_images/image12.jpeg",
    "/story_images/image13.jpeg",
    "/story_images/image14.png",
    "/story_images/image15.jpg",
    "/story_images/image18.jpg",
    "/story_images/image19.jpg",
    "/story_images/image10.jpeg",
    "/story_images/image11.jpeg",
    "/story_images/image12.jpeg",
    "/story_images/image13.jpeg",
    "/story_images/image14.png",
    "/story_images/image15.jpg",
    "/story_images/image18.jpg",
    "/story_images/image19.jpg",
    "/story_images/image10.jpeg",
    "/story_images/image11.jpeg",
    "/story_images/image12.jpeg",
    "/story_images/image13.jpeg",
    "/story_images/image14.png",
    "/story_images/image15.jpg",
    "/story_images/image18.jpg",
    "/story_images/image19.jpg",
  ];

  return (
    <div className="min-h-screen text-white bg-black ">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 md:max-w-3xl md:mx-auto md:px-0 md:pt-8">
        <div className="">
          <Settings />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-sm md:text-base">meowkitty6291</span>
          <ChevronDown size={16} />
        </div>
        <div className="w-5 flex justify-end">@</div>
      </div>

      {/* Avatar + Stats */}
      <div className="flex items-center gap-6 mt-2 px-4 py-3 md:max-w-3xl md:mx-auto md:w-full md:gap-16 md:px-0 md:py-8">
        {/* Avatar */}
        <div className="relative w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center shrink-0 md:w-40 md:h-40">
          <Camera size={28} className="text-gray-400" />
        </div>

        {/* Name + Stats */}
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="font-semibold text-sm md:text-base">meowkitty6291</p>
          <div className="flex gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm md:text-lg">0</span>
              <span className="text-xs md:text-sm text-gray-400">posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm md:text-lg">3</span>
              <span className="text-xs md:text-sm text-gray-400">followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm md:text-lg">3</span>
              <span className="text-xs md:text-sm text-gray-400">following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-3 px-6 md:max-w-3xl md:mx-auto md:px-0">
        <div className="md:ml-8">
          <p className="font-semibold text-lg md:text-xl">meowkitty6291</p>

          <p className="text-sm md:text-base">I am Moti Billi</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-1 mx-2 mt-4 md:max-w-md w-full">
        <button className="flex-1 bg-zinc-800 p-2 rounded-full text-sm md:text-base font-semibold">
          Edit profile
        </button>
        <button className="flex-1 bg-zinc-800 py-2 rounded-full text-sm md:text-base font-semibold">
          View archive
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mt-5 border-b border-zinc-800 px-5 md:max-w-3xl md:mx-auto md:mt-12">
        <div className="pb-2 border-b-2 ">
          <TableCellsSplit size={24} />
        </div>
        <div className="pb-2 border-b-2 ">
          <Bookmark size={24} />
        </div>
        <div className="pb-2 border-b-2">
          <ContactRound size={24} />
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-0.5 mt-3 md:max-w-3xl md:mx-auto md:gap-1">
        {posts.map((img, index) => (
          <div key={index} className="relative aspect-square bg-zinc-900">
            <Image src={img} alt="post" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
