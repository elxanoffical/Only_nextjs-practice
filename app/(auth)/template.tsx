"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "register", href: "/register" },
  { name: "login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function layout({ children }: { children: React.ReactNode }) {
  const Pathname = usePathname();
  const [input, setinput] = useState("");
  return (
    <>
      <div>
        <input className="border border-black" value={input} onChange={(e)=>setinput(e.target.value)} type="text"  />
      </div>
      {navLinks.map((item) => {
        const isActive = Pathname.startsWith(item.href);
        return (
          <Link
            className={`${
              isActive ? "font-bold mr-4" : "text-blue-500 mr-4"
            } border-2 border-cyan-700`}
            href={item.href}
            key={item.name}
          >
            {item.name}
          </Link>
        );
      })}
      <div className="flex gap-2 mt-6 mb-6 text-gray-500 border-b border-black">
        layout: {children}
      </div>
    </>
  );
}
