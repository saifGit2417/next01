import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Global page</h1>
      <Link href={"/about"}>
        <button>Go to about</button>
      </Link>
      <br />
      <Link href={"/feature/12/concept/23"}>
        <button>
          Go to feature page - feature id is 12 and concept id is 23
        </button>
      </Link>
    </div>
  );
};

export default page;
