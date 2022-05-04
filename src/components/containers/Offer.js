import React from 'react'
import { useParams } from "react-router-dom";

export default function Offer() {
    const { id } = useParams();
    return (
        <div>
            <h2>Mon produit qui déchiiiire</h2>
            <span>Le produit id est le : {id} </span>
        </div>
    )
}
