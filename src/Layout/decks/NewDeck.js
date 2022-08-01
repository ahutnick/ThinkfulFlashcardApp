import React from "react";
import { breadcrumb } from "../common/Common";
import DeckForm from "./DeckForm";

function NewDeck() {

    return (
        <>
            {breadcrumb("Create Deck")}
            <h3>Create Deck</h3>
            <DeckForm initialState={{}} />
        </>
    );
}

export default NewDeck;
