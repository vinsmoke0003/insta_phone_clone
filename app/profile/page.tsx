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
    <div className="min-h-screen text-white bg-black">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4">
        <div className="">
          <Settings />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-sm">meowkitty6291</span>
          <ChevronDown size={16} />
        </div>
        <div className="text-white">@</div>
      </div>

      {/* Avatar + Stats */}
      <div className="flex items-center gap-6 mt-2 px-4 py-3 w-fit">
        {/* Avatar */}
        <div className="relative w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center shrink-0">
          <Camera size={28} className="text-gray-400" />
          <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
            <Camera size={10} className="text-white" />
          </div>
        </div>

        {/* Name + Stats */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm">meowkitty6291</p>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm">0</span>
              <span className="text-xs text-gray-400">posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm">3</span>
              <span className="text-xs text-gray-400">followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm">3</span>
              <span className="text-xs text-gray-400">following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-3 pl-6">
        <p className="font-semibold text-lg">meowkitty6291</p>
        <p className="text-sm">I am Moti Billi</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mx-4 mt-4">
        <button className="flex-1 bg-zinc-800 p-2 rounded-full text-sm font-semibold">
          Edit profile
        </button>
        <button className="flex-1 bg-zinc-800 py-2 rounded-full text-sm font-semibold">
          View archive
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mt-5 border-b border-zinc-800 px-5">
        <div className="pb-2 border-b-2 border-white ">
          <TableCellsSplit size={27}/>
        </div>
        <div className="pb-2 border-b-2 border-white ">
          <Bookmark size={27}/>
        </div>
        <div className="pb-2 border-b-2 border-white">
          <ContactRound size={27} />
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-0.5 mt-3">
        {posts.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square bg-zinc-900"
          >
            <Image
              src={img}
              alt="post"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
