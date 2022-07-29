import React from "react";
import NotEnoughCards from "./NotEnoughCards";
import StudyCards from "./StudyCards";
import { breadcrumb } from "../common/Common";

// Add in breadcrumb

function Study({deck}) {

    return (
        <>
            {breadcrumb(deck.name, `decks/${deck.id}`, "Study")}
            <h3>Study: {deck.name}</h3>
            {deck.cards?.length > 2 ? <StudyCards cards={deck.cards} /> : <NotEnoughCards cardsLength={deck.cards?.length}/>}
        </>
    )

}

export default Study;
