import Image from "next/image";
import React from "react";
import data from "@/public/data.json";

const ReviewCard = ({reviews}) => {
   
    
  return (
    <div className="flex flex-col gap-3 mt-4 mb-6">
      <div className="flex flex-row gap-3">
        <Image
          src={data[0].image}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col ">
          <h1 className="text-sm">{reviews[0]?.user}</h1>
          <p className="text-xs text-gray-600 ">{reviews[0]?.since}</p>
          
        </div>
        
      </div>
      <div className="flex text-blue-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < Math.round(reviews[0]?.stars)
                  ? "fill-current text-blue-500"
                  : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>

<p>
    {data[0].reviews[0].comment}
</p>

    </div>
  );
};

export default ReviewCard;
