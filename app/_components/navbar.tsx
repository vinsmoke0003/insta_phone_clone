"use client";

import { Heart, Search, SwitchCamera } from "lucide-react";
import { use } from "react";

export default function NavbarInsta() {
  return (
    <>
      <div className="w-full sticky top-0 h-14 flex flex-start items-center gap-3 pl-4 px-2 bg-black" >
        <div className="">
            Instagram
        </div>
        <div className="searchbar bg-gray-600 placeholder:text-gray-500 border border-black w-10/12 rounded-2xl pl-2 py-2 text-gray-300 flex items-center gap-1 text-shadow-md text-medium">

          <span className="text-xs">
            <Search />
          </span>
        <div className="placeholder:text-gray-500  text-gray-300 text-shadow-md text-medium" >
          Search Bar
        </div>
        </div>
        <div className="heart"><Heart /></div>
      </div>
    </>
  );
}
