import React from "react";
import DeckList from "./DeckList";

function Home({ decks, cards }) {
    return (
        <>
            <div className="row">
                <div className="col-8">
                    <button className="btn btn-secondary">Create Deck</button>
                </div>
            </div>
            <DeckList decks={decks} cards={cards}/>            
        </>
    )
}

export default Home;
