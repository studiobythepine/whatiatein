import React from "react";
import Image from "next/image";

const Review = ({ review }) => {
  return (
    <div
      key={review.id}
      className={`w-auto h-1/2 md:w-1/2  md:h-1/2  border-slate-300 ${
        review.attributes.rating ? "bg-lime-700" : "bg-red-700"
      } `}
    >
      <div id="card-top" className="flex justify-evenly">
        {review.attributes.image.data != null ? (
          <Image
            //   layout="responsive"
            width={200}
            height={200}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${review.attributes.image.data.attributes.url}`}
            alt="image"
          />
        ) : null}
        <div id="card-top-right" className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-green-900">{review.attributes.name}</h1>
          <h2>
            {review.attributes.place.data.attributes.city}, {review.attributes.place.data.attributes.country}
          </h2>
        </div>
      </div>
      <p className="">{review.attributes.description}</p>
      <div>
        {review.attributes.taste === "bad"
          ? "EWW"
          : review.attributes.taste === "okay"
          ? "OK"
          : review.attributes.taste === "good"
          ? "GOOD"
          : "error"}
      </div>
      <div>{review.attributes.price}</div>
    </div>
  );
};

export default Review;
