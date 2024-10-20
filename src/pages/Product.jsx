import React from "react";

const Product = () => {
  const products = [
    { id: 1, name: "Product 1", description: "This is an awesome product.", price: "$100", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", description: "Another amazing product.", price: "$150", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", description: "Don't miss this product.", price: "$200", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-center text-[50px] font-bold text-white shadow-lg mb-10">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-5 text-center">
            <img src={product.img} alt={product.name} className="w-32 h-32 object-cover mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <span className="text-green-500 font-bold">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
