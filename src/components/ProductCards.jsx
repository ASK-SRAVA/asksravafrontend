import React from "react";

const ProductCards = ({ products = [], title = "Recommended for you" }) => {
  const sampleProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      image: "https://via.placeholder.com/150",
      price: "₹1,34,900",
      originalPrice: "₹1,49,900",
      discount: "10%",
      rating: 4.5,
      reviews: 1234,
      badges: ["Genuine", "Best Value"],
      platform: "amazon",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      image: "https://via.placeholder.com/150",
      price: "₹79,999",
      originalPrice: "₹89,999",
      discount: "11%",
      rating: 4.3,
      reviews: 856,
      badges: ["Verified"],
      platform: "flipkart",
    },
  ];

  const displayProducts = products.length ? products : sampleProducts;

  return (
    <div className="px-3 py-3">
      {/* Section header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-headingMD font-semibold text-dark">{title}</h2>
        <button className="text-xs font-medium text-primary">View all</button>
      </div>

      {/* Cards */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[170px] bg-white rounded-xl border border-gray-100 p-2"
          >
            {/* Image */}
            <div className="w-full h-28 bg-gray-50 rounded-lg flex items-center justify-center mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-sm font-medium text-dark leading-tight line-clamp-2 mb-1">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-1">
              <span className="bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded">
                {product.rating} ★
              </span>
              <span className="text-[11px] text-gray-500">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="mb-2">
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-dark">
                  {product.price}
                </span>
                <span className="text-[11px] text-green-600 font-medium">
                  {product.discount} off
                </span>
              </div>
              <span className="text-[11px] text-gray-400 line-through">
                {product.originalPrice}
              </span>
            </div>

            {/* Badges */}
            <div className="flex gap-1 mb-2">
              {product.badges.slice(0, 1).map((badge, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              className={`w-full text-xs font-semibold py-2 rounded-lg ${
                product.platform === "amazon"
                  ? "bg-orange-500 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {product.platform === "amazon"
                ? "Check on Amazon"
                : "Check on Flipkart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
