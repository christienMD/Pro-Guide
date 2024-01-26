import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  label: string;
}

const Navlink = ({ href, label }: Props) => {
  return (
    <Link className="text-base text-blue-600" href={href}>
      {label} 
    </Link>
  );
};

export default Navlink;
