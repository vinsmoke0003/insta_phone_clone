"use client";

import { ArrowLeft, CircleUserRound, NotebookPen, Search } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Messages() {
  const router = useRouter();

  return (
    <>
      <div className="container min-h-screen flex flex-col">
        <div className="navbar flex flex-row items-center w-full justify-between sticky top-0 h-15 px-4 bg-black border-b border-zinc-800 z-1">
          <div className="back-button">
            <ArrowLeft onClick={() => router.push("/")} />
          </div>
          <div className="font-semibold text-1xl">vin_seenu_03</div>
          <div className="notes">
            <NotebookPen />
          </div>
        </div>

        <div className="searchbar relative w-full px-4 py-2">
          <Search
            size={16}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-zinc-800 placeholder:text-gray-500 border border-zinc-700 rounded-2xl pl-9 pr-4 py-2 text-gray-300 text-sm outline-none focus:border-zinc-500"
          />
        </div>

        <div className="flex flex-col">
          <div className="bg-gray-600 w-fit rounded-2xl px-3 py-2 ml-5">
            <input type="text" placeholder="Enter your note here!!!" />
          </div>

          <div className="Notes-point mx-5 ">
            <CircleUserRound size={100} />
          </div>
          <div className="text-sm ml-9">your Note</div>
        </div>

        <div className="messages-container flex-1 overflow-y-auto p-4">
            <div className="message-top flex flex-row justify-between">
                <div className="">Messages</div>
                <div className="">Requests</div>
            </div>

            <div className="message-content">

            </div>
        </div>
      </div>
    </>
  );
}
