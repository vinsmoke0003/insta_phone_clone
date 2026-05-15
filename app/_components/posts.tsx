"use client";
import { Bookmark, Ellipsis, Heart, MessageCircle, Repeat2, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type EventCardProps = {
  username: string;
  profileImage: string;
  postImage: string;
  eventTitle: string;
  likes: string | number;
  comments: string | number;
  shares: string | number;
  postedTime: string;
  caption: string;
};

const postsData: EventCardProps[] = [
  {
    username: "vin_seenu_03",
    profileImage: "/story_images/image10.jpeg",
    postImage: "/story_images/image10.jpeg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Another post caption here. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    username: "Avijit_Verma x Ayush_Nauti",
    profileImage: "/story_images/image11.jpeg",
    postImage: "/story_images/image11.jpeg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Another post caption here. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    username: "Seenu X Shishi_Chaudhary",
    profileImage: "/story_images/image13.jpeg",
    postImage: "/story_images/image13.jpeg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Another post caption here. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    username: "Jairaj_berry",
    profileImage: "/story_images/image14.png",
    postImage: "/story_images/image14.png",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Another post caption here. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    username: "Kshipra_sharma",
    profileImage: "/story_images/image12.jpeg",
    postImage: "/story_images/image12.jpeg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Another post caption here. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    username: "Shashank x Lassi",
    profileImage: "/story_images/image15.jpg",
    postImage: "/story_images/image15.jpg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Lassi ke muh mai shashank ki khatti lassi #uhh #lassi #shashank #funny #viral",
  },
  {
    username: "Chickni x Nauti",
    profileImage: "/story_images/image16.jpg",
    postImage: "/story_images/image16.jpg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Lassi ke muh mai shashank ki khatti lassi #uhh #lassi #shashank #funny #viral",
  },
  {
    username: "Piyosh x Chutney",
    profileImage: "/story_images/image22.jpg",
    postImage: "/story_images/image22.jpg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Lassi ke muh mai shashank ki khatti lassi #uhh #lassi #shashank #funny #viral",
  },
  {
    username: "Monkita_Yadav",
    profileImage: "/story_images/image23.png",
    postImage: "/story_images/image23.png",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Lassi ke muh mai shashank ki khatti lassi #uhh #lassi #shashank #funny #viral",
  },
  {
    username: "Diwali x Dhamaka",
    profileImage: "/story_images/image17.dng",
    postImage: "/story_images/image17.dng",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Lassi ke muh mai shashank ki khatti lassi #uhh #lassi #shashank #funny #viral",
  },
  {
    username: "Uff x Pole",
    profileImage: "/story_images/image18.jpg",
    postImage: "/story_images/image18.jpg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Lassi ke muh mai shashank ki khatti lassi #uhh #lassi #shashank #funny #viral",
  },
  {
    username: "Hehe x Janpath",
    profileImage: "/story_images/image19.jpg",
    postImage: "/story_images/image19.jpg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Lassi ke muh mai shashank ki khatti lassi #uhh #lassi #shashank #funny #viral",
  },
  {
    username: "Panch_Gaon x Dosa",
    profileImage: "/story_images/image21.jpg",
    postImage: "/story_images/image21.jpg",
    eventTitle: "Second Post",
    likes: "52.3K",
    comments: "1.2K",
    shares: "200",
    postedTime: "2 hours ago",
    caption: "Lassi ke muh mai shashank ki khatti lassi #uhh #lassi #shashank #funny #viral",
  },
];

// ── Single post card ──────────────────────────────────────────────
function PostCard({ post }: { post: EventCardProps }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="">
      {/* Profile */}
      <div className="profile flex flex-row justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2">
          <div className="p-0.5 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className="bg-white rounded-full p-0.5">
              <Image
                src={post.profileImage}
                alt={post.username}
                width={40}
                height={40}
                className="rounded-full object-cover w-10 h-10"
              />
            </div>
          </div>
          <div className="text-sm font-semibold">{post.username}</div>
        </div>
        <Ellipsis />
      </div>

      {/* Post Image */}
      <div className="w-full h-auto">
        <Image
          src={post.postImage}
          alt={post.eventTitle}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-row justify-between items-center pt-2 pb-1">
        <div className="like-section-bar flex flex-row items-center gap-2 pl-2">
          <div className="flex flex-row items-center gap-1">
            <Heart
              size={23}
              onClick={() => setLiked(!liked)}
              fill={liked ? "red" : "none"}
              color={liked ? "red" : "currentColor"}
              className="cursor-pointer"
            />
            <span className="text-xs font-semibold">{post.likes}</span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <MessageCircle size={23} />
            <span className="text-xs font-semibold">{post.comments}</span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Repeat2 size={28} />
            <span className="text-xs font-semibold">{post.shares}</span>
          </div>

          <Send size={23} />
        </div>

        <div className="pr-2">
          <Bookmark size={27} />
        </div>
      </div>

      {/* Caption */}
      <div className="px-2 pt-1">
        <p className={`text-sm ${!expanded ? "line-clamp-3" : ""}`}>
          {post.caption}
        </p>
        {!expanded && (
          <span
            onClick={() => setExpanded(true)}
            className="text-sm text-gray-400 cursor-pointer hover:text-white"
          >
            ...more
          </span>
        )}
      </div>

      {/* Posted time */}
      <div className="posted-time text-xs text-gray-500 px-2 py-1">{post.postedTime}</div>
    </div>
  );
}

// ── Feed — renders all posts ──────────────────────────────────────
export default function Posts() {
  return (
    <div>
      {postsData.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}

