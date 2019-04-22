import React from "react";

const Searchbox = ({ searchField, searchChange }) => {
	return (
		<div className="input-container">
			<input
				className="robo-input"
				type="search"
				placeholder="Search Robots"
				onChange={searchChange}
			/>
		</div>
	);
};

export default Searchbox;
