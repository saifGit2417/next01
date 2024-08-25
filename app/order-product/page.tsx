"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
    const router = useRouter();

  const handleOrderProduct = () => {
    console.log("product ordered");
    router.push("order-product/order-confirmed");
  };
  return (
    <>
      <button onClick={handleOrderProduct}>order product</button>
    </>
  );
};

export default OrderProduct;
