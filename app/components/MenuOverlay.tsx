import React from "react";
import Navlink from "./Navlink";

interface Navlink {
  label: string;
  path: string;
}

interface Props {
  links: Navlink[];
}

const MenuOverLay = ({ links }: Props) => {
  return (
    <nav>
      <ul className="flex flex-col pt-3 mt-16 items-start gap-4 px-2">
        {links.map((link) => (
          <li key={link.path} className="border-b w-full flex justify-between">
            <Navlink href={link.path} label={link.label} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#e5e5e5"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuOverLay;
