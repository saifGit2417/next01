"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderConfirmed = () => {
  const router = useRouter();
  return (
    <div>
      <h1>congratulation you order has been placed successfully</h1>
      <button onClick={() => router.push("/order-product")}>
        Keep shopping
      </button>
    </div>
  );
};

export default OrderConfirmed;
