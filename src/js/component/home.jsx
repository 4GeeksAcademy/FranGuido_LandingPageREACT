import React from "react";
import {Navbar} from "./Navbar";
import {Jumbotron} from "./Jumbotron";
import {InfoCard} from "./InfoCard";
import {Fatfooter} from "./Fatfooter";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<Navbar/>
			<Jumbotron/>
			<InfoCard/>
			<Fatfooter/>
			
		</div>
	);
};

export default Home;
