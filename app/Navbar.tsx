"use client";

import { Button } from "./MaterialTailwind";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import MenuOverLay from "./components/MenuOverlay";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Quizzes", path: "/pages/quizzes" },
    { label: "About", path: "/pages/about" },
  ];

  return (
    <div>
      <nav className="flex justify-between space-x-5 md:space-x-10 border-b px-5 h-16 items-center bg-white fixed top-0 right-0 left-0 z-10">
        <Link href="/" className="whitespace-nowrap font-extrabold text-xl">
          <span className="text-2xl text-blue-600">P</span>ro {""}
          <span className="text-2xl text-blue-600 ps-1">G</span>
          <span className="text-blue-600">uide</span>
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <motion.button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-2 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-slate-200"
              whileTap={{ scale: 1.3 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            >
              <Bars3Icon className="h-6 w-6" />
            </motion.button>
          ) : (
            <motion.button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-2 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-slate-200"
              whileTap={{ scale: 1.3 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            >
              <XMarkIcon className="h-6 w-6" />
            </motion.button>
          )}
        </div>

        <div className="hidden md:flex justify-between w-full items-center">
          <ul className="flex space-x-3 md:space-x-6 items-center">
            <li>
              <Link href="/">
                <Button
                  placeholder=""
                  variant="text"
                  className=" hover:text-blue-600 font-light tracking-widest text-gray-500 capitalize"
                  color="blue"
                >
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/quizzes">
                <button
                  type="button"
                  className="px-6 py-2 text-blue-600 bg-blue-50 rounded-md font-semibold capitalize"
                >
                  Quizzes
                </button>
              </Link>
            </li>
          </ul>
          <div className="me-8">Profile</div>
        </div>
      </nav>

      {/* Mobile navigation links */}
      {navbarOpen && <MenuOverLay links={navLinks} />}
    </div>
  );
};

export default Navbar;
