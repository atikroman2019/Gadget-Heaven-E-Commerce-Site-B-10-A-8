import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ showInitially = true }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        const allCategories = [ "All Products",  ...new Set(data.map((item) => item.category)),
        ];
        setCategories(allCategories);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="mt-[150px] px-4 lg:px-12">
      <h2 className="text-center text-2xl lg:text-4xl  font-bold mb-10">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">

      <div className="bg-white p-4 rounded-2xl shadow-md flex flex-wrap lg:flex-col lg:h-[350px] gap-3 lg:gap-6 w-full lg:w-[180px]">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`btn w-[90px] sm:w-[110px] lg:w-[130px] ${
        selectedCategory === category
          ? "btn bg-[#9538E2]"
          : "btn-outline"
      }`}
    >
      {category}
    </button>
  ))}
</div>


<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProducts.map((product) => (
    <Product key={product.product_id} product={product} ></Product>
  ))}
</div>

      </div>
    </div>
  );
};

export default Products;
