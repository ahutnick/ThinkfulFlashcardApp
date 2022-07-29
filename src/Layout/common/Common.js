import React from "react";
import { deleteDeck, deleteCard } from "../../utils/api";

export function breadcrumb(title1, link1=null, title2=null) {
    if (link1 && title2) {
        return ( 
            <>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href={link1}>{title1}</a></li>
                        <li className="breadcrumb-item active">{title2}</li>
                    </ol>
                </nav>
            </>     
    )} else {
        return (
            <>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">{title1}</li>
                    </ol>
                </nav>
            </>
        )
    }

}

async function deleteItem(type, item) {
    const abortController = new AbortController();
    if (window.confirm(`Delete this ${type}? \n You will not be able to recover it.`)) {
        try {
            if (type === "deck"){
                await deleteDeck(item.id, abortController.signal);
            } else if (type === "card") {
                await deleteCard(item.id, abortController.signal);
            }
            
        } catch (error) {
            if (error.name === "AbortError") {
                return;
            } else {
                throw error;
            }
        }
    }

    return () => abortController.abort();
}

export async function DeleteBtn(item, siteHistory) {
    let type = "card";
    if ('cards' in item) {
        type = "deck"
    } 

    deleteItem(type, item)
    siteHistory.go(0);
}
