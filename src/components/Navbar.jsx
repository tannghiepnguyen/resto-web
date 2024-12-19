import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown, BiRestaurant } from "react-icons/bi";
import { Link } from "react-scroll";
import Button from "../layouts/Button";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const handleChange = () => {
		setMenu(!menu);
	};

	const closeMenu = () => {
		setMenu(false);
	};
	return (
		<div className="fixed w-full">
			<div>
				<div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
					<div className="flex flex-row items-center cursor-pointer">
						<span>
							<BiRestaurant size={32} />
						</span>
						<h1 className="text-xl font-semibold">FoodieWeb</h1>
					</div>
					<nav className="hidden md:flex flex-row items-center font-medium gap-8">
						<Link
							to="home"
							spy={true}
							smooth={true}
							duration={500}
							className="cursor-pointer hover:text-brightColor transition-all"
						>
							Home
						</Link>
						<div className="relative group">
							<div className="flex items-center gap-1">
								<Link
									to="dishes"
									spy={true}
									smooth={true}
									duration={500}
									className="cursor-pointer hover:text-brightColor transition-all"
								>
									Dishes
								</Link>
								<BiChevronDown size={25} className="cursor-pointer" />
							</div>
							<ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-100 rounded-lg p-5">
								<li>
									<Link
										to="spicy"
										spy={true}
										smooth={true}
										duration={500}
										className="cursor-pointer hover:text-brightColor transition-all"
									>
										Spicy
									</Link>
								</li>
								<li>
									<Link
										to="tasty"
										spy={true}
										smooth={true}
										duration={500}
										className="cursor-pointer hover:text-brightColor transition-all"
									>
										Tasty
									</Link>
								</li>
								<li>
									<Link
										to="delicious"
										spy={true}
										smooth={true}
										duration={500}
										className="cursor-pointer hover:text-brightColor transition-all"
									>
										Delicious
									</Link>
								</li>
								<li>
									<Link
										to="crispy"
										spy={true}
										smooth={true}
										duration={500}
										className="cursor-pointer hover:text-brightColor transition-all"
									>
										Crispy
									</Link>
								</li>
							</ul>
						</div>
						<Link
							to="about"
							spy={true}
							smooth={true}
							duration={500}
							className="cursor-pointer hover:text-brightColor transition-all"
						>
							About
						</Link>
						<Link
							to="menu"
							spy={true}
							smooth={true}
							duration={500}
							className="cursor-pointer hover:text-brightColor transition-all"
						>
							Menu
						</Link>
						<Link
							to="review"
							spy={true}
							smooth={true}
							duration={500}
							className="cursor-pointer hover:text-brightColor transition-all"
						>
							Reviews
						</Link>
						<Button title="Login" />
					</nav>
					<div className="md:hidden flex items-center">
						{menu ? (
							<AiOutlineClose size={25} onClick={handleChange} />
						) : (
							<AiOutlineMenuUnfold size={25} onClick={handleChange} />
						)}
					</div>
				</div>
				<div
					className={`${
						menu ? "translate-x-0" : "translate-x-full"
					} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
				>
					<Link
						to="home"
						spy={true}
						smooth={true}
						duration={500}
						className="cursor-pointer hover:text-brightColor transition-all"
					>
						Home
					</Link>
					<Link
						to="dishes"
						spy={true}
						smooth={true}
						duration={500}
						className="cursor-pointer hover:text-brightColor transition-all"
					>
						Dishes
					</Link>
					<Link
						to="about"
						spy={true}
						smooth={true}
						duration={500}
						className="cursor-pointer hover:text-brightColor transition-all"
					>
						About
					</Link>
					<Link
						to="menu"
						spy={true}
						smooth={true}
						duration={500}
						className="cursor-pointer hover:text-brightColor transition-all"
					>
						Menu
					</Link>
					<Link
						to="reviews"
						spy={true}
						smooth={true}
						duration={500}
						className="cursor-pointer hover:text-brightColor transition-all"
					>
						Reviews
					</Link>
					<Button title="Login" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
