import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = ({ img, title, price }) => {
	return (
		<div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
			<img src={img} alt="img" className="rounded-xl" />
			<div className="space-y-4">
				<h3 className="font-semibold text-center text-xl pt-6">{title}</h3>
				<div className="flex flex-row justify-center">
					<BsStarFill className="text-brightColor" />
					<BsStarFill className="text-brightColor" />
					<BsStarFill className="text-brightColor" />
					<BsStarFill className="text-brightColor" />
					<BsStarHalf className="text-brightColor" />
				</div>
				<div className="flex lex-row items-center justify-center gap-4">
					<h3 className="font-semibold text-lg">{price}</h3>
					<Button title="Buy now" />
				</div>
			</div>
		</div>
	);
};

export default DishesCard;
