import React from "react";
import {useHistory, useRouteMatch} from "react-router-dom";

function NotEnoughCards({cardsLength = 0}) {
    const siteHistory = useHistory();
    const { url } = useRouteMatch();
    const updatedUrl = url.replace("study", "cards/new")
    return (
        <>
            <h4>Not Enough Cards</h4>
            <p>You need at least 3 cards to study. There are {cardsLength} cards in this deck. </p>
            <button className="btn btn-primary" onClick={(() => siteHistory.push(updatedUrl))}>+ Add Cards</button>
        </>
    )
}

export default NotEnoughCards;
