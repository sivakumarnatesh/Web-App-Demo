import React from "react";
import "./Products.css";
import images from "../../assets/Images/Images";

function Products() {
  return (
    <div className="Heading">
      <div className="Heading-Inside">
        Exceptionally designed products for homes
      </div>
      <div className="products">
        <div className="product1">
          <img src={images.Product1} alt="Product1" />
        </div>
        <div className="product2">
          <img src={images.Product2} alt="Product2" />
        </div>
        <div className="product3">
          <img src={images.Product3} alt="Product3" />
        </div>
        <div className="product4">
          <img src={images.Product4} alt="Product4" />
        </div>
      </div>
    </div>
  );
}

export default Products;
