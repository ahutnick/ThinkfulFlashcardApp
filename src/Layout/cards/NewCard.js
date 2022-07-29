import React from "react";
import CardForm from "./CardForm";
import { breadcrumb } from "../common/Common";

function NewCard({deck}) {

    return (
        <>
            {breadcrumb(deck.name, `/decks/${deck.id}`, "Add Card")}
            <h3>{deck.name}: Add Card</h3>
            <CardForm cardInfo={{deckId: deck.id}}/>
        </>
    )
}

export default NewCard;

