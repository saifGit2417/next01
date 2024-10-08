// "use client";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
interface ItemIdInterafce {
  itemId: string;
  productId: string;
}

const ItemId = ({ params }: { params: ItemIdInterafce }) => {
  /*
  how to conditionally show an error based on certain condition

  useCase > item id should be less than 100 , if it exceeds 100 show not found message
  */

  if (parseInt(params.itemId) > 100) {
    notFound();
  }

  function createRandomNumber(number: number) {
    return Math.ceil(Math.random() * number);
  }

  let randomNumber = createRandomNumber(2);
  if (randomNumber === 1) {
    throw new Error("error message sent from item id's page.tsx");
  }

  return (
    <div>
      <h1>this is example of nested dynamic routing</h1>
      <p>dynamic route with product id is {params.productId} </p>
      <p>dynamic nested routing with item id is {params.itemId} </p>

      <button>
        <Link href={"/products"}>go back to product page</Link>
      </button>
    </div>
  );
};

export default ItemId;
