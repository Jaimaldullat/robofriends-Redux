import React from "react";

import Card from "./Card";

const CardList = ({
    robots
}) => {
    const cardsArray = robots.map((user, index) => {
        return ( <
            Card key = {
                index
            }
            id = {
                user.id
            }
            name = {
                user.name
            }
            email = {
                user.email
            }
            />
        );
    });
    return <div className="robo-container" > {
        cardsArray
    } < /div>;
};

export default CardList;