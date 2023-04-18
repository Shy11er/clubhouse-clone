import React from "react";
import Link from "next/link";

import Avatar from "./Avatar";

const NavBar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-between px-20">
      <Link legacyBehavior href="/">
        <a className="text-3xl text-black flex-row flex items-center">
          {" "}
          <p>👋</p>
          <h1 className="mx-2">Clubhouse</h1>
        </a>
      </Link>
      <div className="flex-row flex items-center justify-center text-center">
        <h1 className="text-2xl mx-2">Daniel Brekker</h1>
        <Avatar fullName="Daniel" isUserAvatar />
      </div>
    </div>
  );
};

export default NavBar;
