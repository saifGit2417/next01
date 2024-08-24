import React from "react";

interface ItemIdInterafce {
  itemId: string;
  productId: string;
}

const ItemId = ({ params }: { params: ItemIdInterafce }) => {
  return (
    <div>
      <h1>this is ecample of nested dynamic routing</h1>
      <p>dynmaic route with product id is {params.productId} </p>
      <p>dynmaic nested routing with item id is {params.itemId} </p>
    </div>
  );
};

export default ItemId;
