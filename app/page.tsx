import React from "react";
import Logo from "./components/Logo";
import { Button } from "./MaterialTailwind";
import SignInBtn from "./components/SignInBtn";
import SignUpBtn from "./components/SignUpBtn";

const LandingPage = () => {
  return (
    <div className="h-screen bg-gradient-to-tr from-blue-700 via-blue-200 to-blue-800 flex flex-col justify-center items-center">
      <nav className="absolute top-0 left-0 right-0 px-3 h-14 bg-white border-b flex items-center justify-between">
        <Logo />
        <div className="flex gap-2">
          <SignUpBtn />
          <SignInBtn />
        </div>
      </nav>
      <h1 className="text-6xl md:text-7xl lg:text-8xl text-center text-white font-semibold">
        <span className=" text-blue-900">W</span>
        <span className="">el</span>come To <span>P</span>ro Guide
      </h1>
      <div className="text-black text-lg font-lg max-w-xl mt-10 text-center pro-guide">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        architecto eius quidem accusamus blanditiis soluta voluptas repellendus
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        minima?
      </div>
    </div>
  );
};

export default LandingPage;
