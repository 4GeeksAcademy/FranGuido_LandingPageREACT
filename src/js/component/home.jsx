import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Fatfooter from "./Fatfooter";
import CardSet from "./CardSet";

// card section setting

let cardInfo = [{title: "First picture", image: "https://picsum.photos/id/10/50/50", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}, {title: "Second picture", image: "https://picsum.photos/id/11/50/50", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}, {title: "Third picture", image: "https://picsum.photos/id/12/50/50", description: "This text is not in latin hehe. It would be better in spanish tho. Aaaaaaanyway, go read the next card. It will be such fun!"}, {title: "Fourth picture", image: "https://picsum.photos/id/13/50/50", description:"Na na na nananana, nannana, hey Jude. Na na na nananana, nannana, hey Jude. Na na na nananana, nannana, hey Jude."}]

//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="row align-items">
				{
					cardInfo.map((value, index, array) =>{
						return <CardSet title={value.title} image={value.image} description={value.description} key={index}/>
					})
				}
			</div>
			<Fatfooter/>
		</div>
	);
};

export default Home;
