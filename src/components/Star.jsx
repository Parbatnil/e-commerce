import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="text-yellow-500 text-xl">
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center space-x-2">
      <div className="flex space-x-1">{ratingStars}</div>
      <p className="text-sm text-gray-600">({reviews} customer reviews)</p>
    </div>
  );
};

export default Star;
