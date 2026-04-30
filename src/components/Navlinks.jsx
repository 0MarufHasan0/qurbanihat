"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "border-b border-green-700 text-green-700" : ""
      } transition-all`}
    >
      {children}
    </Link>
  );
};

export default Navlinks;