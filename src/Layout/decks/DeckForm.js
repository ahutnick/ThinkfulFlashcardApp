import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";

function DeckForm({initialState}) {

    const [formData, setFormData] = useState({...initialState});
    const siteHistory = useHistory();

    useEffect(() => {
        setFormData({...initialState});
    }, [initialState]);


    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value});
    }

    

    async function processDeck() {
        const abortController = new AbortController();
        if (formData.id) {
            const { name, description, id } = formData
            return await updateDeck({ name, description, id }, abortController.signal) 
        } else {
            const { name, description } = formData
            return await createDeck({ name, description }, abortController.signal) 
        }
    }

    const HandleSubmit = async (event) => {
        event.preventDefault();
        const deck = await processDeck();
        siteHistory.push(`/decks/${deck.id}`);
        siteHistory.go(0);
    }

    return(

        <>
            <form onSubmit={HandleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        name="name"
                        className="form-control"
                        id="name"
                        type="text"
                        value={formData.name || ""}
                        placeholder="Deck Name"
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        name="description"
                        className="form-control"
                        id="description"
                        rows="4"
                        value={formData.description || ""}
                        placeholder="Brief description of the deck"
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <button onClick={() => {siteHistory.push("/")}} className="btn btn-secondary mr-3">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}



export default DeckForm;
