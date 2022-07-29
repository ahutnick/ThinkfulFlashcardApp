import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import DeckList from "./DeckList";
import { listDecks } from "../../utils/api";

function Home() {
    const siteHistory = useHistory();
    const [decks, setDecks] = useState([]);


  function loadDecks(answer) {
    const realDbDecks = answer.filter((deck) => deck.id && deck.name && deck.description);
    setDecks(realDbDecks);

  }

  const onLoad = () => {
    const abortController = new AbortController();

    const loadDecksCards = async (signal) => {
      try {
        const answer = await listDecks(signal);
        loadDecks(answer);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        } else {
          throw error;
        }
      }
    }


    loadDecksCards(abortController.signal);
    return () => abortController.abort();
  };

  useEffect(onLoad, []);

    return (
        <>
            <div className="row">
                <div className="col-8">
                    <button onClick={() => {siteHistory.push("/decks/new")}} className="btn btn-secondary mb-3">Create Deck</button>
                </div>
            </div>
            <DeckList decks={decks} />            
        </>
    )
}

export default Home;
