"use client";

import {
  HousePlus,
  Plus,
  Compass,
  SquarePlay,
  Send,
  CircleUser,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function FooterInsta() {
  const router = useRouter();

  return (
    <>
      <div className="container flex bg-black h-12 fixed bottom-0 sm:w-full sm:max-w-md sm:left-1/2 sm:-translate-x-1/2 md:top-0 md:left-0 md:bottom-auto md:h-screen md:w-20 md:max-w-none md:translate-x-0 md:border-r md:border-zinc-800 md:z-50 ">
        <ul className="flex flex-row justify-between items-center w-full p-6 md:flex-col md:justify-center md:gap-8 md:h-full md:py-8 md:px-0">
          <li onClick={() => router.push("./")}>
            <HousePlus />
          </li>
          <li>
            <Compass />
          </li>
          <li>
            <SquarePlay />
          </li>
          <li>
            <Plus />
          </li>
          <li onClick={() => router.push("/messages")}>
            <Send />
          </li>
          <li onClick={() => router.push("/profile")}>
            <CircleUser />
          </li>
        </ul>
      </div>
    </>
  );
}
