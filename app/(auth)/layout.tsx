/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];
  const pathName = usePathname();
  return (
    <div>
      <div
        style={{
          padding: "1rem",
          border: "2px solid lightblue",
          display: "flex",
          gap: "20px",
        }}
      >
        {navLinks?.map((item) => {
          const isActive = pathName.startsWith(item.href);
          return (
            <div key={item.name}>
              <Link
                href={item.href}
                className={
                  isActive
                    ? "font-bold mr-4 text-sky-400 border-2 border-solid border-black p-2"
                    : "text-black mr-4"
                }
                style={{}}
              >
                {item.name}{" "}
              </Link>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default layout;
