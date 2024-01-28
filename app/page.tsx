import React from "react";
import Logo from "./components/Logo";
import { Button } from "./MaterialTailwind";
import SignInBtn from "./components/SignInBtn";

const LandingPage = () => {
  return (
    <div className="h-screen bg-[#fcfcfc] flex flex-col justify-center items-center">
      <nav className="absolute top-0 left-0 right-0 px-3 h-14 bg-white border-b flex items-center justify-between">
        <Logo />
        <div className="flex gap-2">
          <SignInBtn />
        </div>
      </nav>
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-center text-blue-600 font-semibold">
        <span className=" text-black">W</span>
        <span>el</span>come To <span className="text-black">P</span>ro Guide
      </h1>
      <div className="text-black text-lg font-lg max-w-xl mt-10 text-center pro-guide">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        architecto eius quidem accusamus blanditiis soluta voluptas repellendus
      </div>
    </div>
  );
};

export default LandingPage;
