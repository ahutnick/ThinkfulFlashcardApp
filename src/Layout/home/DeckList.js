import React from "react";
import DeckCard from "./DeckCard";

function DeckList({ decks, cards }) {
    const entries = decks.map((deck) => { 
        return ( 
            <DeckCard deck={ deck } cards={cards} /> 
        );
    });
    
    return (
        decks.length > 0 && (
            <>
                <div className="row">
                    <div className="col-8">
                        {entries}
                    </div>
                </div>
            </>
        )
    )
}

export default DeckList;
