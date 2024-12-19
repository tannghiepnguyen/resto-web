import React from "react";
import Button from "../layouts/Button";

const About = () => {
	return (
		<div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
			<img src={`../../public/img/about.png`} alt="img" />
			<div className="space-y-4 lg:pt-14">
				<h1 className="font-semibold text-4xl text-center md:text-start">
					Why Choose Us
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
					exercitationem eius vel culpa obcaecati ab provident voluptas adipisci
					dolor quod quidem, enim facere, dolorum mollitia architecto, ipsam id
					dignissimos? Odit.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae non
					quisquam ullam expedita voluptate quos consequuntur accusamus ab,
					ipsam eaque reiciendis facere quae, at necessitatibus facilis dolor
					placeat quasi quibusdam!
				</p>
				<div className="flex justify-center lg:justify-start">
					<Button title="Learn more" />
				</div>
			</div>
		</div>
	);
};

export default About;
