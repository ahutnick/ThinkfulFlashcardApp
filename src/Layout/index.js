import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./home/Home";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  const sampleDecks = [{id: 1, name: "Testing", description: "I really hope this works!"}, {id: 2, name: "1, 2, 3", description: "Anything but THAT"}];
  const sampleCards = [{id: 1, front: "What's this say?", back: "Not like anyone's gonna see it", deckId: 1}];

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home decks={sampleDecks} cards={sampleCards}/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
