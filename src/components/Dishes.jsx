import React from "react";
import dishes from "../data/dishes";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
	return (
		<div className="min-h-screen flex flex-col justify-content-center items-center lg:px-32 px-5">
			<h1 className="text-4xl font-semibold text-center pt-24 pb-10">
				Our Dishes
			</h1>
			<div className="flex flex-wrap gap-8 justify-center pt-24 pb-10">
				{dishes.map((dish) => (
					<DishesCard
						key={dish.id}
						img={dish.img}
						title={dish.title}
						price={dish.price}
					/>
				))}
			</div>
		</div>
	);
};

export default Dishes;
