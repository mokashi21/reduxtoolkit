import React from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div>
      <h2>Products</h2>
      {products.map((data, id) => (
        <div key={id}>
          <p>Name - {data.name}</p>
          <p>price -{data.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
