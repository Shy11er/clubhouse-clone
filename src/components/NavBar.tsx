import React from "react";
import Link from "next/link";

import Avatar from "./Avatar";

const NavBar: React.FC = () => {
  return (
    <div
      // style={{ height: "96px !important" }}
      className="h-24 w-full flex items-center justify-between px-20 relative top-0 left-0 divide-y-reverse border-b-2 border-[#e3e1d5]"
    >
      <Link legacyBehavior href="/rooms">
        <a className="text-3xl font-medium text-black flex-row flex items-center">
          {" "}
          <p>👋</p>
          <h1 className="mx-2">Clubhouse</h1>
        </a>
      </Link>
      <Link legacyBehavior href={`/profile/123`}>
        <a>
          <div className="flex-row flex items-center justify-center text-center">
            <h1 className="text-2xl mx-2">Daniel Brekker</h1>
            <Avatar fullName="Daniel" isUserAvatar />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
