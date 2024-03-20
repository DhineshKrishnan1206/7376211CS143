import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api/api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts();
  }, [categoryName]);

  const getAllProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      console.log(`${BASE_URL}/categories/${categoryName}`)
      const response = await axios.get(`${BASE_URL}/getProduct/`, {
        categoryName,
      });
      setProducts(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  return (
    <div className="container bg-black mx-auto p-4 flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter Category Name"
        value={categoryName}
        onChange={handleCategoryChange}
      />
      {isLoading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}
      {!isLoading && !error && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-20">
          {products.map((product) => (
            <li key={product.id} className="bg-white shadow-md w-64 h-48 bg-gray-900 rounded-lg overflow-hidden">

              <h2 className="p-4 font-bold text-white text-lg">{product.productName}</h2>
              <h2 className="p-4 font-bold text-white text-lg">{product.companyName}</h2>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllProducts;
