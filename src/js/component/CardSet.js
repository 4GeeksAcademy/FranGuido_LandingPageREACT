import React from 'react'

const cardStyle = {
    background: "#ffffff",
    textAlign: "center"
};

const cardData = {
	image: "https://picsum.photos/300",
	cardTitle: "Card title",
	cardDescription:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	button: {
		url: "https://www.google.com/",
		label: "Find out more!",
	},
};

const CardSet = () => {
    return (
        <div className="mt-4 p-5 rounded" style={cardStyle}>
            <img src={cardData.image} className="card-img-top" alt="..."></img>
            <div className="card-body p-3">
                <h5 className="card-title">{cardData.cardTitle}</h5>
                <p className="card-text">{cardData.cardDescription}</p>
                <a href={cardData.button.url} className="btn btn-primary">{cardData.button.label}</a>
            </div>
        </div>
    )
}

export default CardSet