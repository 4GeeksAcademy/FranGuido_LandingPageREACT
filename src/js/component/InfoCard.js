import React from 'react'

const cardData = {
	image: "https://picsum.photos/200",
	cardTitle: "Card title",
	cardDescription:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	button: {
		url: "https://www.google.com/",
		label: "Find out more!",
	},
};

const InfoCard = () => {
    return (
        <div class="card" style="width: 18rem;">
            <img src={cardData.image} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{cardData.cardTitle}</h5>
                <p class="card-text">{cardData.cardDescription}</p>
                <a href={cardData.button.url} class="btn btn-primary">{cardData.button.label}</a>
            </div>
        </div>
    )
};

export default InfoCard