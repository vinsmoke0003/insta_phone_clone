"use client";

import {
  ArrowLeft,
  BadgeCheck,
  CircleUserRound,
  NotebookPen,
  Search,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// ── Types ──────────────────────────────────────────────────────────
type MessageProps = {
  id: number;
  username: string;
  profileImage?: string;
  lastMessage: string;
  time: string;
};

// ── Data ───────────────────────────────────────────────────────────
const messagesData: MessageProps[] = [

  {
    id: 1,
    username: "vin_seenu_03",
    lastMessage: "Bro the event edits came out fire 🔥",
    profileImage: "/story_images/image10.jpeg",
    time: "1m",
  },
  {
    id: 2,
    username: "Avijit_Verma",
    lastMessage: "Ayush is already at the venue 😂",
    profileImage: "/story_images/image11.jpeg",
    time: "5m",
  },
  {
    id: 3,
    username: "Kshipra_sharma",
    lastMessage: "Send me the pics from yesterday!",
    profileImage: "/story_images/image12.jpeg",
    time: "12m",
  },
  {
    id: 4,
    username: "Shishi_Chaudhary",
    lastMessage: "That reel is getting viral fr 👀",
    profileImage: "/story_images/image13.jpeg",
    time: "18m",
  },
  {
    id: 5,
    username: "Jairaj_berry",
    lastMessage: "Meetup at cafe in 20?",
    profileImage: "/story_images/image14.png",
    time: "25m",
  },
  {
    id: 6,
    username: "Shashank",
    lastMessage: "Lassi meme was personal 💀",
    profileImage: "/story_images/image15.jpg",
    time: "40m",
  },
  {
    id: 7,
    username: "Nauti",
    lastMessage: "You: great session!",
    profileImage: "/story_images/image16.jpg",
    time: "2h",
  },
  {
    id: 8,
    username: "Diwali_Dhamaka",
    lastMessage: "Festival pics dropped ✨",
    profileImage: "/story_images/image17.dng",
    time: "3h",
  },
  {
    id: 9,
    username: "Pole_Boy",
    lastMessage: "Bro where are you rn?",
    profileImage: "/story_images/image18.jpg",
    time: "5h",
  },
  {
    id: 10,
    username: "Janpath_Vibes",
    lastMessage: "The crowd yesterday was insane 😭",
    profileImage: "/story_images/image19.jpg",
    time: "8h",
  },
  {
    id: 11,
    username: "Panch_Gaon",
    lastMessage: "Dosa plan tonight?",
    profileImage: "/story_images/image21.jpg",
    time: "1d",
  },
  {
    id: 12,
    username: "Piyosh_x_Chutney",
    lastMessage: "Editing kar diya check once",
    profileImage: "/story_images/image22.jpg",
    time: "1d",
  },
  {
    id: 13,
    username: "Monkita_Yadav",
    lastMessage: "Your story was too funny 😂",
    profileImage: "/story_images/image23.png",
    time: "2d",
  },
  {
    id: 14,
    username: "Campus_Clicks",
    lastMessage: "New event poster ready ✅",
    profileImage: "/story_images/image24.png",
    time: "2d",
  },
];

// ── Single message row ─────────────────────────────────────────────
function MessageCard({ message }: { message: MessageProps }) {
  return (
    <div className="flex flex-row items-center gap-3 py-3 cursor-pointer">
      {/* Avatar */}
      <div className="shrink-0">
        {message.profileImage ? (
          <Image
            src={message.profileImage}
            alt={message.username}
            width={55}
            height={55}
            className="rounded-full object-cover w-14 h-14"
          />
        ) : (
          <CircleUserRound size={55} className="text-gray-400" />
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-white">
          {message.username}
        </span>
        <span className="text-xs text-gray-400">
          {message.lastMessage} · {message.time}
        </span>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────
export default function Messages() {
  const router = useRouter();

  return (
    <div className="container min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex flex-row items-center w-full justify-between sticky top-0 h-15 px-4 bg-black border-b border-zinc-800 z-50">
        <ArrowLeft
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <div className="font-semibold">vin_seenu_03</div>
        <NotebookPen />
      </div>

      {/* Search */}
      <div className="relative w-full px-4 py-2">
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

      {/* Note bubble */}
      <div className="flex flex-col items-start mx-5 mt-2">
        <div className="relative bg-zinc-800 text-gray-300 text-xs px-3 py-2 rounded-2xl rounded-bl-none mb-2 w-32">
          <input
            type="text"
            placeholder="Share your thoughts..."
            className="bg-transparent outline-none placeholder:text-gray-400 text-xs w-full"
          />
          <div className="absolute -bottom-2 left-3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-zinc-800" />
        </div>
        
        <div className="text-xs text-gray-400 mt-1">
          <Image
            src="/story_images/image10.jpeg"
            alt="Profile"
            width={55}
            height={55}
            className="rounded-full object-cover w-14 h-14"
          />
        </div>
      </div>

      {/* Messages list */}
      <div className="flex-1 overflow-y-auto px-4 mt-4">
        <div className="flex flex-row justify-between items-center mb-2">
          <span className="font-bold text-white">Messages</span>
          <span className="text-sm text-gray-400">Requests (1)</span>
        </div>

        {messagesData.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}
