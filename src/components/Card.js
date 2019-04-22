import React from "react";

const Card = props => {
	const { email, name, id } = props;
	return (
		<div className="card">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />{" "}
			<div>
				<h2> {name} </h2> <p> {email} </p>{" "}
			</div>{" "}
		</div>
	);
};

export default Card;
