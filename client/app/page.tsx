import About from "@/components/About";
import Announcements from "@/components/Announcements";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Page() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Announcements />
    </>
  );
}
