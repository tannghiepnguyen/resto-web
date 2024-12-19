import React from "react";
import reviews from "../data/reviews";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
			<h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
				Customer's Review
			</h1>
			<div className="flex flex-col md:flex-row gap-5 mt-5">
				{reviews.map((review, index) => (
					<ReviewCard key={index} img={review.img} name={review.name} />
				))}
			</div>
		</div>
	);
};

export default Review;
