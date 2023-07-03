import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Fatfooter from "./Fatfooter";
import CardSet from "./CardSet";



//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="row">
				<div className="col"> <CardSet/> </div>
				<div className="col"> <CardSet/> </div>
				<div className="col"> <CardSet/> </div>
			</div>
			<Fatfooter/>
		</div>
	);
};

export default Home;
