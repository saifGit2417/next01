"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  let randomNumberArray = [12, 14, 16];
  // this below for loop is giving some error check it later
  //   for (let i = 0; i < 3; i++) {
  //     let randomNumber = Math.ceil(Math.random() * 99);
  //     randomNumberArray.push(randomNumber);
  //   }

  return (
    <div>
      <h1>main product page</h1>

      {randomNumberArray?.map((number, index) => {
        return (
          <li key={index}>
            <Link href={`products/${number}/item/${number + 7}`}>
              product {number} item {number + 7}{" "}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default page;
