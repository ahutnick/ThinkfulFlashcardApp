import React from "react";
import {useRouteMatch, useHistory } from "react-router-dom";
import { DeleteBtn } from "../common/Common";

function Card({card}) {
    const { url } = useRouteMatch();
    const siteHistory = useHistory()
    return (
        <tr>
            <td>{card.front}</td>
            <td>
                <div className="row">
                    {card.back}
                </div>
                <div className="row mt-2">
                    <button className="btn btn-secondary mr-2" onClick={() => siteHistory.push(`${url}/edit`)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => DeleteBtn(card, siteHistory)}>Delete</button>
                </div>
            </td>
        </tr>
    )

}

export default Card;
