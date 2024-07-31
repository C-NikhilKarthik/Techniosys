import React from "react";

export default function Landing() {
  return (
    <section className="bg-black0 font-drukwide min-h-screen w-full flex items-center justify-center">
      <div className="max-w-6xl flex mx-auto">
        <div className="text-white">
          <div className="text-[clamp(3em,5vw,6em)] leading-[1.1] tracking-wider uppercase">
            Techniosys
          </div>
          <div className="text-slate-300 text-lg font-clash">
            Leading with Technology,
            <span className="text-red1 ml-2 font-clash">
              Thriving in eSports.
            </span>
            {/* <span className="text-red1 font-clash">IIIT Dharwad</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
