import React from "react";

export default function Announcements() {
  return (
    <section className="bg-black0 py-20 w-full px-4">
      <h1 className="text-white text-center font-bold uppercase text-2xl">
        Announcements
      </h1>
      <div className="max-w-5xl w-full mx-auto py-10">
        <div className="rounded border border-black1 p-4 flex flex-col">
          <div className="text-white">Announcement 1</div>
          <div className="text-slate-300 text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div className="rounded border border-black1 mt-4 p-4 flex flex-col">
          <div className="text-white">Announcement 2</div>
          <div className="text-slate-300 text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </section>
  );
}
