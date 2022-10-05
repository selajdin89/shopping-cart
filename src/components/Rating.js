import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
};

export default Rating;
