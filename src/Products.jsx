import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('./gadgets.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);

        // Get unique category names
        const allCategories = ["All Products", ...new Set(data.map(item => item.category))];
        setCategories(allCategories);
      });
  }, []);

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="text-center font-bold mt-[200px]">
      <h2 className="text-2xl lg:text-4xl">Explore Cutting-Edge Gadgets</h2>

      <div className="flex justify-center lg:justify-start">
        {/* Category Buttons */}
        <div className="m-8 p-4 bg-white h-fit rounded-lg flex flex-col items-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn w-[110px] mb-4 ${
                selectedCategory === category
                  ? 'btn-primary'
                  : 'btn-outline btn-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 m-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Product key={product.product_id} product={product} />
            ))
          ) : (
            <p className="text-gray-500 font-normal">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
