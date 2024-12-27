import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  console.log(products);

  return (
    <div>
      <h1 className="text-center">Products Available</h1>
      {products?.map((product) => {
        const { id, title, price, description, image, category } = product;
        let ProductDiv = (
          <div key={id} className="text-center">
            <h2>{title}</h2>
            
                <div><img src={image} alt="" width="200px"/></div>
            <div>${price}</div>
            <div>{description}</div>
          </div>
        );
        return ProductDiv
      })}
    </div>
  );
}

export default Product;
