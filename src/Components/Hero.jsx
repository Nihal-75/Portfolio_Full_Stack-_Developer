import React, { useState } from "react";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mx-auto font-serif w-[95%] sm:w-[85%] items-center pb-10 mt-12 md:mt-24 flex justify-between flex-wrap sm:flex-nowrap">

      {/* LEFT SIDE TEXT */}
      <div className="flex flex-col gap-6 py-10 md:py-0 px-2 sm:w-[80%]">
        <h1 className="xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-semibold">
          Hi there, I am
        </h1>

        <h1 className="xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-semibold 
          text-green-600 overflow-hidden whitespace-nowrap border-r-4 pr-2 animate-typing animate-blink">
          Nihal Pandey
        </h1>

        <p className="sm:text-lg text-md capitalize">
          I have been working as a Full-Stack Developer at SkillVertex for the past 7 months
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href="mailto:nihalpandey636@gmail.com"
            className="bg-green-600 text-white px-6 py-2 rounded-md relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            <span className="relative z-10 font-bold text-white">Hire Me</span>
          </a>

          <button className="relative text-gray-200 dark:text-black px-6 py-2 rounded-md overflow-hidden group">
            <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
            <span className="relative z-10 font-bold group-hover:text-gray-800">
              Latest Projects
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center sm:gap-10 gap-6 mt-1">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">1</h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">Years Experience</p>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">10+</h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">Projects Completed</p>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">98%</h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">Faster Delivery</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE + BACKGROUND TITLE */}
      <div className="sm:w-[30%] w-[70%] flex justify-center mx-auto relative">

        {/* Big Background Text */}
        <h2 className="absolute -z-20 font-bold text-[38px] sm:text-[65px] text-white/10 dark:text-black/10 
          uppercase tracking-wider rotate-[-12deg] select-none">
          MERN STACK DEVELOPER
        </h2>

        {/* Glow Wave */}
        <div className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full 
          bg-gradient-to-tr from-green-500 via-blue-500 to-purple-500 blur-[80px] opacity-60 animate-pulse -z-10"></div>

        {/* Circle Photo */}
        <img
          src={"/nihal_circle.png"}  // public folder image
          alt="Nihal Pandey"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] shadow-[0_0_40px_rgba(0,0,0,0.55)] object-cover transition-all duration-500 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
      </div>
    </div>
  );
}

export default React.memo(Hero);
