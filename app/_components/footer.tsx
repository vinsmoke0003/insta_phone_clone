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
    <div className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between border-t border-zinc-800 bg-black px-6 py-3 md:top-0 md:h-screen md:w-20 md:flex-col md:justify-center md:gap-10 md:border-r md:border-t-0">
      <HousePlus onClick={() => router.push("./")} />

      <Compass />

      <SquarePlay />

      <Plus />

      <Send onClick={() => router.push("/messages")} />

      <CircleUser onClick={() => router.push("/profile")} />
    </div>
  );
}
