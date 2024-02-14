import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import "./star.css";

export default function StarRating({ length = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="stars">
      {[...Array(length)].map((_, index) => {
        return (
          <FaRegStar
            key={index}
            className={index + 1 <= hover ? "active" : "inactive"}
            onClick={() => setRating(index + 1)}
            onMouseMove={() => setHover(index + 1)}
            onMouseLeave={() => setHover(rating)}
            size={40}
          />
        );
      })}
    </div>
  );
}
