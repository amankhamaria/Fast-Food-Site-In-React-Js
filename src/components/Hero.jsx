import React from "react";
import Navbar from "./Navbar";
import { ArrowDown } from "lucide-react";

const Hero = () => {


  function handleScroll(){
      const element = document.getElementById("categories");
  element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="h-screen bg-[url(https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg)] bg-center bg-cover">
      <section className="bg-linear-to-t from-[#1b1b1dcc] via-[#111111bb] to-[#d4d4d8b2] text-white h-full">
        <Navbar />
        <div className="h-full w-full text-center mt-24">
          <h1 className="text-5xl font-dancing-script font-semibold">
            Shree Seva Sadan Restaurant
          </h1>
          <p className="mt-2">Pure Veg • Pure Taste • Pure Trust</p>
        <button className="border rounded-full p-3 mt-44 animate-bounce hover:cursor-pointer" onClick={handleScroll}><ArrowDown /></button>
          <p className="mt-4 text-sm font-light text-neutral-400">Click to Scroll</p>
        </div>

      </section>
    </section>
  );
};

export default Hero;