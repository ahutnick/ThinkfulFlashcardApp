import React from "react";
import DeckCard from "./DeckCard";

function DeckList({ decks }) {
    const entries = decks.map((deck) => { 
        return ( 
            <DeckCard key={`Deck-${deck.id}`} deck={ deck } /> 
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
