import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Fatfooter from "./Fatfooter";

//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<Navbar/>
			<Jumbotron/>
			<Fatfooter/>
			<h1 className="text-center mt-5">Bye Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
