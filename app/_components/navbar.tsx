"use client";

import { Heart, Search } from "lucide-react";
import { Molle } from "next/font/google";

const playwrite = Molle({
  weight: "400",
});

export default function NavbarInsta() {
  return (
    <div className="sticky top-0 z-50 flex h-14 w-full items-center gap-3 bg-black px-4">

      {/* Instagram Text */}
      <div
        className={`${playwrite.className} text-xl tracking-tight text-white shrink-0`}
      >
        Instagram
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 items-center gap-2 rounded-2xl bg-zinc-800 px-3 py-2 text-gray-400">

        <Search size={18} />

        <span className="text-sm">
          Search
        </span>
      </div>

      {/* Heart Icon */}
      <div className="shrink-0 text-white">
        <Heart size={24} />
      </div>
    </div>
  );
}