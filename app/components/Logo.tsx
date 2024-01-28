import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="whitespace-nowrap font-extrabold text-xl">
      <span className="text-2xl text-blue-600">P</span>ro {""}
      <span className="text-2xl text-blue-600 ps-1">G</span>
      <span className="text-blue-600">uide</span>
    </Link>
  );
}

export default Logo