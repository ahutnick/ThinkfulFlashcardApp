import React from "react";

function DeckCard({ deck, cards }) {
    const cardsForDeck = cards.filter((card) => card.deckId === deck.id);
        return (
            <div key={deck.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">{deck.name}</h5>
                    <h6 className="card-subtitle text-right">{cardsForDeck.length} cards</h6>
                    <p className="card-text">{deck.description}</p>
                    <button className="btn btn-secondary">View</button>
                    <button className="btn btn-primary">Study</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
}

export default DeckCard;
