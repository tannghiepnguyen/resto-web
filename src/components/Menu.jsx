import React from "react";
import menu from "../data/menu";
import DishesCard from "../layouts/DishesCard";

const Menu = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
			<h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
				Premium Menu
			</h1>
			<div className="flex flex-wrap justify-center gap-8">
				{menu.map((dish) => (
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

export default Menu;
