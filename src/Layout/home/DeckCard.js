import React from "react";
import { DeleteBtn } from "../common/Common";
import { useHistory } from "react-router-dom";

function DeckCard({ deck }) {
    const cardsForDeck = deck.cards.length;
    const siteHistory = useHistory();
    
        return (
            <div key={deck.id} className="card">
                <div className="card-body">
                    <div class="row">
                        <div className="col-6">
                        <h5 className="card-title">{deck.name}</h5>
                        </div>
                        <div className="col-6">
                        <h6 className="card-subtitle text-right">{cardsForDeck} cards</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-8">
                            <p className="card-text">{deck.description}</p>
                        </div>
                        <div className="col-5 mt-3">
                            <button className="btn btn-secondary mr-2" onClick={() => siteHistory.push(`/decks/${deck.id}`)}>View</button>
                            <button className="btn btn-primary mr-2" onClick={() => siteHistory.push(`/decks/${deck.id}/study`)}>Study</button>
                            <button className="btn btn-danger" onClick={() => DeleteBtn(deck, siteHistory)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default DeckCard;
