import React from "react";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const url = router.query;

  return (
    <div>
      <h1>{`Post: ${url.id}`}</h1>
    </div>
  );
}
