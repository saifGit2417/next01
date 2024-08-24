import React from "react";

interface ParamsInterface {
  productId: number;
}
const ProductId = ({ params }: { params: ParamsInterface }) => {
  return (
    <div>
      <h6>
        Dynamic prodcut id , instead of having multiple routes we can have
        multiple routes based on id of products
      </h6>
      <p>
        Note : params will get its productId from folder name , please check
        folder name when trying to hit and access dynamic route value
      </p>
      <h3>dynamic product id from url is {params.productId}</h3>
    </div>
  );
};

export default ProductId;
