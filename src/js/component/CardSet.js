import React from 'react'
import Proptypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

const cardStyle = {
    width: "18rem",
    background: "#ffffff",
    textAlign: "center"
};

const cardData = {
	button: {
		url: "https://www.google.com/",
		label: "Find out more!"
	},
};

const CardSet = (props) => {
    return (
        <div className="col mt-4 p-5 rounded" style={cardStyle}>
            <img src={props.image} className="card-img-top" alt="..."></img>
            <div className="card-body p-3">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={cardData.button.url} className="btn btn-primary">{cardData.button.label}</a>
            </div>
        </div>
    )
}

CardSet.propTypes = {
    title: Proptypes.string,
    image: Proptypes.url,
    description: Proptypes.string
}

export default CardSet