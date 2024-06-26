import DiscoverIcon from "@/icons/DiscoverIcon";
import HomeIcon from "@/icons/HomeIcon";
import PopularIcon from "@/icons/PopularIcon";
import UpcomingIcon from "@/icons/UpcomingIcon";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

export default function Nav() {
  // const { data: session } = useSession();
  return (
    <div className="bg-slate-800 text-slate-100 h-full  p-6 col-span-2">
      <p className="text-3xl  ">CinemaSavvy</p>

      <ul className="my-11 text-center">
        <Link href="/home">
          <li className="p-4 my-2 flex gap-8  items-center text-lg transition-all hover:bg-slate-300 hover:text-slate-800">
            <HomeIcon />
            <p>Home</p>
          </li>
        </Link>
        <Link href="/popular">
          <li className="p-4 my-2 text-lg flex gap-8  items-center transition-all hover:bg-slate-300 hover:text-slate-800">
            <PopularIcon />
            Popular
          </li>
        </Link>

        <Link href="/comments">
          <li className="p-4 my-2 text-lg flex gap-8  items-center transition-all hover:bg-slate-300 hover:text-slate-800">
            <DiscoverIcon />
            Reviews
          </li>
        </Link>
      </ul>
    </div>
  );
}
