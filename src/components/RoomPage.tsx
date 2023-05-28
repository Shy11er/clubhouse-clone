import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {
  title: string;
};

function RoomPage({ title }: Props) {
  return (
    <div className="w-full h-full rounded-xl bg-[#f4f4f0] p-10">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-4xl">{title}</h1>
        <Link href="/rooms" legacyBehavior>
          <a>
            <Button title="Leave quietly" clsName="bg-red-400 text-white" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default RoomPage;
