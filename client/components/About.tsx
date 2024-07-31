import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="">
      <div className="bg-[#e2012d] py-16">
        <div className="w-fit flex items-center  gap-10 px-4 mx-auto">
          <div className="flex-none">
            <Image
              src={"/Logo.png"}
              alt="Logo"
              height={100}
              width={100}
              sizes="100%"
            />
          </div>
          <div className="flex-1 max-w-sm w-full text-white">
            <div className="font-semibold text-2xl">
              Innovate, Elevate, Dominate
            </div>
            <div className="text-sm">
              Uniting Tech and Triumph: Together, We Raise Trophies as One
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#edf2f4] py-8 px-4">
        <div className="max-w-5xl mx-auto text-black1 py-10 text-justify">
          Techniosys is the tech innovation club of IIIT Dharwad, dedicated to
          exploring and mastering upcoming technology platforms. Our club
          focuses on organizing events and workshops on APIs, cloud services,
          and other cutting-edge technologies to help students enhance their
          skills and improve their CVs. In addition to tech-centric activities,
          Techniosys offers a unique blend of relaxation and fun through our
          dedicated eSports team, which hosts exciting eSports tournaments and
          gaming sessions.
        </div>
      </div>
    </section>
  );
}
