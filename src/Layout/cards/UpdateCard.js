import React, { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import CardForm from "./CardForm";
import { readCard } from "../../utils/api";

function UpdateCard({deck}) {
    const [card, setCard] = useState({});
    const {cardId} = useParams();
    

    


    useEffect(() => {
        async function onLoad() {
            try {
                const abortController = new AbortController();
                const loaded = await readCard(cardId, abortController.signal);
                setCard(loaded);
            } catch (error) {
                if (error.name !== "AbortError") {
                    throw error
                } 
            }
        }
        onLoad()

    }, [cardId]
        );

    return (
        <>
            <p><Link to="/">Home</Link> / <Link to={`/decks/${deck.id}`}>{deck.name}</Link> / Edit Card {cardId} </p>
            <h3> Edit Card </h3>
            <CardForm cardInfo={card}/>

        </>
    )
}

export default UpdateCard;
