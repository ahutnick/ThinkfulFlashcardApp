import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

function StudyCards({cards}) {
    const [card, setCard] = useState({content: cards[0], front: true, index: 0});
    const siteHistory = useHistory();

    const Flip = () => {
        setCard({...card, front: !card.front})
    }

    const Next = () => {
        setCard({index: card.index + 1, front: true, content: cards[card.index + 1]});
    }

    useEffect(() => {
        if (card.index === (cards.length - 1) && !card.front) {
            if (window.confirm("Restart cards? \n Click 'cancel' to return to the home page.")) {
                siteHistory.go(0);
            } else {
                siteHistory.push("/");
            }
        }
    }, [card])


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card {card.index + 1} of {cards.length}</h5>
                <p className="card-body">{card.front ? card.content.front : card.content.back}</p>
                <button className="btn btn-secondary mr-2" onClick={Flip}>Flip</button>
                {!card.front ? <button className="btn btn-primary" onClick={Next}>Next</button> : <></> }
            </div>
        </div>
    )
}

export default StudyCards;
