import React, { useState } from 'react';
import { IoBagCheck } from "react-icons/io5";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import filled and empty star icons

// Function to truncate description to a minimum of 10 words and add ellipsis if needed
const truncateDescription = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length >= wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  // Pad with ellipses if there are fewer than the word limit
  return words.concat(Array(wordLimit - words.length).fill('...')).join(' ');
};

// Function to render stars based on rating
const renderStars = (rating) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, i) => (
        <FaStar key={`filled-${i}`} className="text-yellow-500" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-gray-400" />
      ))}
    </div>
  );
};

const Card = ({ title, description, image, price, rating }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center border rounded-lg shadow-md overflow-hidden mt-5 bg-white" style={{ height: '420px', width: '280px' }}>
      <img src={image} alt={title} className="object-fit " style={{ height: '56%', width: '100%' }} />
      
      <div className="flex justify-between w-full px-4 mt-2">
        <p className="text-left text-lg font-medium">{title}</p>
        <div className="text-right text-lg font-medium mt-1">
          {renderStars(rating)}
        </div>
      </div>

      <p className="text-left text-[14px] px-2 pl-4 mt-2">{truncateDescription(description, 10)}</p>

      <div className="flex justify-between w-full px-3 mt-2">
        <p className="text-left ml-1 text-lg text-gray-500">1U = 25kg</p>
        <select 
          value={quantity}
          onChange={handleQuantityChange}
          className="text-center text-lg text-gray-500 bg-gray-100 border border-gray-300 rounded px-2 py-1 mr-1"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <div className='flex w-full'>
        <button className="mt-4 mb-0 px-4 py-2 w-[45%] bg-white text-green-500 font-bold rounded flex items-center justify-center space-x-2 text-xl">
          <span>₹{price}</span>
        </button>

        <button className="mt-4 mb-0 px-4 py-2 w-[60%] bg-green-600 text-white font-bold rounded hover:bg-green-700 flex items-center justify-center space-x-2">
          <span>Add to Cart</span>
          <IoBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
