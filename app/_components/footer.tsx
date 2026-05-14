"use client";

import {
  HousePlus,
  Search,
  Plus,
  Compass,
  SquarePlay,
  Send,
  CircleUser,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function FooterInsta() {
  const router = useRouter();

  return (
    <>
      <div className="container flex bg-black  border-white h-12 fixed bottom-0">
        <ul className="flex flex-row justify-between items-center w-full p-6">
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
