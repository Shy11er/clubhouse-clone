import React from "react";
import Link from "next/link";

import Avatar from "./Avatar";
import { ProfileProps } from "../../utils/types";

const NavBar: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div
      // style={{ height: "96px !important" }}
      className="h-24 w-full flex items-center justify-between px-20 relative top-0 left-0 divide-y-reverse border-b-2 border-[#e3e1d5]"
    >
      <Link legacyBehavior href="/rooms">
        <a className="text-3xl font-medium text-black flex-row flex items-center">
          <p>👋</p>
          <h1 className="mx-2">Clubhouse</h1>
        </a>
      </Link>
      <Link legacyBehavior href={`/profile/${user.id}`}>
        <a>
          <div className="flex-row flex items-center justify-center text-center">
            <h1 className="text-2xl mx-2">{user.fullname}</h1>
            <Avatar
              fullName={user.fullname}
              isUserAvatar
              imageUrl={user.avatarUrl}
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
