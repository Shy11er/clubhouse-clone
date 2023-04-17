import React from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";

export default function Profile() {
  const router = useRouter();
  const url = router.query;

  return <NavBar />;
}
