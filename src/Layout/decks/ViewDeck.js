import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { useParams, useRouteMatch, useHistory, Switch, Route } from "react-router-dom";
import { DeleteBtn } from "../common/Common";
import UpdateDeck from "./UpdateDeck";
import CardsList from "../cards/CardsList";
import Study from "../study/Study";
import NewCard from "../cards/NewCard";
import UpdateCard from "../cards/UpdateCard";
import { breadcrumb } from "../common/Common";

function ViewDeck() {
    const siteHistory = useHistory()
    const { deckId, cardId } = useParams();
    const { path, url } = useRouteMatch()
    const [deck, setDeck] = useState({});

    

    const onLoad = () => {
        const loadDeck = async (signal) => {
            try {
                const loaded = await readDeck(deckId, signal);
                setDeck(loaded);
            } catch (error) {
                if (error.name === "AbortError") {
                    return;
                } else {
                    throw error;
                }
            }
        }
        const abortController = new AbortController();
        loadDeck(abortController.signal);
        return () => abortController.abort();
    }

    useEffect(onLoad, [deckId]);
    const { name, description, cards } = deck;


    return (
        <>
            <Switch>
                <Route exact path={`${path}/edit`}>
                    <UpdateDeck deck={deck}/>
                </Route>
                <Route path={`${path}/study`}>
                    <Study  deck={deck} />
                </Route>
                <Route path={`${path}/cards/new`}>
                    <NewCard deck={deck} />
                </Route>
                <Route path={`${path}/cards/:cardId/edit`}>
                    <UpdateCard deck={deck} cardId={cardId}/>
                </Route>
                <Route path={`${url}`}>
                    <div className="mb-5">
                        {breadcrumb(name)}
                        <h3>{ name }</h3>
                        <p>{ description }</p>
                        <button className="btn btn-secondary mr-2" onClick={ () => { siteHistory.push(`${url}/edit`)}}>Edit</button>
                        <button className="btn btn-primary mr-2" onClick={ () => { siteHistory.push(`${url}/study`)}}>Study</button>
                        <button className="btn btn-primary mr-2" onClick={ () => { siteHistory.push(`${url}/cards/new`)}}>+ Add Cards</button>
                        <button className="btn btn-danger" onClick={() => DeleteBtn(deck, siteHistory)}>Delete</button>
                    </div>
                    <CardsList cards={cards}/>
                </Route>
            </Switch>


        </>
    )

}

export default ViewDeck;
