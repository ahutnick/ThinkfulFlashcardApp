import React from "react";
import Card from "./Card";

function CardsList({cards}) {

    return cards?.length > 0 && (
        <>
            <h3>Cards</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Front</th>
                        <th scope="col">Back</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((card) => <Card key={`Card-${card.id}`} card={card} />)}
                </tbody>
            </table>

        </>
    )

}

export default CardsList;
