import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const ProductGrid = ({ category, categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!categoryId) return;
      setLoading(true);
      try {
        const response = await getProducts(categoryId);
        setProducts(response.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  if (!category) return null;

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6 text-center">
        <div className="text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (products.length === 0) return null;
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6">
      <div className="mb-4">
        <h2 className="text-headingMD md:text-headingLG font-bold text-primary">
          Best in {category}
        </h2>
        <p className="text-labelMD font-semibold text-gray-500">
          Top rated products from trusted sellers
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-100 p-3 md:p-4 hover:shadow-md transition-shadow"
          >
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-3">
              <span className="text-3xl md:text-4xl">{product.image}</span>
            </div>

            <h3 className="font-medium text-accent text-labelMD mb-2 line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center mb-2">
              <div className="flex items-center bg-accent text-secondary text-labelSM px-1.5 py-0.5 rounded">
                ₹{Number(product.price).toLocaleString("en-IN")}
                
              </div>
                {/* <span>{product.rating}</span>
                  <span className="ml-0.5">★</span> */}
            </div>

            <div className="space-y-2">
              <button className="w-full bg-orange-500 text-white text-labelSM font-medium py-2 rounded-lg active:bg-orange-600 transition-colors">
                Amazon
              </button>
              <button className="w-full bg-blue-500 text-white text-labelSM font-medium py-2 rounded-lg active:bg-blue-600 transition-colors">
                Flipkart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGrid;
