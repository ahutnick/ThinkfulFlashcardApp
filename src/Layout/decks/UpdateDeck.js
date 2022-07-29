import React from "react";
import DeckForm from "./DeckForm";
import { breadcrumb } from "../common/Common";

function UpdateDeck({deck, url}) {
    return (
        <>
            {breadcrumb(deck.name, url, "Update Deck")}
            <h3>Update Deck</h3>
            <DeckForm initialState={ deck } />
        </>
    );
}

export default UpdateDeck;
