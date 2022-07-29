import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

function CardForm({cardInfo}) {
    const siteHistory = useHistory();
    const {url} = useRouteMatch();
    const initialState = {front: "", back: ""}
    const [formData, setFormData] = useState({...initialState});

    useEffect(() => {
        cardInfo.front ? setFormData(cardInfo) : setFormData({...initialState, ...cardInfo});

    }, [cardInfo]);


    const handleChange = (target) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleSubmit =  async (event) => {
        const abortController = new AbortController();
        event.preventDefault();
        if (url.includes("edit")) {
            await updateCard(formData, abortController.signal);
            siteHistory.push(`/decks/${formData.deckId}`);
            siteHistory.go(0);
        } else {
            await createCard(formData.deckId, formData, abortController.signal);
            setFormData({...initialState, deckId: formData.deckId});
        }
    } 

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="front">Front</label>
                <textarea 
                    name="front"
                    id="front"
                    className="form-control"
                    value={formData.front}
                    onChange={handleChange}
                    required={true}
                    rows="4"
                    placeholder="Front side of card"
                />
            </div>
            <div className="form-group">
                <label htmlFor="back">Back</label>
                <textarea 
                    name="back"
                    id="back"
                    className="form-control"
                    value={formData.back}
                    onChange={handleChange}
                    required={true}
                    rows="4"
                    placeholder="Back side of card"
                />
            </div>
            <div className="mb-3">
                <button className="btn btn-secondary mr-2" onClick={() => siteHistory.push(`/decks/${formData.deckId}`)}>{url.includes("edit") ? "Cancel" : "Done"}</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        )


}

export default CardForm;
